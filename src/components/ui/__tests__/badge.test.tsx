import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge Component', () => {
  describe('Basic Functionality', () => {
    it('renders badge with text', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders as div element by default', () => {
      render(<Badge data-testid="badge">Test</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge.tagName).toBe('DIV');
    });

    it('accepts children content', () => {
      render(
        <Badge>
          <span>Complex</span> Content
        </Badge>
      );
      expect(screen.getByText('Complex')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies default variant styling', () => {
      render(<Badge data-testid="badge">Default</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('border-transparent', 'bg-primary', 'text-primary-foreground');
    });

    it('applies secondary variant styling', () => {
      render(
        <Badge variant="secondary" data-testid="badge">
          Secondary
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('border-transparent', 'bg-secondary', 'text-secondary-foreground');
    });

    it('applies destructive variant styling', () => {
      render(
        <Badge variant="destructive" data-testid="badge">
          Error
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('border-transparent', 'bg-destructive', 'text-destructive-foreground');
    });

    it('applies outline variant styling', () => {
      render(
        <Badge variant="outline" data-testid="badge">
          Outline
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('text-foreground');
    });
  });

  describe('Styling', () => {
    it('has proper base styling', () => {
      render(<Badge data-testid="badge">Badge</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('inline-flex', 'items-center', 'rounded-md', 'border');
    });

    it('has proper sizing', () => {
      render(<Badge data-testid="badge">Badge</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('px-2.5', 'py-0.5', 'text-xs');
    });

    it('has proper typography', () => {
      render(<Badge data-testid="badge">Badge</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('font-semibold');
    });

    it('accepts custom className', () => {
      render(
        <Badge className="custom-class" data-testid="badge">
          Custom
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('custom-class');
    });

    it('supports hover effects through className', () => {
      render(
        <Badge className="hover:bg-primary/80" data-testid="badge">
          Hoverable
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveClass('hover:bg-primary/80');
    });
  });

  describe('Common Use Cases', () => {
    it('works as status indicator', () => {
      render(<Badge variant="secondary">Active</Badge>);
      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('works as count badge', () => {
      render(<Badge>99+</Badge>);
      expect(screen.getByText('99+')).toBeInTheDocument();
    });

    it('works with icons', () => {
      render(
        <Badge>
          <svg className="w-3 h-3 mr-1" />
          <span>With Icon</span>
        </Badge>
      );
      expect(screen.getByText('With Icon')).toBeInTheDocument();
    });

    it('works as a tag', () => {
      render(<Badge variant="outline">JavaScript</Badge>);
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('works as notification badge', () => {
      render(<Badge variant="destructive">3</Badge>);
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('can have role attribute', () => {
      render(
        <Badge role="status">
          <span className="sr-only">Status:</span> Active
        </Badge>
      );
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Badge aria-label="3 new messages">3</Badge>);
      expect(screen.getByLabelText('3 new messages')).toBeInTheDocument();
    });

    it('can include screen reader only text', () => {
      render(
        <Badge>
          <span className="sr-only">Priority:</span>
          High
        </Badge>
      );
      expect(screen.getByText('Priority:')).toHaveClass('sr-only');
      expect(screen.getByText('High')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders empty badge', () => {
      render(<Badge data-testid="empty-badge" />);
      expect(screen.getByTestId('empty-badge')).toBeInTheDocument();
    });

    it('handles very long text', () => {
      const longText = 'This is a very long badge text that might overflow';
      render(<Badge>{longText}</Badge>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles special characters', () => {
      render(<Badge>{'<Special> & "Characters"'}</Badge>);
      expect(screen.getByText('<Special> & "Characters"')).toBeInTheDocument();
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Badge data-testid="badge">Test</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveAttribute('data-slot', 'badge');
    });

    it('supports custom data attributes', () => {
      render(
        <Badge data-testid="badge" data-priority="high" data-category="status">
          High Priority
        </Badge>
      );
      const badge = screen.getByTestId('badge');
      expect(badge).toHaveAttribute('data-priority', 'high');
      expect(badge).toHaveAttribute('data-category', 'status');
    });
  });

  describe('Integration', () => {
    it('works within other components', () => {
      render(
        <div>
          <h3>
            Products <Badge>New</Badge>
          </h3>
        </div>
      );
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('can be used in lists', () => {
      render(
        <ul>
          <li>
            Item 1 <Badge>Popular</Badge>
          </li>
          <li>
            Item 2 <Badge variant="destructive">Sold Out</Badge>
          </li>
        </ul>
      );
      expect(screen.getByText('Popular')).toBeInTheDocument();
      expect(screen.getByText('Sold Out')).toBeInTheDocument();
    });
  });
});