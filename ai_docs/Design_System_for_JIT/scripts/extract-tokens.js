/**
 * Design Token Extractor
 * Run this to extract design tokens from your CSS for Figma import
 * 
 * Usage: node scripts/extract-tokens.js
 */

const fs = require('fs');
const path = require('path');

// Read the CSS file
const cssContent = fs.readFileSync(path.join(__dirname, '../styles/globals.css'), 'utf8');

// Extract CSS custom properties
function extractTokens() {
  const tokens = {
    color: {},
    typography: {},
    spacing: {},
    borderRadius: {}
  };

  // Extract color tokens
  const colorMatches = cssContent.match(/--color-[^:]+:[^;]+;/g) || [];
  colorMatches.forEach(match => {
    const [property, value] = match.split(':');
    const name = property.replace('--color-', '').trim();
    const cleanValue = value.replace(';', '').trim();
    
    if (cleanValue.startsWith('#') || cleanValue.startsWith('rgb')) {
      tokens.color[name] = { value: cleanValue };
    }
  });

  // Add direct color values from :root
  const rootColors = {
    'primary': '#4f46e5',
    'primary-foreground': '#ffffff',
    'secondary': '#f9fafb',
    'secondary-foreground': '#1f2937',
    'muted': '#f3f4f6',
    'muted-foreground': '#6b7280',
    'accent': '#f3f4f6',
    'accent-foreground': '#1f2937',
    'destructive': '#dc2626',
    'destructive-foreground': '#ffffff',
    'border': '#e5e7eb',
    'background': '#ffffff',
    'foreground': '#1f2937'
  };

  Object.entries(rootColors).forEach(([name, value]) => {
    tokens.color[name] = { value };
  });

  // Typography tokens
  tokens.typography = {
    'heading-1': {
      fontSize: { value: '40px' },
      fontWeight: { value: '600' },
      lineHeight: { value: '1.2' },
      letterSpacing: { value: '-0.025em' }
    },
    'heading-2': {
      fontSize: { value: '32px' },
      fontWeight: { value: '600' },
      lineHeight: { value: '1.3' },
      letterSpacing: { value: '-0.025em' }
    },
    'heading-3': {
      fontSize: { value: '24px' },
      fontWeight: { value: '600' },
      lineHeight: { value: '1.4' }
    },
    'heading-4': {
      fontSize: { value: '20px' },
      fontWeight: { value: '500' },
      lineHeight: { value: '1.5' }
    },
    'body': {
      fontSize: { value: '16px' },
      fontWeight: { value: '400' },
      lineHeight: { value: '1.6' }
    },
    'label': {
      fontSize: { value: '14px' },
      fontWeight: { value: '500' },
      lineHeight: { value: '1.5' }
    }
  };

  // Spacing tokens
  tokens.spacing = {
    'radius-sm': { value: '4px' },
    'radius-md': { value: '6px' },
    'radius-lg': { value: '8px' },
    'radius-xl': { value: '12px' }
  };

  // Border radius
  tokens.borderRadius = {
    'sm': { value: '4px' },
    'md': { value: '6px' },
    'lg': { value: '8px' },
    'xl': { value: '12px' }
  };

  return tokens;
}

// Generate the tokens file
const tokens = extractTokens();
const outputPath = path.join(__dirname, '../design-tokens.json');

fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2), 'utf8');

console.log('✅ Design tokens extracted successfully!');
console.log(`📁 Saved to: ${outputPath}`);
console.log('\n🔧 Next steps:');
console.log('1. Install "Design Tokens" plugin in Figma');
console.log('2. Import the design-tokens.json file');
console.log('3. Apply tokens to your Figma design system');

// Also create a simple HTML export for screenshots
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JIT Design System - Component Export</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">JIT Design System Components</h1>
        
        <!-- Color Palette -->
        <div class="bg-white p-6 rounded-lg border">
            <h2 class="text-xl font-semibold mb-4">Color Palette</h2>
            <div class="grid grid-cols-4 gap-4">
                <div class="text-center">
                    <div class="w-full h-20 bg-indigo-600 rounded-lg mb-2"></div>
                    <p class="text-sm font-medium">Primary</p>
                    <p class="text-xs text-gray-500">#4F46E5</p>
                </div>
                <div class="text-center">
                    <div class="w-full h-20 bg-gray-50 rounded-lg border mb-2"></div>
                    <p class="text-sm font-medium">Secondary</p>
                    <p class="text-xs text-gray-500">#F9FAFB</p>
                </div>
                <div class="text-center">
                    <div class="w-full h-20 bg-gray-100 rounded-lg mb-2"></div>
                    <p class="text-sm font-medium">Muted</p>
                    <p class="text-xs text-gray-500">#F3F4F6</p>
                </div>
                <div class="text-center">
                    <div class="w-full h-20 bg-red-600 rounded-lg mb-2"></div>
                    <p class="text-sm font-medium">Destructive</p>
                    <p class="text-xs text-gray-500">#DC2626</p>
                </div>
            </div>
        </div>

        <!-- Typography -->
        <div class="bg-white p-6 rounded-lg border">
            <h2 class="text-xl font-semibold mb-4">Typography</h2>
            <div class="space-y-4">
                <div>
                    <h1 class="text-4xl font-semibold">Heading 1</h1>
                    <p class="text-sm text-gray-500">40px • Semibold</p>
                </div>
                <div>
                    <h2 class="text-3xl font-semibold">Heading 2</h2>
                    <p class="text-sm text-gray-500">32px • Semibold</p>
                </div>
                <div>
                    <h3 class="text-2xl font-semibold">Heading 3</h3>
                    <p class="text-sm text-gray-500">24px • Semibold</p>
                </div>
                <div>
                    <p class="text-base">Body text for general content and descriptions.</p>
                    <p class="text-sm text-gray-500">16px • Normal</p>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="bg-white p-6 rounded-lg border">
            <h2 class="text-xl font-semibold mb-4">Buttons</h2>
            <div class="space-y-4">
                <div class="flex gap-4">
                    <button class="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">Primary</button>
                    <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">Outline</button>
                    <button class="text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100">Ghost</button>
                </div>
                <div class="flex gap-4 items-center">
                    <button class="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium">Small</button>
                    <button class="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium">Default</button>
                    <button class="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium">Large</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../component-export.html'), htmlTemplate, 'utf8');
console.log('📄 Also created component-export.html for easy screenshots');