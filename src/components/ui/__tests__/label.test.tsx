import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from '../label';

describe('Label Component', () => {
  describe('Basic Functionality', () => {
    it('renders label element', () => {
      render(<Label>Email</Label>);
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('renders as label element by default', () => {
      render(<Label>Test Label</Label>);
      const label = screen.getByText('Test Label');
      expect(label.tagName).toBe('LABEL');
    });

    it('accepts children', () => {
      render(
        <Label>
          <span>Complex content</span>
        </Label>
      );
      expect(screen.getByText('Complex content')).toBeInTheDocument();
    });

    it('associates with form control via htmlFor', () => {
      render(
        <>
          <Label htmlFor="email-input">Email</Label>
          <input id="email-input" />
        </>
      );
      const label = screen.getByText('Email');
      expect(label).toHaveAttribute('for', 'email-input');
    });
  });

  describe('Styling', () => {
    it('applies default classes', () => {
      render(<Label>Test</Label>);
      const label = screen.getByText('Test');
      expect(label).toHaveClass('text-sm', 'font-medium');
    });

    it('accepts custom className', () => {
      render(<Label className="custom-class">Test</Label>);
      const label = screen.getByText('Test');
      expect(label).toHaveClass('custom-class');
    });

    it('has proper text styling', () => {
      render(<Label>Test</Label>);
      const label = screen.getByText('Test');
      expect(label).toHaveClass('leading-none');
    });

    it('includes peer-disabled styling', () => {
      render(<Label>Test</Label>);
      const label = screen.getByText('Test');
      expect(label).toHaveClass('peer-disabled:cursor-not-allowed', 'peer-disabled:opacity-70');
    });
  });

  describe('Variants', () => {
    it('supports destructive variant through className', () => {
      render(<Label className="text-destructive">Error Label</Label>);
      const label = screen.getByText('Error Label');
      expect(label).toHaveClass('text-destructive');
    });

    it('supports muted variant through className', () => {
      render(<Label className="text-muted-foreground">Optional</Label>);
      const label = screen.getByText('Optional');
      expect(label).toHaveClass('text-muted-foreground');
    });
  });

  describe('Form Integration', () => {
    it('works with input elements', () => {
      render(
        <div>
          <Label htmlFor="username">Username</Label>
          <input id="username" type="text" />
        </div>
      );
      
      const label = screen.getByText('Username');
      const input = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'username');
      expect(input).toHaveAttribute('id', 'username');
    });

    it('works with textarea elements', () => {
      render(
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea id="message" />
        </div>
      );
      
      const label = screen.getByText('Message');
      const textarea = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'message');
      expect(textarea).toHaveAttribute('id', 'message');
    });

    it('works with select elements', () => {
      render(
        <div>
          <Label htmlFor="country">Country</Label>
          <select id="country">
            <option>USA</option>
          </select>
        </div>
      );
      
      const label = screen.getByText('Country');
      const select = screen.getByRole('combobox');
      
      expect(label).toHaveAttribute('for', 'country');
      expect(select).toHaveAttribute('id', 'country');
    });
  });

  describe('Accessibility', () => {
    it('can be used for screen reader announcements', () => {
      render(
        <Label>
          Email
          <span className="sr-only">(required)</span>
        </Label>
      );
      
      expect(screen.getByText('(required)')).toHaveClass('sr-only');
    });

    it('supports required field indication', () => {
      render(
        <Label>
          Email <span aria-label="required">*</span>
        </Label>
      );
      
      expect(screen.getByText('*')).toHaveAttribute('aria-label', 'required');
    });

    it('can include helper text', () => {
      render(
        <Label>
          Password
          <span className="text-xs text-muted-foreground ml-1">(min 8 characters)</span>
        </Label>
      );
      
      expect(screen.getByText('(min 8 characters)')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders without children', () => {
      render(<Label />);
      const labels = document.querySelectorAll('label');
      expect(labels).toHaveLength(1);
    });

    it('handles long text content', () => {
      const longText = 'This is a very long label text that might wrap to multiple lines';
      render(<Label>{longText}</Label>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('works with nested interactive elements', () => {
      render(
        <Label>
          <input type="checkbox" />
          <span>Accept terms and conditions</span>
        </Label>
      );
      
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
      expect(screen.getByText('Accept terms and conditions')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to label element', () => {
      const ref = React.createRef<HTMLLabelElement>();
      render(<Label ref={ref}>Test</Label>);
      
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
      expect(ref.current?.tagName).toBe('LABEL');
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Label>Test</Label>);
      const label = screen.getByText('Test');
      expect(label).toHaveAttribute('data-slot', 'label');
    });

    it('supports custom data attributes', () => {
      render(
        <Label data-testid="custom-label" data-field="email">
          Email
        </Label>
      );
      
      const label = screen.getByText('Email');
      expect(label).toHaveAttribute('data-testid', 'custom-label');
      expect(label).toHaveAttribute('data-field', 'email');
    });
  });
});