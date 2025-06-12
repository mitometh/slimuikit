# UI Kit

A modern React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install slimuikit
# or
yarn add slimuikit
```

## Setup

### 1. Import Styles

Add the following import to your main CSS file or app entry point:

```css
@import 'slimuikit/dist/styles.css';
```

### 2. Configure Tailwind CSS

Add the UI Kit to your `tailwind.config.js` content paths:

```js
module.exports = {
  content: [
    // ... your other content paths
    './node_modules/slimuikit/dist/**/*.{js,ts,jsx,tsx}'
  ],
  // ... rest of your config
}
```

## Usage

```jsx
import { Button, Card, Alert } from 'slimuikit';

function App() {
  return (
    <Card>
      <Alert variant="success">Welcome to UI Kit!</Alert>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## Available Components

### UI Components
- **Alert** - Notification messages with different variants
- **Badge** - Small status indicators
- **Button** - Clickable buttons with multiple variants
- **Card** - Container component for content
- **Input** - Text input fields
- **InputGroup** - Grouped input components with addons
- **Pagination** - Page navigation component
- **Select** - Dropdown selection component
- **Table** - Data table with responsive design

### Utilities
- **cn** - Class name utility for combining Tailwind classes
- **ThemeProvider** & **useTheme** - Theme management for dark/light mode

## Theme Support

Wrap your app with ThemeProvider to enable theme support:

```jsx
import { ThemeProvider } from 'slimuikit';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## License

MIT