import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardAction } from '../card';

describe('Card Component', () => {
  describe('Card Container', () => {
    it('renders with children', () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('applies default styling', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('rounded-xl', 'border', 'bg-card', 'text-card-foreground', 'flex', 'flex-col', 'gap-6');
      expect(card).toHaveAttribute('data-slot', 'card');
    });

    it('merges custom className', () => {
      render(<Card className="custom-class" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('custom-class');
      expect(card).toHaveClass('rounded-xl', 'border', 'bg-card');
    });

    it('forwards additional props', () => {
      render(<Card data-custom="test" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('data-custom', 'test');
    });

    it('has data-slot attribute', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('data-slot', 'card');
    });
  });

  describe('CardHeader', () => {
    it('renders with children', () => {
      render(
        <CardHeader>
          <div>Header content</div>
        </CardHeader>
      );
      expect(screen.getByText('Header content')).toBeInTheDocument();
    });

    it('applies proper spacing and grid layout', () => {
      render(<CardHeader data-testid="header">Header</CardHeader>);
      const header = screen.getByTestId('header');
      expect(header).toHaveClass('grid', 'gap-1.5', 'px-6', 'pt-6');
      expect(header).toHaveAttribute('data-slot', 'card-header');
    });

    it('merges custom className', () => {
      render(<CardHeader className="custom-header" data-testid="header">Header</CardHeader>);
      const header = screen.getByTestId('header');
      expect(header).toHaveClass('custom-header');
      expect(header).toHaveClass('grid', 'gap-1.5');
    });
  });

  describe('CardTitle', () => {
    it('renders as h4', () => {
      render(<CardTitle>Card Title</CardTitle>);
      const title = screen.getByText('Card Title');
      expect(title.tagName).toBe('H4');
    });

    it('applies title styling', () => {
      render(<CardTitle>Title</CardTitle>);
      const title = screen.getByText('Title');
      expect(title).toHaveClass('leading-none');
      expect(title).toHaveAttribute('data-slot', 'card-title');
    });

    it('merges custom className', () => {
      render(<CardTitle className="custom-title">Title</CardTitle>);
      const title = screen.getByText('Title');
      expect(title).toHaveClass('custom-title');
      expect(title).toHaveClass('leading-none');
    });
  });

  describe('CardDescription', () => {
    it('renders with children', () => {
      render(<CardDescription>Description text</CardDescription>);
      expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('renders as paragraph', () => {
      render(<CardDescription>Description</CardDescription>);
      const description = screen.getByText('Description');
      expect(description.tagName).toBe('P');
    });

    it('applies muted text styling', () => {
      render(<CardDescription>Description</CardDescription>);
      const description = screen.getByText('Description');
      expect(description).toHaveClass('text-muted-foreground');
      expect(description).toHaveAttribute('data-slot', 'card-description');
    });

    it('merges custom className', () => {
      render(<CardDescription className="custom-desc">Description</CardDescription>);
      const description = screen.getByText('Description');
      expect(description).toHaveClass('custom-desc');
      expect(description).toHaveClass('text-muted-foreground');
    });
  });

  describe('CardContent', () => {
    it('renders with children', () => {
      render(
        <CardContent>
          <div>Content area</div>
        </CardContent>
      );
      expect(screen.getByText('Content area')).toBeInTheDocument();
    });

    it('applies correct padding', () => {
      render(<CardContent data-testid="content">Content</CardContent>);
      const content = screen.getByTestId('content');
      expect(content).toHaveClass('px-6', '[&:last-child]:pb-6');
      expect(content).toHaveAttribute('data-slot', 'card-content');
    });

    it('merges custom className', () => {
      render(<CardContent className="custom-content" data-testid="content">Content</CardContent>);
      const content = screen.getByTestId('content');
      expect(content).toHaveClass('custom-content');
      expect(content).toHaveClass('px-6');
    });
  });

  describe('CardFooter', () => {
    it('renders with children', () => {
      render(
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      );
      expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('applies flex layout', () => {
      render(<CardFooter data-testid="footer">Footer</CardFooter>);
      const footer = screen.getByTestId('footer');
      expect(footer).toHaveClass('flex', 'items-center', 'px-6', 'pb-6', '[.border-t]:pt-6');
      expect(footer).toHaveAttribute('data-slot', 'card-footer');
    });

    it('merges custom className', () => {
      render(<CardFooter className="justify-end" data-testid="footer">Footer</CardFooter>);
      const footer = screen.getByTestId('footer');
      expect(footer).toHaveClass('justify-end');
      expect(footer).toHaveClass('flex', 'items-center');
    });
  });

  describe('CardAction', () => {
    it('renders with children', () => {
      render(
        <CardAction>
          <button>Action button</button>
        </CardAction>
      );
      expect(screen.getByText('Action button')).toBeInTheDocument();
    });

    it('applies grid positioning styles', () => {
      render(<CardAction data-testid="action">Action</CardAction>);
      const action = screen.getByTestId('action');
      expect(action).toHaveClass('col-start-2', 'row-span-2', 'row-start-1', 'self-start', 'justify-self-end');
      expect(action).toHaveAttribute('data-slot', 'card-action');
    });

    it('merges custom className', () => {
      render(<CardAction className="custom-action" data-testid="action">Action</CardAction>);
      const action = screen.getByTestId('action');
      expect(action).toHaveClass('custom-action');
      expect(action).toHaveClass('col-start-2', 'row-span-2');
    });

    it('works within CardHeader', () => {
      render(
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardAction>
            <button>Menu</button>
          </CardAction>
        </CardHeader>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Menu')).toBeInTheDocument();
    });
  });

  describe('Card Composition', () => {
    it('renders complete card with all subcomponents', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>Test description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content here</p>
          </CardContent>
          <CardFooter>
            <button>Footer button</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByText('Test Card')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Card content here')).toBeInTheDocument();
      expect(screen.getByText('Footer button')).toBeInTheDocument();
    });

    it('renders card with only header and content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Simple Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Simple content</p>
          </CardContent>
        </Card>
      );

      expect(screen.getByText('Simple Card')).toBeInTheDocument();
      expect(screen.getByText('Simple content')).toBeInTheDocument();
    });

    it('allows nested cards', () => {
      render(
        <Card data-testid="outer-card">
          <CardContent>
            <Card data-testid="inner-card">
              <CardContent>Nested card</CardContent>
            </Card>
          </CardContent>
        </Card>
      );

      expect(screen.getByTestId('outer-card')).toBeInTheDocument();
      expect(screen.getByTestId('inner-card')).toBeInTheDocument();
      expect(screen.getByText('Nested card')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML structure', () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Accessible Card</CardTitle>
            <CardDescription>With proper structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content paragraph</p>
          </CardContent>
        </Card>
      );

      // Card should be a div
      const card = container.firstChild;
      expect(card?.nodeName).toBe('DIV');

      // Title should be h4
      const title = screen.getByText('Accessible Card');
      expect(title.nodeName).toBe('H4');

      // Description should be p
      const description = screen.getByText('With proper structure');
      expect(description.nodeName).toBe('P');
    });

    it('maintains proper heading hierarchy', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Main Title</CardTitle>
          </CardHeader>
          <CardContent>
            <h5>Subheading</h5>
            <p>Content under subheading</p>
          </CardContent>
        </Card>
      );

      const mainTitle = screen.getByText('Main Title');
      const subheading = screen.getByText('Subheading');

      expect(mainTitle.tagName).toBe('H4');
      expect(subheading.tagName).toBe('H5');
    });
  });

  describe('Dark Mode Support', () => {
    it('applies dark mode classes when parent has dark class', () => {
      render(
        <div className="dark">
          <Card data-testid="dark-card">
            <CardContent>Dark mode card</CardContent>
          </Card>
        </div>
      );

      const card = screen.getByTestId('dark-card');
      // The actual dark mode styling would be applied via CSS variables
      expect(card).toHaveClass('bg-card', 'text-card-foreground');
    });
  });
});