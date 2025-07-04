import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { useTheme } from 'next-themes'

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useTheme: jest.fn(),
}))

// Test component that uses the theme
function TestComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <p data-testid="current-theme">Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Switch to Dark</button>
      <button onClick={() => setTheme('light')}>Switch to Light</button>
    </div>
  )
}

describe('Theme Provider', () => {
  const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>

  beforeEach(() => {
    mockUseTheme.mockReset()
  })

  it('should provide theme context to children', () => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
      themes: ['light', 'dark'],
      systemTheme: 'light',
      resolvedTheme: 'light',
    })

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toHaveTextContent('Current theme: light')
  })

  it('should allow theme switching', () => {
    const mockSetTheme = jest.fn()
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark'],
      systemTheme: 'light',
      resolvedTheme: 'light',
    })

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const darkButton = screen.getByText('Switch to Dark')
    fireEvent.click(darkButton)

    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })

  it('should support system theme preference', () => {
    mockUseTheme.mockReturnValue({
      theme: 'system',
      setTheme: jest.fn(),
      themes: ['light', 'dark', 'system'],
      systemTheme: 'dark',
      resolvedTheme: 'dark',
    })

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toHaveTextContent('Current theme: system')
  })
})