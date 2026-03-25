const fs = require('fs');
const path = require('path');
const srcDir = 'C:\\Users\\Vinh\\.gemini\\antigravity\\brain\\c9b529f6-4601-4421-b5af-89d6d23fbafb';
const destDir = 'D:\\V_Potofolio\\Frontend\\public\\blog-covers';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.png') && !file.includes('media__')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    console.log('Copied ' + file);
  }
});
