import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../navigation-menu';

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('NavigationMenu Component', () => {
  describe('Basic Rendering', () => {
    it('renders navigation menu with children', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('renders navigation menu list', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList data-testid="nav-list">
            <NavigationMenuItem>Item 1</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      const list = screen.getByTestId('nav-list');
      expect(list).toHaveClass('group', 'flex', 'flex-1', 'list-none');
    });

    it('renders navigation menu items', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem data-testid="nav-item">
              Item content
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      expect(screen.getByTestId('nav-item')).toHaveClass('relative');
    });

    it('renders navigation menu links', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" data-testid="nav-link">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      const link = screen.getByTestId('nav-link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
    });

    it('applies proper ARIA attributes', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('NavigationMenuTrigger', () => {
    it('renders trigger with children', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      expect(screen.getByText('Products')).toBeInTheDocument();
    });

    it('opens content on click', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products');
      await user.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeVisible();
      });
    });

    it('opens content on Enter key', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products');
      trigger.focus();
      await user.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeVisible();
      });
    });

    it.skip('closes content on Escape key', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products');
      await user.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
      });
      
      await user.keyboard('{Escape}');
      
      // Navigation Menu may keep content in DOM but hidden
      await waitFor(() => {
        const content = screen.getByTestId('content');
        const triggerButton = screen.getByText('Products').closest('button');
        expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('toggles aria-expanded attribute', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      
      await user.click(trigger!);
      
      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('applies hover styles', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      expect(trigger).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground');
    });

    it('shows chevron icon', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      const icon = trigger?.querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('size-3');
    });
  });

  describe('NavigationMenuContent', () => {
    it('renders content when trigger is activated', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        expect(screen.getByText('All Products')).toBeVisible();
      });
    });

    it('positions content correctly', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      // Open the menu to render content
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        const content = screen.getByTestId('content');
        expect(content).toHaveClass('top-0', 'left-0', 'w-full');
      });
    });

    it('animates in and out', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      // Open the menu to render content
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        const content = screen.getByTestId('content');
        expect(content).toHaveClass('data-[motion^=from-]:animate-in', 'data-[motion^=to-]:animate-out');
      });
    });

    it('handles focus management', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
                <NavigationMenuLink href="/services">Services</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        expect(screen.getByText('All Products')).toBeVisible();
      });
      
      await user.keyboard('{Tab}');
      expect(screen.getByText('All Products').closest('a')).toHaveFocus();
    });

    it('closes on outside click', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent data-testid="content">
                  <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div data-testid="outside">Outside content</div>
        </div>
      );
      
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
      });
      
      await user.click(screen.getByTestId('outside'));
      
      await waitFor(() => {
        const triggerButton = screen.getByText('Products').closest('button');
        expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('NavigationMenuLink', () => {
    it('renders as anchor element by default', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const link = screen.getByText('About').closest('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
    });

    it('supports asChild prop', () => {
      const CustomLink = React.forwardRef<HTMLAnchorElement, { href: string; children: React.ReactNode }>(
        ({ href, children, ...props }, ref) => (
          <a ref={ref} href={href} data-custom="true" {...props}>
            {children}
          </a>
        )
      );
      CustomLink.displayName = 'CustomLink';

      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <CustomLink href="/custom">Custom Link</CustomLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const link = screen.getByText('Custom Link').closest('a');
      expect(link).toHaveAttribute('data-custom', 'true');
    });

    it('applies active styles', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" data-active="true" data-testid="link">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const link = screen.getByTestId('link');
      expect(link).toHaveClass('data-[active=true]:bg-accent/50');
    });

    it('handles keyboard navigation', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" onClick={handleClick}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const link = screen.getByText('About').closest('a');
      link?.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalled();
    });

    it('applies proper focus styles', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" data-testid="link">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const link = screen.getByTestId('link');
      expect(link).toHaveClass('focus:bg-accent', 'focus:text-accent-foreground');
    });
  });

  describe('Keyboard Navigation', () => {
    it('navigates with arrow keys', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const homeLink = screen.getByText('Home').closest('a');
      homeLink?.focus();
      
      await user.keyboard('{ArrowRight}');
      expect(screen.getByText('About').closest('a')).toHaveFocus();
      
      await user.keyboard('{ArrowRight}');
      expect(screen.getByText('Contact').closest('a')).toHaveFocus();
      
      await user.keyboard('{ArrowLeft}');
      expect(screen.getByText('About').closest('a')).toHaveFocus();
    });

    it('supports Home and End keys', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const aboutLink = screen.getByText('About').closest('a');
      aboutLink?.focus();
      
      await user.keyboard('{Home}');
      expect(screen.getByText('Home').closest('a')).toHaveFocus();
      
      await user.keyboard('{End}');
      expect(screen.getByText('Contact').closest('a')).toHaveFocus();
    });

    it('maintains focus within menu', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
                <NavigationMenuLink href="/services">Services</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        expect(screen.getByText('All Products')).toBeVisible();
      });
      
      const productsLink = screen.getByText('All Products').closest('a');
      productsLink?.focus();
      
      await user.keyboard('{ArrowDown}');
      expect(screen.getByText('Services').closest('a')).toHaveFocus();
    });

    it('supports Tab navigation', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const homeLink = screen.getByText('Home').closest('a');
      homeLink?.focus();
      
      await user.keyboard('{Tab}');
      expect(screen.getByText('About').closest('a')).toHaveFocus();
    });

    it('closes dropdowns on Escape', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
      });
      
      await user.keyboard('{Escape}');
      
      await waitFor(() => {
        const triggerButton = screen.getByText('Products').closest('button');
        expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('Mobile Behavior', () => {
    beforeEach(() => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      window.dispatchEvent(new Event('resize'));
    });

    afterEach(() => {
      // Reset viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
    });

    it('adapts layout for mobile screens', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      // Open the menu to render content
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        const content = screen.getByTestId('content');
        expect(content).toHaveClass('w-full', 'md:w-auto');
      });
    });

    it('supports touch interactions', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products');
      await user.pointer({ keys: '[TouchA]', target: trigger });
      
      await waitFor(() => {
        expect(screen.getByTestId('content')).toBeVisible();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA roles', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('manages focus correctly', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      await user.click(trigger!);
      
      await waitFor(() => {
        expect(screen.getByText('All Products')).toBeVisible();
      });
      
      // Focus should be manageable within the dropdown
      const link = screen.getByText('All Products').closest('a');
      expect(link).toBeInTheDocument();
    });

    it('announces state changes', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      
      await user.click(trigger!);
      
      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('supports screen readers', () => {
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      const chevron = trigger?.querySelector('svg');
      expect(chevron).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Styling', () => {
    it('applies default styles', () => {
      render(
        <NavigationMenu data-testid="nav">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const nav = screen.getByTestId('nav');
      expect(nav).toHaveClass('relative', 'flex', 'max-w-max', 'flex-1');
    });

    it('supports className prop', () => {
      render(
        <NavigationMenu className="custom-nav" data-testid="nav">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      const nav = screen.getByTestId('nav');
      expect(nav).toHaveClass('custom-nav');
    });

    it('handles dark mode', () => {
      render(
        <div className="dark">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      );
      
      const trigger = screen.getByText('Products').closest('button');
      expect(trigger).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground');
    });

    it('applies animation classes', async () => {
      const user = userEvent.setup();
      render(
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-testid="content">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
      // Open the menu to render content
      await user.click(screen.getByText('Products'));
      
      await waitFor(() => {
        const content = screen.getByTestId('content');
        expect(content).toHaveClass('data-[motion^=from-]:animate-in');
      });
    });
  });

  describe('navigationMenuTriggerStyle utility', () => {
    it('generates correct trigger styles', () => {
      const styles = navigationMenuTriggerStyle();
      expect(styles).toContain('inline-flex');
      expect(styles).toContain('hover:bg-accent');
      expect(styles).toContain('focus:bg-accent');
    });
  });
});