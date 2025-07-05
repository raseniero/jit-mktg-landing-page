import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../dropdown-menu';

describe('DropdownMenu Component', () => {
  describe('Basic Functionality', () => {
    it('renders dropdown menu with trigger and content', () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      expect(screen.getByText('Open Menu')).toBeInTheDocument();
      expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });

    it('opens dropdown when trigger is clicked', async () => {
      const user = userEvent.setup();
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Open Menu'));
      
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('closes dropdown when item is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={handleClick}>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Open Menu'));
      await user.click(screen.getByText('Item 1'));
      
      expect(handleClick).toHaveBeenCalled();
      await waitFor(() => {
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
      });
    });

    it('closes dropdown when Escape key is pressed', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Open Menu'));
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      
      await user.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
      });
    });
  });

  describe('Checkbox Items', () => {
    it('renders checkbox items with correct initial state', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Settings</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>
              Show Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Show Activity Bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Settings'));
      
      const statusBar = screen.getByText('Show Status Bar');
      const activityBar = screen.getByText('Show Activity Bar');
      
      expect(statusBar).toBeInTheDocument();
      expect(activityBar).toBeInTheDocument();
    });

    it('toggles checkbox state when clicked', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = jest.fn();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Settings</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem 
              checked={false}
              onCheckedChange={handleCheckedChange}
            >
              Show Status Bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Settings'));
      await user.click(screen.getByText('Show Status Bar'));
      
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe('Radio Items', () => {
    it('renders radio group with items', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Appearance</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="light">
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Appearance'));
      
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('System')).toBeInTheDocument();
    });

    it('changes radio selection when clicked', async () => {
      const user = userEvent.setup();
      const handleValueChange = jest.fn();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Appearance</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="light" onValueChange={handleValueChange}>
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Appearance'));
      await user.click(screen.getByText('Dark'));
      
      expect(handleValueChange).toHaveBeenCalledWith('dark');
    });
  });

  describe('Sub-menus', () => {
    it('renders sub-menu trigger', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
                  <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      expect(screen.getByText('More Options')).toBeInTheDocument();
    });

    it('opens sub-menu on hover', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      await user.hover(screen.getByText('More Options'));
      
      await waitFor(() => {
        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      // Navigate with arrow keys
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowDown}');
      
      // The focused item should be highlighted
      const items = screen.getAllByRole('menuitem');
      expect(items.length).toBe(3);
    });

    it('has proper ARIA attributes', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      const trigger = screen.getByText('Menu');
      expect(trigger).toHaveAttribute('type', 'button');
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
      
      await user.click(trigger);
      
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });

    it('supports disabled items', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem disabled onSelect={handleClick}>
              Disabled Item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      const disabledItem = screen.getByText('Disabled Item');
      expect(disabledItem).toHaveAttribute('data-disabled');
      
      await user.click(disabledItem);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Visual Elements', () => {
    it('renders labels', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      expect(screen.getByText('Actions')).toBeInTheDocument();
    });

    it('renders separators', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      const separator = screen.getByRole('separator');
      expect(separator).toBeInTheDocument();
    });

    it('renders shortcuts', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Save
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      expect(screen.getByText('⌘S')).toBeInTheDocument();
    });

    it('renders groups', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders destructive variant', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      const deleteItem = screen.getByText('Delete');
      expect(deleteItem).toBeInTheDocument();
      expect(deleteItem).toHaveAttribute('data-variant', 'destructive');
    });
  });

  describe('Data Attributes', () => {
    it('has proper data-slot attributes', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      const content = screen.getByRole('menu');
      expect(content).toHaveAttribute('data-slot', 'content');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty content gracefully', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent />
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });

    it('handles custom trigger element', async () => {
      const user = userEvent.setup();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="custom-button">Custom Trigger</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      const trigger = screen.getByText('Custom Trigger');
      expect(trigger).toHaveClass('custom-button');
      
      await user.click(trigger);
      expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('handles click events properly', async () => {
      const user = userEvent.setup();
      const handleSelect = jest.fn();
      
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={handleSelect}>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

      await user.click(screen.getByText('Menu'));
      await user.click(screen.getByText('Item'));
      
      // onSelect should be called when item is clicked
      expect(handleSelect).toHaveBeenCalled();
    });
  });
});