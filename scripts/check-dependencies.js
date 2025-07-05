const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

// All installed dependencies (both regular and dev)
const installedDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies
};

// Required dependencies
const requiredDeps = {
  // Icons
  'lucide-react': 'latest',
  
  // Radix UI Primitives
  '@radix-ui/react-slot': '^1.1.0',
  '@radix-ui/react-dialog': '^1.1.6',
  '@radix-ui/react-dropdown-menu': '^2.1.1',
  '@radix-ui/react-navigation-menu': '^1.2.4',
  '@radix-ui/react-accordion': '^1.2.3',
  '@radix-ui/react-tabs': '^1.1.3',
  '@radix-ui/react-toast': '^1.2.6',
  '@radix-ui/react-sheet': '^1.1.6',
  '@radix-ui/react-badge': '^1.1.2',
  '@radix-ui/react-separator': '^1.1.0',
  '@radix-ui/react-tooltip': '^1.1.6',
  '@radix-ui/react-hover-card': '^1.1.6',
  '@radix-ui/react-avatar': '^1.1.3',
  '@radix-ui/react-progress': '^1.1.3',
  '@radix-ui/react-alert': '^1.1.6',
  '@radix-ui/react-alert-dialog': '^1.1.6',
  '@radix-ui/react-aspect-ratio': '^1.1.2',
  '@radix-ui/react-checkbox': '^1.1.1',
  '@radix-ui/react-collapsible': '^1.1.3',
  '@radix-ui/react-context-menu': '^2.2.6',
  '@radix-ui/react-label': '^2.1.0',
  '@radix-ui/react-menubar': '^1.1.6',
  '@radix-ui/react-popover': '^1.1.6',
  '@radix-ui/react-radio-group': '^1.2.3',
  '@radix-ui/react-scroll-area': '^1.2.4',
  '@radix-ui/react-select': '^2.1.6',
  '@radix-ui/react-slider': '^1.2.3',
  '@radix-ui/react-switch': '^1.1.3',
  '@radix-ui/react-toggle': '^1.1.3',
  '@radix-ui/react-toggle-group': '^1.1.3',
  
  // Styling utilities
  'class-variance-authority': '^0.7.0',
  'clsx': '^2.1.1',
  'tailwind-merge': '^2.0.0',
  'tailwindcss-animate': '^1.0.0',
  
  // Additional packages for full shadcn/ui support
  '@hookform/resolvers': '^3.10.0',
  'react-hook-form': '^7.54.2',
  'date-fns': '^4.2.0',
  'recharts': '^2.15.0',
  'embla-carousel-react': '^8.5.2',
  'sonner': '^1.7.2',
  'cmdk': '^1.0.4',
  'input-otp': '^1.4.2',
  'react-resizable-panels': '^2.1.7',
  'react-day-picker': '^9.5.1',
  'vaul': '^1.1.2',
  'zod': '^3.24.1',
};

// Check which dependencies are missing
const missingDeps = [];
const presentDeps = [];

for (const [dep, version] of Object.entries(requiredDeps)) {
  if (installedDeps[dep]) {
    presentDeps.push(dep);
  } else {
    missingDeps.push({ name: dep, version });
  }
}

console.log('📦 Dependency Audit Report');
console.log('=========================\n');

console.log(`✅ Already installed (${presentDeps.length}):`);
presentDeps.forEach(dep => console.log(`   - ${dep}`));

console.log(`\n❌ Missing dependencies (${missingDeps.length}):`);
missingDeps.forEach(({ name, version }) => console.log(`   - ${name}@${version}`));

if (missingDeps.length > 0) {
  console.log('\n📝 Installation commands:\n');
  
  // Group by category for easier installation
  const radixDeps = missingDeps.filter(d => d.name.startsWith('@radix-ui/'));
  const otherDeps = missingDeps.filter(d => !d.name.startsWith('@radix-ui/'));
  
  if (radixDeps.length > 0) {
    console.log('# Radix UI components:');
    console.log(`npm install ${radixDeps.map(d => d.name).join(' ')}\n`);
  }
  
  if (otherDeps.length > 0) {
    console.log('# Other dependencies:');
    console.log(`npm install ${otherDeps.map(d => d.name).join(' ')}\n`);
  }
  
  console.log('# Or install all at once:');
  console.log(`npm install ${missingDeps.map(d => d.name).join(' ')}`);
}

console.log('\n✨ Done!');