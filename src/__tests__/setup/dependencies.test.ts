import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';

describe('Design System Dependencies', () => {
  let packageJson: any;

  beforeAll(() => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = fs.readFileSync(packagePath, 'utf-8');
    packageJson = JSON.parse(packageContent);
  });

  describe('Required shadcn/ui dependencies', () => {
    const requiredDependencies = [
      // Icons
      'lucide-react',
      
      // Radix UI Primitives
      '@radix-ui/react-slot',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-accordion',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      // Note: sheet and badge are custom shadcn/ui components, not Radix primitives
      '@radix-ui/react-separator',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-avatar',
      '@radix-ui/react-progress',
      // Note: alert is a custom shadcn/ui component, not a Radix primitive
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-popover',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-slider',
      '@radix-ui/react-switch',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      
      // Styling utilities
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'tailwindcss-animate',
    ];

    requiredDependencies.forEach(dep => {
      it(`should have ${dep} installed`, () => {
        const dependencies = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        expect(dependencies).toHaveProperty(dep);
      });
    });
  });

  describe('Next.js compatibility', () => {
    it('should be compatible with Next.js 14 or 15', () => {
      const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
      expect(nextVersion).toBeDefined();
      
      // Extract major version
      const majorVersion = parseInt(nextVersion.replace(/[\^~]/, '').split('.')[0]);
      expect([14, 15]).toContain(majorVersion);
    });
  });

  describe('Additional required packages', () => {
    const additionalPackages = [
      // Form handling (used by some shadcn components)
      '@hookform/resolvers',
      'react-hook-form',
      
      // Date handling (for calendar/date components)
      'date-fns',
      
      // Chart components
      'recharts',
      
      // Carousel
      'embla-carousel-react',
      
      // Toast notifications
      'sonner',
      
      // Command palette
      'cmdk',
      
      // OTP input
      'input-otp',
      
      // Resizable panels
      'react-resizable-panels',
      
      // Calendar
      'react-day-picker',
      
      // Drawer (mobile)
      'vaul',
      
      // Zod for validation
      'zod',
    ];

    additionalPackages.forEach(pkg => {
      it(`should have ${pkg} installed for full shadcn/ui support`, () => {
        const dependencies = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        expect(dependencies).toHaveProperty(pkg);
      });
    });
  });

  describe('TypeScript support', () => {
    it('should have TypeScript configured', () => {
      expect(packageJson.devDependencies).toHaveProperty('typescript');
      expect(packageJson.devDependencies).toHaveProperty('@types/react');
      expect(packageJson.devDependencies).toHaveProperty('@types/react-dom');
      expect(packageJson.devDependencies).toHaveProperty('@types/node');
    });
  });

  describe('Testing dependencies', () => {
    it('should have Jest configured', () => {
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      expect(dependencies).toHaveProperty('jest');
      expect(dependencies).toHaveProperty('@testing-library/react');
      expect(dependencies).toHaveProperty('@testing-library/jest-dom');
    });
  });
});

// Utility function to check if a package is installed
export function isPackageInstalled(packageName: string): boolean {
  try {
    require.resolve(packageName);
    return true;
  } catch {
    return false;
  }
}

// List of all required packages for easy installation
export const REQUIRED_PACKAGES = {
  icons: ['lucide-react'],
  radixPrimitives: [
    '@radix-ui/react-slot',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-accordion',
    '@radix-ui/react-tabs',
    '@radix-ui/react-toast',
    '@radix-ui/react-separator',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-hover-card',
    '@radix-ui/react-avatar',
    '@radix-ui/react-progress',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-aspect-ratio',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-collapsible',
    '@radix-ui/react-context-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-menubar',
    '@radix-ui/react-popover',
    '@radix-ui/react-radio-group',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-slider',
    '@radix-ui/react-switch',
    '@radix-ui/react-toggle',
    '@radix-ui/react-toggle-group',
  ],
  styling: [
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'tailwindcss-animate',
  ],
  additional: [
    '@hookform/resolvers',
    'react-hook-form',
    'date-fns',
    'recharts',
    'embla-carousel-react',
    'sonner',
    'cmdk',
    'input-otp',
    'react-resizable-panels',
    'react-day-picker',
    'vaul',
    'zod',
  ]
};