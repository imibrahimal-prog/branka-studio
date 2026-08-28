import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  console.log('Starting asset compression with sharp...');

  // 1. Optimize branka-loader-pattern.png
  const loaderPatternPath = 'public/images/branka-loader-pattern.png';
  if (fs.existsSync(loaderPatternPath)) {
    const originalBuffer = fs.readFileSync(loaderPatternPath);
    const originalSize = originalBuffer.length;
    const buffer = await sharp(originalBuffer)
      .png({ quality: 85, compressionLevel: 9, palette: true })
      .toBuffer();
    
    if (buffer.length < originalSize) {
      fs.writeFileSync(loaderPatternPath, buffer);
      console.log(`Optimized branka-loader-pattern.png: ${(originalSize/1024).toFixed(1)} KB -> ${(buffer.length/1024).toFixed(1)} KB`);
    }
  }

  // 2. Optimize background images in public/images
  const heavyBgImages = [
    'public/images/hero-luxury-office-bg.jpg',
    'public/images/contact-office-bg.jpg',
    'public/images/contact-newsletter-bg.jpg',
    'public/images/hero-serene-bg.jpg',
  ];

  for (const imgPath of heavyBgImages) {
    if (fs.existsSync(imgPath)) {
      const originalBuffer = fs.readFileSync(imgPath);
      const originalSize = originalBuffer.length;
      const buffer = await sharp(originalBuffer)
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toBuffer();
      if (buffer.length < originalSize) {
        fs.writeFileSync(imgPath, buffer);
        console.log(`Optimized ${path.basename(imgPath)}: ${(originalSize/1024).toFixed(1)} KB -> ${(buffer.length/1024).toFixed(1)} KB`);
      }
    }
  }

  // 3. Optimize service images in public/images/services
  const servicesDir = 'public/images/services';
  if (fs.existsSync(servicesDir)) {
    const serviceFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
    for (const file of serviceFiles) {
      const fullPath = path.join(servicesDir, file);
      const originalBuffer = fs.readFileSync(fullPath);
      const originalSize = originalBuffer.length;
      let buffer;
      if (file.endsWith('.png')) {
        buffer = await sharp(originalBuffer).png({ quality: 85, compressionLevel: 9 }).toBuffer();
      } else {
        buffer = await sharp(originalBuffer).jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer();
      }
      if (buffer.length < originalSize) {
        fs.writeFileSync(fullPath, buffer);
        console.log(`Optimized service ${file}: ${(originalSize/1024).toFixed(1)} KB -> ${(buffer.length/1024).toFixed(1)} KB`);
      }
    }
  }

  console.log('Image compression complete.');
}

optimizeImages().catch(console.error);
