import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await optimizeDirectory(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const originalBuffer = fs.readFileSync(fullPath);
        const originalSize = originalBuffer.length;
        if (originalSize > 50 * 1024) { // Only optimize files > 50KB
          let buffer;
          if (ext === '.png') {
            buffer = await sharp(originalBuffer).png({ quality: 85, compressionLevel: 9 }).toBuffer();
          } else {
            buffer = await sharp(originalBuffer).jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer();
          }
          if (buffer.length < originalSize) {
            fs.writeFileSync(fullPath, buffer);
            console.log(`Optimized ${item}: ${(originalSize/1024).toFixed(1)} KB -> ${(buffer.length/1024).toFixed(1)} KB`);
          }
        }
      }
    }
  }
}

optimizeDirectory('public/projects')
  .then(() => console.log('Projects optimization done.'))
  .catch(console.error);
