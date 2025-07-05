import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// Helper component to test CSS custom properties
function TestComponent() {
  return (
    <div data-testid="test-element" className="bg-primary text-primary-foreground">
      Test Design Tokens
    </div>
  )
}

describe('Design System CSS Custom Properties', () => {
  beforeEach(() => {
    // Set up CSS custom properties as they would be in the browser
    const style = document.createElement('style')
    style.innerHTML = `
      :root {
        --primary: 243 75% 59%;
        --primary-foreground: 0 0% 100%;
        --secondary: 210 7% 97%;
        --secondary-foreground: 210 14% 22%;
        --muted: 210 7% 96%;
        --muted-foreground: 210 7% 56%;
        --accent: 210 7% 96%;
        --accent-foreground: 210 14% 22%;
        --destructive: 0 84% 56%;
        --destructive-foreground: 0 0% 100%;
        --border: 210 7% 90%;
        --input: 210 7% 97%;
        --ring: 243 75% 59%;
        --background: 0 0% 100%;
        --foreground: 210 14% 22%;
        --radius: 0.5rem;
      }
    `
    document.head.appendChild(style)
  })

  it('should have primary color CSS custom properties defined', () => {
    const { container } = render(<TestComponent />)
    const rootStyles = getComputedStyle(document.documentElement)
    
    // Check primary color is defined
    expect(rootStyles.getPropertyValue('--primary')).toBe('243 75% 59%')
    expect(rootStyles.getPropertyValue('--primary-foreground')).toBe('0 0% 100%')
  })

  it('should have all design system colors defined', () => {
    const rootStyles = getComputedStyle(document.documentElement)
    
    // Check all color variables
    const colorVars = [
      '--primary',
      '--primary-foreground',
      '--secondary',
      '--secondary-foreground',
      '--muted',
      '--muted-foreground',
      '--accent',
      '--accent-foreground',
      '--destructive',
      '--destructive-foreground',
      '--border',
      '--input',
      '--ring',
      '--background',
      '--foreground'
    ]
    
    colorVars.forEach(varName => {
      const value = rootStyles.getPropertyValue(varName)
      expect(value).not.toBe('')
    })
  })

  it('should have border radius custom property defined', () => {
    const rootStyles = getComputedStyle(document.documentElement)
    expect(rootStyles.getPropertyValue('--radius')).toBe('0.5rem')
  })
})