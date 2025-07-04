import { describe, expect, it } from '@jest/globals';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import designTokens from '../lib/design-tokens.json';

describe('Tailwind Configuration with Design Tokens', () => {
  const fullConfig = resolveConfig(tailwindConfig);

  it('should have design system colors configured', () => {
    const { theme } = fullConfig;
    
    // Check primary color
    expect(theme.colors.primary.DEFAULT).toBe('hsl(var(--primary))');
    expect(theme.colors.primary.foreground).toBe('hsl(var(--primary-foreground))');
    
    // Check other essential colors
    expect(theme.colors.secondary).toBeDefined();
    expect(theme.colors.muted).toBeDefined();
    expect(theme.colors.accent).toBeDefined();
    expect(theme.colors.destructive).toBeDefined();
  });

  it('should have design system spacing configured', () => {
    const { theme } = fullConfig;
    
    // Check that our spacing values are included
    expect(theme.spacing).toBeDefined();
  });

  it('should have design system border radius configured', () => {
    const { theme } = fullConfig;
    
    // Check border radius values
    expect(theme.borderRadius.lg).toBe('var(--radius)');
    expect(theme.borderRadius.md).toBe('calc(var(--radius) - 2px)');
    expect(theme.borderRadius.sm).toBe('calc(var(--radius) - 4px)');
  });

  it('should have Inter font family configured', () => {
    const { theme } = fullConfig;
    
    // Check that Inter is in the font stack
    const fontSans = theme.fontFamily.sans;
    expect(fontSans).toContain('Inter');
  });
});