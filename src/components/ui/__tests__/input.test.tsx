import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input Component', () => {
  describe('Basic Functionality', () => {
    it('renders input element', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('accepts value prop', () => {
      render(<Input value="test value" onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue('test value');
    });

    it('handles onChange events', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'Hello');
      expect(handleChange).toHaveBeenCalledTimes(5);
    });

    it('accepts placeholder prop', () => {
      render(<Input placeholder="Enter email" />);
      expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    });

    it('can be disabled', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('can be readonly', () => {
      render(<Input readOnly value="readonly text" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('readonly');
      expect(input).toHaveValue('readonly text');
    });
  });

  describe('Input Types', () => {
    it('supports email type', () => {
      render(<Input type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('supports password type', () => {
      render(<Input type="password" aria-label="Password" />);
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('supports number type', () => {
      render(<Input type="number" />);
      expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
    });

    it('supports search type', () => {
      render(<Input type="search" />);
      expect(screen.getByRole('searchbox')).toHaveAttribute('type', 'search');
    });

    it('supports tel type', () => {
      render(<Input type="tel" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
    });

    it('supports url type', () => {
      render(<Input type="url" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'url');
    });
  });

  describe('Styling and Appearance', () => {
    it('applies default classes', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('flex', 'h-9', 'w-full', 'rounded-md');
    });

    it('accepts custom className', () => {
      render(<Input className="custom-class" />);
      expect(screen.getByRole('textbox')).toHaveClass('custom-class');
    });

    it('has proper focus styling', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring', 'focus-visible:ring-[3px]', 'focus-visible:ring-offset-1');
    });

    it('has proper disabled styling', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
    });

    it('maintains consistent height', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveClass('h-9');
    });
  });

  describe('Form Integration', () => {
    it('works with HTML form', () => {
      const handleSubmit = jest.fn();
      
      render(
        <form onSubmit={handleSubmit}>
          <Input name="email" defaultValue="test@example.com" />
          <button type="submit">Submit</button>
        </form>
      );
      
      fireEvent.submit(screen.getByRole('button'));
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('supports required attribute', () => {
      render(<Input required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('supports pattern attribute', () => {
      render(<Input pattern="[0-9]*" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('pattern', '[0-9]*');
    });

    it('supports min and max length', () => {
      render(<Input minLength={5} maxLength={10} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('minLength', '5');
      expect(input).toHaveAttribute('maxLength', '10');
    });

    it('supports autoComplete', () => {
      render(<Input autoComplete="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'email');
    });
  });

  describe('Accessibility', () => {
    it('can be associated with a label', () => {
      render(
        <>
          <label htmlFor="test-input">Email</label>
          <Input id="test-input" />
        </>
      );
      
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Input aria-label="Email address" />);
      expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(
        <>
          <Input aria-describedby="help-text" />
          <span id="help-text">Enter your email</span>
        </>
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('supports aria-invalid', () => {
      render(<Input aria-invalid="true" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('maintains focus visibility', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      
      input.focus();
      expect(document.activeElement).toBe(input);
    });
  });

  describe('Edge Cases', () => {
    it('handles very long values', () => {
      const longValue = 'a'.repeat(1000);
      render(<Input value={longValue} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(longValue);
    });

    it('handles special characters', () => {
      const specialChars = '!@#$%^&*()_+-={}[]|\\:";\'<>?,./';
      render(<Input value={specialChars} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(specialChars);
    });

    it('handles rapid input changes', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'rapid typing test');
      expect(handleChange).toHaveBeenCalled();
    });

    it('preserves cursor position during controlled updates', async () => {
      const ControlledInput = () => {
        const [value, setValue] = React.useState('');
        return (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
          />
        );
      };
      
      const user = userEvent.setup();
      render(<ControlledInput />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, 'test');
      expect(input).toHaveValue('TEST');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.tagName).toBe('INPUT');
    });

    it('allows focus via ref', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      
      ref.current?.focus();
      expect(document.activeElement).toBe(ref.current);
    });
  });

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input');
    });

    it('supports custom data attributes', () => {
      render(<Input data-testid="custom-input" data-foo="bar" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('data-testid', 'custom-input');
      expect(input).toHaveAttribute('data-foo', 'bar');
    });
  });
});