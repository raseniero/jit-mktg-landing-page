import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, buttonVariants } from '../button';
import { cn } from '@/lib/utils';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders button with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders as a button element by default', () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole('button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('renders with default type="button"', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('Variants', () => {
    it('renders default variant correctly', () => {
      render(<Button variant="default">Default button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90');
    });

    it('renders destructive variant correctly', () => {
      render(<Button variant="destructive">Destructive button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-destructive', 'text-white', 'hover:bg-destructive/90');
    });

    it('renders outline variant correctly', () => {
      render(<Button variant="outline">Outline button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border', 'bg-background', 'text-foreground');
    });

    it('renders secondary variant correctly', () => {
      render(<Button variant="secondary">Secondary button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground');
    });

    it('renders ghost variant correctly', () => {
      render(<Button variant="ghost">Ghost button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground');
    });

    it('renders link variant correctly', () => {
      render(<Button variant="link">Link button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-primary', 'underline-offset-4', 'hover:underline');
    });

    it('applies default variant when no variant specified', () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
    });
  });

  describe('Sizes', () => {
    it('renders default size correctly', () => {
      render(<Button size="default">Default button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-9', 'px-4', 'py-2');
    });

    it('renders sm size correctly', () => {
      render(<Button size="sm">Small button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-8', 'px-3', 'gap-1.5');
    });

    it('renders lg size correctly', () => {
      render(<Button size="lg">Large button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-10', 'px-6');
    });

    it('renders icon size correctly', () => {
      render(<Button size="icon">Icon</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('size-9');
    });

    it('applies default size when no size specified', () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-9', 'px-4', 'py-2');
    });
  });

  describe('asChild prop', () => {
    it('renders as child component when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/test">Link button</a>
        </Button>
      );
      const link = screen.getByRole('link', { name: /link button/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveClass('inline-flex', 'items-center', 'justify-center');
    });

    it('merges className with child component', () => {
      render(
        <Button asChild className="custom-class">
          <a href="/test">Link</a>
        </Button>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-class');
      expect(link).toHaveClass('inline-flex', 'items-center', 'justify-center');
    });
  });

  describe('Interactions', () => {
    it('handles click events', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button disabled onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });

    it('supports keyboard navigation', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      button.focus();
      expect(button).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Test</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('merges custom className with variant classes', () => {
      render(<Button className="custom-class" variant="outline">Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveClass('border', 'bg-background');
    });

    it('contains base button styles', () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
      expect(button).toHaveClass('items-center');
      expect(button).toHaveClass('justify-center');
      expect(button).toHaveClass('font-medium');
    });
  });

  describe('Accessibility', () => {
    it('supports aria-label', () => {
      render(<Button aria-label="Custom label">Icon</Button>);
      expect(screen.getByRole('button', { name: /custom label/i })).toBeInTheDocument();
    });

    it('supports aria-pressed for toggle buttons', () => {
      render(<Button aria-pressed="true">Toggle</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('has proper focus styles', () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('outline-none');
      expect(button).toHaveClass('focus-visible:ring-[3px]');
    });

    it('shows disabled state properly', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:pointer-events-none');
      expect(button).toHaveClass('disabled:opacity-50');
    });
  });

  describe('ButtonVariants utility', () => {
    it('generates correct classes for variant and size combinations', () => {
      const classes = buttonVariants({ variant: 'destructive', size: 'lg' });
      expect(classes).toContain('bg-destructive');
      expect(classes).toContain('h-10');
    });

    it('returns base classes when called without arguments', () => {
      const classes = buttonVariants();
      expect(classes).toContain('inline-flex');
      expect(classes).toContain('items-center');
    });
  });

  describe('Icon Button', () => {
    it('renders icon button with proper size', () => {
      render(
        <Button size="icon" aria-label="Menu">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M0 0h16v16H0z" />
          </svg>
        </Button>
      );
      const button = screen.getByRole('button', { name: /menu/i });
      expect(button).toHaveClass('size-9');
    });
  });

  describe('Loading State', () => {
    it('can be disabled for loading state', () => {
      render(
        <Button disabled>
          <span className="mr-2">Loading...</span>
          Processing
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});