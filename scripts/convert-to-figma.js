// Script to convert standard design tokens to Figma Tokens format
const fs = require('fs');

function convertToFigmaTokens(inputPath, outputPath) {
  const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const figmaTokens = {};
  
  // Convert colors
  if (tokens.global && tokens.global.value) {
    figmaTokens.FitQuest = {
      colors: {}
    };
    
    for (const [category, values] of Object.entries(tokens.global.value)) {
      figmaTokens.FitQuest.colors[category] = values;
    }
  }
  
  // Add other token categories...
  
  fs.writeFileSync(outputPath, JSON.stringify(figmaTokens, null, 2));
  console.log(`Converted tokens saved to ${outputPath}`);
}

// Usage example
convertToFigmaTokens('./tokens.json', './figma-tokens.json');
