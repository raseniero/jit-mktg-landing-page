import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../dialog';

// Mock portal for testing
jest.mock('@radix-ui/react-dialog', () => {
  const actual = jest.requireActual('@radix-ui/react-dialog');
  return {
    ...actual,
    Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('Dialog Component', () => {
  const user = userEvent.setup();

  describe('Basic Functionality', () => {
    it('renders dialog with trigger and content', () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('Open Dialog')).toBeInTheDocument();
      expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
    });

    it('opens dialog when trigger is clicked', async () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByText('Open Dialog'));
      
      expect(await screen.findByText('Test Dialog')).toBeInTheDocument();
      expect(screen.getByText('This is a test dialog')).toBeInTheDocument();
    });

    it('closes dialog when close button is clicked', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog</DialogDescription>
            <DialogClose asChild>
              <button>Close Dialog</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      
      await user.click(screen.getByText('Close Dialog'));
      
      await waitFor(() => {
        expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
      });
    });

    it('closes dialog on ESC key press', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog</DialogDescription>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      
      await user.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
      });
    });

    it('closes dialog when clicking outside (overlay)', async () => {
      render(
        <Dialog defaultOpen>
          <DialogPortal>
            <DialogOverlay data-testid="dialog-overlay" />
            <DialogContent>
              <DialogTitle>Test Dialog</DialogTitle>
              <DialogDescription>This is a test dialog</DialogDescription>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      
      await user.click(screen.getByTestId('dialog-overlay'));
      
      await waitFor(() => {
        expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
      });
    });
  });

  describe('Component Structure', () => {
    it('renders DialogHeader with correct structure', () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Header Title</DialogTitle>
              <DialogDescription>Header Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );

      const header = screen.getByText('Header Title').parentElement;
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5');
    });

    it('renders DialogFooter with correct structure', () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogFooter>
              <button>Cancel</button>
              <button>Save</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      const footer = screen.getByText('Cancel').parentElement;
      expect(footer).toHaveClass('flex', 'flex-col-reverse');
    });

    it('renders DialogOverlay with correct classes', () => {
      render(
        <Dialog defaultOpen>
          <DialogPortal>
            <DialogOverlay data-testid="dialog-overlay" />
            <DialogContent>
              <DialogTitle>Test</DialogTitle>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      const overlay = screen.getByTestId('dialog-overlay');
      expect(overlay).toHaveClass('fixed', 'inset-0', 'z-50', 'bg-black/80');
    });

    it('renders DialogContent with correct classes', () => {
      render(
        <Dialog defaultOpen>
          <DialogContent data-testid="dialog-content">
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      const content = screen.getByTestId('dialog-content');
      expect(content).toHaveClass('fixed', 'left-[50%]', 'top-[50%]', 'z-50');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <Dialog defaultOpen>
          <DialogContent aria-describedby="dialog-description">
            <DialogTitle>Accessible Dialog</DialogTitle>
            <DialogDescription id="dialog-description">
              This dialog is accessible
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-labelledby');
      expect(dialog).toHaveAttribute('aria-describedby', 'dialog-description');
    });

    it('manages focus when dialog opens', async () => {
      render(
        <Dialog>
          <DialogTrigger asChild>
            <button>Open Dialog</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Focus Test</DialogTitle>
            <DialogClose asChild>
              <button>Close</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      const trigger = screen.getByText('Open Dialog');
      await user.click(trigger);

      // Dialog content should be in the document
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    });

    it('returns focus to trigger when dialog closes', async () => {
      render(
        <Dialog>
          <DialogTrigger asChild>
            <button>Open Dialog</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Focus Test</DialogTitle>
            <DialogClose asChild>
              <button>Close</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      const trigger = screen.getByText('Open Dialog');
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(trigger).toHaveFocus();
      });
    });

    it('supports keyboard navigation', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Keyboard Navigation</DialogTitle>
            <DialogDescription>Test keyboard navigation</DialogDescription>
            <input type="text" placeholder="First input" />
            <input type="text" placeholder="Second input" />
            <DialogClose asChild>
              <button>Close Dialog</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      const firstInput = screen.getByPlaceholderText('First input');
      const secondInput = screen.getByPlaceholderText('Second input');
      const closeButton = screen.getByText('Close Dialog');

      firstInput.focus();
      expect(firstInput).toHaveFocus();

      await user.keyboard('{Tab}');
      expect(secondInput).toHaveFocus();

      await user.keyboard('{Tab}');
      expect(closeButton).toHaveFocus();
    });
  });

  describe('Animation and State', () => {
    it('applies data-state attributes', async () => {
      const { rerender } = render(
        <Dialog open={false}>
          <DialogPortal>
            <DialogOverlay data-testid="dialog-overlay" />
            <DialogContent data-testid="dialog-content">
              <DialogTitle>Animation Test</DialogTitle>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      // When closed
      expect(screen.queryByTestId('dialog-overlay')).not.toBeInTheDocument();

      // When open
      rerender(
        <Dialog open={true}>
          <DialogPortal>
            <DialogOverlay data-testid="dialog-overlay" />
            <DialogContent data-testid="dialog-content">
              <DialogTitle>Animation Test</DialogTitle>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      const overlay = await screen.findByTestId('dialog-overlay');
      const content = await screen.findByTestId('dialog-content');

      expect(overlay).toHaveAttribute('data-state', 'open');
      expect(content).toHaveAttribute('data-state', 'open');
    });

    it('applies animation classes', () => {
      render(
        <Dialog defaultOpen>
          <DialogPortal>
            <DialogOverlay data-testid="dialog-overlay" />
            <DialogContent data-testid="dialog-content">
              <DialogTitle>Animation Test</DialogTitle>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      const overlay = screen.getByTestId('dialog-overlay');
      const content = screen.getByTestId('dialog-content');

      // Check for animation classes
      expect(overlay).toHaveClass('data-[state=open]:animate-in', 'data-[state=closed]:animate-out');
      expect(content).toHaveClass('data-[state=open]:animate-in', 'data-[state=closed]:animate-out');
    });
  });

  describe('Advanced Features', () => {
    it('accepts custom className on all components', () => {
      render(
        <Dialog defaultOpen>
          <DialogPortal>
            <DialogOverlay className="custom-overlay" data-testid="overlay" />
            <DialogContent className="custom-content" data-testid="content">
              <DialogHeader className="custom-header" data-testid="header">
                <DialogTitle className="custom-title" data-testid="title">
                  Title
                </DialogTitle>
                <DialogDescription className="custom-description" data-testid="description">
                  Description
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="custom-footer" data-testid="footer">
                <DialogClose className="custom-close" data-testid="close">
                  Close
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      );

      expect(screen.getByTestId('overlay')).toHaveClass('custom-overlay');
      expect(screen.getByTestId('content')).toHaveClass('custom-content');
      expect(screen.getByTestId('header')).toHaveClass('custom-header');
      expect(screen.getByTestId('title')).toHaveClass('custom-title');
      expect(screen.getByTestId('description')).toHaveClass('custom-description');
      expect(screen.getByTestId('footer')).toHaveClass('custom-footer');
      expect(screen.getByTestId('close')).toHaveClass('custom-close');
    });

    it('supports controlled state', async () => {
      const onOpenChange = jest.fn();
      
      render(
        <Dialog open={false} onOpenChange={onOpenChange}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Controlled Dialog</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByText('Open'));
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });

    it('supports uncontrolled state', async () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Uncontrolled Dialog</DialogTitle>
            <DialogClose asChild>
              <button>Close Dialog</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      expect(screen.queryByText('Uncontrolled Dialog')).not.toBeInTheDocument();
      
      await user.click(screen.getByText('Open'));
      expect(await screen.findByText('Uncontrolled Dialog')).toBeInTheDocument();
      
      await user.click(screen.getByText('Close Dialog'));
      await waitFor(() => {
        expect(screen.queryByText('Uncontrolled Dialog')).not.toBeInTheDocument();
      });
    });

    it('handles forceMount prop', () => {
      render(
        <Dialog>
          <DialogContent forceMount>
            <DialogTitle>Force Mounted</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      // With forceMount, content should be in DOM even when closed
      const content = screen.getByText('Force Mounted');
      expect(content).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles missing DialogTitle gracefully', () => {
      // This should not throw an error
      expect(() => {
        render(
          <Dialog defaultOpen>
            <DialogContent>
              <DialogDescription>Description without title</DialogDescription>
            </DialogContent>
          </Dialog>
        );
      }).not.toThrow();
    });

    it('handles empty dialog content', () => {
      expect(() => {
        render(
          <Dialog defaultOpen>
            <DialogContent />
          </Dialog>
        );
      }).not.toThrow();
    });

    it('handles dialog without portal', () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>No Portal Dialog</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('No Portal Dialog')).toBeInTheDocument();
    });
  });
});