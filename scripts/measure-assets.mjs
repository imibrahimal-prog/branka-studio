import fs from 'fs';
import path from 'path';

function getFilesSize(dir, extensions = []) {
  let totalSize = 0;
  let fileCount = 0;
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (extensions.length === 0 || extensions.includes(ext)) {
          totalSize += stat.size;
          fileCount++;
          files.push({ path: fullPath, size: stat.size, name: item });
        }
      }
    }
  }

  if (fs.existsSync(dir)) {
    traverse(dir);
  }
  return { totalSize, fileCount, files };
}

const publicImages = getFilesSize('public', ['.jpg', '.jpeg', '.png', '.webp', '.svg']);
console.log(`\n=== BASELINE PUBLIC IMAGES ===`);
console.log(`Total Image Files: ${publicImages.fileCount}`);
console.log(`Total Public Images Size: ${(publicImages.totalSize / (1024 * 1024)).toFixed(2)} MB`);

// Top 10 largest images
publicImages.files.sort((a, b) => b.size - a.size);
console.log('\nTop 10 Largest Images:');
publicImages.files.slice(0, 10).forEach((f, i) => {
  console.log(`${i + 1}. ${f.name} (${(f.size / 1024).toFixed(1)} KB)`);
});

const nextStatic = getFilesSize('.next/static', ['.js']);
console.log(`\n=== BASELINE COMPILED JS ===`);
console.log(`Total JS Files in .next/static: ${nextStatic.fileCount}`);
console.log(`Total JS Size: ${(nextStatic.totalSize / 1024).toFixed(2)} KB`);
