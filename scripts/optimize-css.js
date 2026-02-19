const fs = require('fs');
const path = require('path');

// CSS optimization script
function optimizeCSS() {
  const cssPath = path.join(__dirname, '..', 'src', 'app', 'globals.css');
  let css = fs.readFileSync(cssPath, 'utf8');
  
  // Remove unnecessary whitespace and comments
  css = css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
    .replace(/{\s*/g, '{') // Remove spaces after opening braces
    .replace(/\s*}/g, '}') // Remove spaces before closing braces
    .replace(/,\s*/g, ',') // Remove spaces after commas
    .replace(/:\s*/g, ':') // Remove spaces after colons
    .replace(/;\s*/g, ';') // Remove spaces after semicolons
    .trim();
  
  fs.writeFileSync(cssPath, css);
  console.log('CSS optimized successfully!');
}

if (require.main === module) {
  optimizeCSS();
}

module.exports = { optimizeCSS };
