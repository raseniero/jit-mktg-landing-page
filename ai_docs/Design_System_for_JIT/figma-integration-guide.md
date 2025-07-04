# Working with Your React Site in Figma

## Quick Start Options

### Option 1: Use the Component Showcase (Recommended for Manual Import)

1. **Update your App.tsx to show the showcase:**
```tsx
import { FigmaExportShowcase } from "./components/FigmaExportShowcase";

export default function App() {
  return <FigmaExportShowcase />;
}
```

2. **Take screenshots in sections:**
   - Each component is clearly labeled and separated
   - Use browser dev tools to set exact viewport sizes (1440px width recommended)
   - Screenshot each section individually for Figma import

3. **Import to Figma:**
   - Create new Figma file
   - Import screenshots as images
   - Use as reference to recreate vector components
   - Apply your extracted design tokens

### Option 2: Deploy and Use Figma Dev Mode

1. **Deploy your site quickly:**
```bash
# Using Vercel (easiest)
npx vercel --prod

# Or using Netlify
npx netlify deploy --prod --dir=dist
```

2. **In Figma:**
   - Open Dev Mode (top right corner)
   - Paste your deployed URL
   - Figma will automatically inspect your components
   - Extract spacing, colors, and typography

### Option 3: Design Tokens Import

1. **Extract your design tokens:**
```bash
# Create the extraction script
node scripts/extract-tokens.js
```

2. **Import to Figma:**
   - Install "Design Tokens" or "Token Studio" plugin in Figma
   - Import the generated `design-tokens.json` file
   - Your entire color palette and typography will be available

## Your Design System in Figma

### Colors (Ready to Import)
```
Primary: #4F46E5
Secondary: #F9FAFB  
Muted: #F3F4F6
Border: #E5E7EB
Foreground: #1F2937
Destructive: #DC2626
```

### Typography Scale
```
H1: 40px / Semibold / -0.025em tracking
H2: 32px / Semibold / -0.025em tracking  
H3: 24px / Semibold
H4: 20px / Medium
Body: 16px / Normal / 1.6 line height
Label: 14px / Medium
```

### Component Specifications

**Buttons:**
- Height: 36px (default), 32px (small), 40px (large)
- Padding: 16px horizontal
- Border radius: 6px
- Font: 14px medium

**Cards:**
- Border radius: 8px
- Border: 1px solid #E5E7EB
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

**Inputs:**
- Height: 36px
- Border radius: 6px
- Padding: 8px 12px
- Border: 1px solid #E5E7EB
- Font: 14px

## Recommended Workflow

### For Design Teams:
1. Use **Option 1** (Component Showcase) for manual recreation
2. Screenshot each component section
3. Recreate as vector components in Figma
4. Use the exact specifications provided above

### For Dev Teams:
1. Use **Option 2** (Dev Mode) for automatic inspection
2. Keep your React components as source of truth
3. Use Figma for design exploration and handoffs
4. Sync design tokens between both tools

### For Design Systems:
1. Use **Option 3** (Design Tokens) for token management
2. Import tokens to Figma for consistency
3. Export tokens from Figma back to code when needed
4. Maintain single source of truth in your CSS variables

## Files You'll Need

1. **For Screenshots:** Use `FigmaExportShowcase.tsx`
2. **For Tokens:** Run `scripts/extract-tokens.js` 
3. **For Live Inspection:** Deploy your current `App.tsx`
4. **For Reference:** Use `component-export.html` (opens in browser)

## Next Steps

1. Choose your preferred option above
2. Set up the necessary files
3. Begin importing to Figma using your chosen method
4. Create your Figma component library
5. Establish workflow between Figma and your React codebase

Your design system is already production-ready and well-structured, so any of these approaches will work smoothly with your existing setup.