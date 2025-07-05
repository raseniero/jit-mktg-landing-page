import React from 'react';
import { render, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator Component', () => {
  describe('Basic Functionality', () => {
    it('renders separator element', () => {
      render(<Separator data-testid="separator" />);
      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('has none role by default', () => {
      render(<Separator />);
      expect(screen.getByRole('none')).toBeInTheDocument();
    });

    it('renders as div element by default', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator.tagName).toBe('DIV');
    });
  });

  describe('Orientation', () => {
    it('renders horizontal separator by default', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('h-[1px]', 'w-full');
    });

    it('renders vertical separator when specified', () => {
      render(<Separator orientation="vertical" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('h-full', 'w-[1px]');
    });

    it('applies correct aria-orientation for horizontal', () => {
      render(<Separator orientation="horizontal" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).not.toHaveAttribute('aria-orientation');
    });

    it('applies correct aria-orientation for vertical', () => {
      render(<Separator orientation="vertical" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).not.toHaveAttribute('aria-orientation');
    });
  });

  describe('Styling', () => {
    it('has proper background color', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('bg-border');
    });

    it('applies shrink-0 to prevent flex shrinking', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('shrink-0');
    });

    it('accepts custom className', () => {
      render(<Separator className="custom-class" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('custom-class');
    });

    it('maintains base classes with custom className', () => {
      render(<Separator className="my-4" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('shrink-0', 'bg-border', 'my-4');
    });
  });

  describe('Decorative Mode', () => {
    it('applies decorative attribute when true', () => {
      render(<Separator decorative data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('has none role when decorative', () => {
      render(<Separator decorative data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('role', 'none');
    });

    it('does not have aria-orientation when decorative', () => {
      render(<Separator decorative data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).not.toHaveAttribute('aria-orientation');
    });
  });

  describe('Common Use Cases', () => {
    it('works as section divider', () => {
      render(
        <div>
          <section>Section 1</section>
          <Separator data-testid="separator" />
          <section>Section 2</section>
        </div>
      );
      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('works in navigation menus', () => {
      render(
        <nav>
          <a href="#">Home</a>
          <Separator orientation="vertical" data-testid="separator" />
          <a href="#">About</a>
        </nav>
      );
      expect(screen.getByTestId('separator')).toHaveClass('h-full', 'w-[1px]');
    });

    it('works in forms', () => {
      render(
        <form>
          <input type="text" />
          <Separator className="my-4" data-testid="separator" />
          <button>Submit</button>
        </form>
      );
      expect(screen.getByTestId('separator')).toHaveClass('my-4');
    });
  });

  describe('Accessibility', () => {
    it('is not focusable', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).not.toHaveAttribute('tabindex');
    });

    it('can be labeled for screen readers', () => {
      render(<Separator aria-label="Content separator" />);
      expect(screen.getByLabelText('Content separator')).toBeInTheDocument();
    });

    it('supports custom aria attributes', () => {
      render(<Separator aria-describedby="description" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('data-slot', 'separator');
    });

    it('has data-orientation attribute', () => {
      render(<Separator data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('has correct data-orientation for vertical', () => {
      render(<Separator orientation="vertical" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('data-orientation', 'vertical');
    });

    it('supports custom data attributes', () => {
      render(<Separator data-testid="separator" data-section="main" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('data-section', 'main');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to div element', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Separator ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.tagName).toBe('DIV');
    });
  });

  describe('Semantic Separator', () => {
    it('can be semantic with decorative false', () => {
      render(<Separator decorative={false} data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('role', 'separator');
    });

    it('supports label for semantic separators', () => {
      render(
        <Separator 
          decorative={false} 
          label="Content separator" 
          data-testid="separator" 
        />
      );
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveAttribute('aria-label', 'Content separator');
    });

    it('ignores label when decorative', () => {
      render(
        <Separator 
          decorative={true} 
          label="Should be ignored" 
          data-testid="separator" 
        />
      );
      const separator = screen.getByTestId('separator');
      expect(separator).not.toHaveAttribute('aria-label');
    });
  });

  describe('Edge Cases', () => {
    it('renders correctly with no props', () => {
      render(<Separator />);
      expect(screen.getByRole('none')).toBeInTheDocument();
    });

    it('handles unknown orientation as vertical', () => {
      // @ts-expect-error Testing invalid prop
      render(<Separator orientation="diagonal" data-testid="separator" />);
      const separator = screen.getByTestId('separator');
      // Unknown orientations default to vertical style
      expect(separator).toHaveClass('h-full', 'w-[1px]');
    });

    it('works in flex containers', () => {
      render(
        <div className="flex">
          <div>Item 1</div>
          <Separator orientation="vertical" data-testid="separator" />
          <div>Item 2</div>
        </div>
      );
      const separator = screen.getByTestId('separator');
      expect(separator).toHaveClass('h-full', 'w-[1px]');
    });
  });
});