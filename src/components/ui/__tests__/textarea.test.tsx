import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../textarea';

describe('Textarea Component', () => {
  describe('Basic Functionality', () => {
    it('renders textarea element', () => {
      render(<Textarea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('accepts value prop', () => {
      render(<Textarea value="test value" onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue('test value');
    });

    it('handles onChange events', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Textarea onChange={handleChange} />);
      const textarea = screen.getByRole('textbox');
      
      await user.type(textarea, 'Hello');
      expect(handleChange).toHaveBeenCalledTimes(5);
    });

    it('accepts placeholder prop', () => {
      render(<Textarea placeholder="Enter message" />);
      expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
    });

    it('can be disabled', () => {
      render(<Textarea disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('can be readonly', () => {
      render(<Textarea readOnly value="readonly text" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('readonly');
      expect(textarea).toHaveValue('readonly text');
    });
  });

  describe('Styling and Appearance', () => {
    it('applies default classes', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('flex', 'min-h-[60px]', 'w-full', 'rounded-md');
    });

    it('accepts custom className', () => {
      render(<Textarea className="custom-class" />);
      expect(screen.getByRole('textbox')).toHaveClass('custom-class');
    });

    it('has proper focus styling', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50', 'focus-visible:ring-[3px]');
    });

    it('has proper disabled styling', () => {
      render(<Textarea disabled />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
    });

    it('maintains minimum height', () => {
      render(<Textarea />);
      expect(screen.getByRole('textbox')).toHaveClass('min-h-[60px]');
    });

    it('supports custom height through className', () => {
      render(<Textarea className="h-32" />);
      expect(screen.getByRole('textbox')).toHaveClass('h-32');
    });
  });

  describe('Textarea Specific Features', () => {
    it('supports rows attribute', () => {
      render(<Textarea rows={5} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });

    it('supports cols attribute', () => {
      render(<Textarea cols={30} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('cols', '30');
    });

    it('supports resize behavior', () => {
      render(<Textarea className="resize-none" />);
      expect(screen.getByRole('textbox')).toHaveClass('resize-none');
    });

    it('handles multiline text', () => {
      const multilineText = 'Line 1\nLine 2\nLine 3';
      render(<Textarea value={multilineText} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(multilineText);
    });

    it('supports maxLength attribute', () => {
      render(<Textarea maxLength={100} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '100');
    });

    it('supports minLength attribute', () => {
      render(<Textarea minLength={10} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('minLength', '10');
    });
  });

  describe('Form Integration', () => {
    it('works with HTML form', () => {
      const handleSubmit = jest.fn();
      
      render(
        <form onSubmit={handleSubmit}>
          <Textarea name="message" defaultValue="test message" />
          <button type="submit">Submit</button>
        </form>
      );
      
      fireEvent.submit(screen.getByRole('button'));
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('supports required attribute', () => {
      render(<Textarea required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('supports autoComplete attribute', () => {
      render(<Textarea autoComplete="off" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'off');
    });

    it('supports spellCheck attribute', () => {
      render(<Textarea spellCheck={false} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('spellcheck', 'false');
    });
  });

  describe('Accessibility', () => {
    it('can be associated with a label', () => {
      render(
        <>
          <label htmlFor="test-textarea">Message</label>
          <Textarea id="test-textarea" />
        </>
      );
      
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Textarea aria-label="User message" />);
      expect(screen.getByLabelText('User message')).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(
        <>
          <Textarea aria-describedby="help-text" />
          <span id="help-text">Enter your message here</span>
        </>
      );
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('supports aria-invalid', () => {
      render(<Textarea aria-invalid="true" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('maintains focus visibility', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      
      textarea.focus();
      expect(document.activeElement).toBe(textarea);
    });
  });

  describe('Edge Cases', () => {
    it('handles very long values', () => {
      const longValue = 'a'.repeat(5000);
      render(<Textarea value={longValue} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(longValue);
    });

    it('handles special characters and line breaks', () => {
      const specialContent = '!@#$%^&*()\n\t"Hello"\n<script>alert("test")</script>';
      render(<Textarea value={specialContent} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(specialContent);
    });

    it('handles rapid input changes', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Textarea onChange={handleChange} />);
      const textarea = screen.getByRole('textbox');
      
      await user.type(textarea, 'rapid typing test');
      expect(handleChange).toHaveBeenCalled();
    });

    it('preserves cursor position during controlled updates', async () => {
      const ControlledTextarea = () => {
        const [value, setValue] = React.useState('');
        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
          />
        );
      };
      
      const user = userEvent.setup();
      render(<ControlledTextarea />);
      
      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'test');
      expect(textarea).toHaveValue('TEST');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to textarea element', () => {
      const ref = React.createRef<HTMLTextAreaElement>();
      render(<Textarea ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
      expect(ref.current?.tagName).toBe('TEXTAREA');
    });

    it('allows focus via ref', () => {
      const ref = React.createRef<HTMLTextAreaElement>();
      render(<Textarea ref={ref} />);
      
      ref.current?.focus();
      expect(document.activeElement).toBe(ref.current);
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Textarea />);
      expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'textarea');
    });

    it('supports custom data attributes', () => {
      render(<Textarea data-testid="custom-textarea" data-foo="bar" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('data-testid', 'custom-textarea');
      expect(textarea).toHaveAttribute('data-foo', 'bar');
    });
  });
});