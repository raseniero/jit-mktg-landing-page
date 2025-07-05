import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert, AlertDescription, AlertTitle } from '../alert';

describe('Alert Component', () => {
  describe('Basic Functionality', () => {
    it('renders alert with content', () => {
      render(
        <Alert>
          <AlertDescription>This is an alert message</AlertDescription>
        </Alert>
      );
      expect(screen.getByText('This is an alert message')).toBeInTheDocument();
    });

    it('renders alert with title and description', () => {
      render(
        <Alert>
          <AlertTitle>Alert Title</AlertTitle>
          <AlertDescription>Alert description text</AlertDescription>
        </Alert>
      );
      expect(screen.getByText('Alert Title')).toBeInTheDocument();
      expect(screen.getByText('Alert description text')).toBeInTheDocument();
    });

    it('renders as div element by default', () => {
      render(
        <Alert data-testid="alert">
          <AlertDescription>Test</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert.tagName).toBe('DIV');
    });
  });

  describe('Variants', () => {
    it('applies default variant styling', () => {
      render(
        <Alert data-testid="alert">
          <AlertDescription>Default alert</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('bg-background', 'text-foreground');
    });

    it('applies destructive variant styling', () => {
      render(
        <Alert variant="destructive" data-testid="alert">
          <AlertDescription>Error alert</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('border-destructive/50', 'text-destructive');
    });

    it('supports custom className with variant', () => {
      render(
        <Alert variant="destructive" className="custom-class" data-testid="alert">
          <AlertDescription>Test</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('custom-class');
      expect(alert).toHaveClass('border-destructive/50');
    });
  });

  describe('Alert Title', () => {
    it('renders AlertTitle with proper styling', () => {
      render(<AlertTitle>Important Notice</AlertTitle>);
      const title = screen.getByText('Important Notice');
      expect(title).toHaveClass('mb-1', 'font-medium', 'leading-none');
    });

    it('renders AlertTitle as h5 element', () => {
      render(<AlertTitle>Test Title</AlertTitle>);
      const title = screen.getByText('Test Title');
      expect(title.tagName).toBe('H5');
    });

    it('accepts custom className for AlertTitle', () => {
      render(<AlertTitle className="custom-title">Title</AlertTitle>);
      const title = screen.getByText('Title');
      expect(title).toHaveClass('custom-title');
    });
  });

  describe('Alert Description', () => {
    it('renders AlertDescription with proper styling', () => {
      render(<AlertDescription>Description text</AlertDescription>);
      const description = screen.getByText('Description text');
      expect(description).toHaveClass('text-sm');
    });

    it('renders AlertDescription as div element', () => {
      render(<AlertDescription>Test Description</AlertDescription>);
      const description = screen.getByText('Test Description');
      expect(description.tagName).toBe('DIV');
    });

    it('accepts custom className for AlertDescription', () => {
      render(<AlertDescription className="custom-desc">Desc</AlertDescription>);
      const description = screen.getByText('Desc');
      expect(description).toHaveClass('custom-desc');
    });

    it('maintains proper line height for readability', () => {
      render(<AlertDescription>Long description text</AlertDescription>);
      const description = screen.getByText('Long description text');
      expect(description).toHaveClass('[&_p]:leading-relaxed');
    });
  });

  describe('Icons and Layout', () => {
    it('renders with icon support', () => {
      render(
        <Alert data-testid="alert">
          <svg className="h-4 w-4" />
          <AlertDescription>Alert with icon</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      const svg = alert.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies proper spacing with icons', () => {
      render(
        <Alert data-testid="alert">
          <AlertDescription>Content</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('[&:has(svg)]:pl-11');
    });

    it('positions icons correctly', () => {
      render(
        <Alert data-testid="alert">
          <svg />
          <AlertDescription>Content</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('[&>svg]:absolute', '[&>svg]:left-4', '[&>svg]:top-4');
    });
  });

  describe('Accessibility', () => {
    it('has role alert', () => {
      render(
        <Alert>
          <AlertDescription>Alert message</AlertDescription>
        </Alert>
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('supports aria-live attribute', () => {
      render(
        <Alert aria-live="assertive">
          <AlertDescription>Urgent alert</AlertDescription>
        </Alert>
      );
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('aria-live', 'assertive');
    });

    it('can be labelled by AlertTitle', () => {
      render(
        <Alert>
          <AlertTitle id="alert-title">Error</AlertTitle>
          <AlertDescription aria-labelledby="alert-title">
            Something went wrong
          </AlertDescription>
        </Alert>
      );
      const description = screen.getByText('Something went wrong');
      expect(description).toHaveAttribute('aria-labelledby', 'alert-title');
    });
  });

  describe('Complex Content', () => {
    it('supports multiple paragraphs in description', () => {
      render(
        <Alert>
          <AlertDescription>
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </AlertDescription>
        </Alert>
      );
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
    });

    it('supports lists in description', () => {
      render(
        <Alert>
          <AlertDescription>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </AlertDescription>
        </Alert>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('supports links in content', () => {
      render(
        <Alert>
          <AlertDescription>
            Click <a href="/help">here</a> for help
          </AlertDescription>
        </Alert>
      );
      const link = screen.getByRole('link', { name: 'here' });
      expect(link).toHaveAttribute('href', '/help');
    });
  });

  describe('Edge Cases', () => {
    it('renders without AlertTitle', () => {
      render(
        <Alert>
          <AlertDescription>Description only</AlertDescription>
        </Alert>
      );
      expect(screen.getByText('Description only')).toBeInTheDocument();
    });

    it('renders empty Alert', () => {
      render(<Alert data-testid="empty-alert" />);
      expect(screen.getByTestId('empty-alert')).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longText = 'A'.repeat(500);
      render(
        <Alert>
          <AlertDescription>{longText}</AlertDescription>
        </Alert>
      );
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attributes', () => {
      render(
        <Alert data-testid="alert">
          <AlertTitle data-testid="title">Title</AlertTitle>
          <AlertDescription data-testid="desc">Description</AlertDescription>
        </Alert>
      );
      
      expect(screen.getByTestId('alert')).toHaveAttribute('data-slot', 'alert');
      expect(screen.getByTestId('title')).toHaveAttribute('data-slot', 'alert-title');
      expect(screen.getByTestId('desc')).toHaveAttribute('data-slot', 'alert-description');
    });

    it('supports custom data attributes', () => {
      render(
        <Alert data-custom="value" data-testid="alert">
          <AlertDescription>Test</AlertDescription>
        </Alert>
      );
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to Alert', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Alert ref={ref}>
          <AlertDescription>Test</AlertDescription>
        </Alert>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards ref to AlertTitle', () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<AlertTitle ref={ref}>Title</AlertTitle>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    });

    it('forwards ref to AlertDescription', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<AlertDescription ref={ref}>Description</AlertDescription>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});