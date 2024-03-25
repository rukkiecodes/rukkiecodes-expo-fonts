```markdown
# Font Component

The `Font` component is designed to handle the loading of custom fonts in a React Native application. It uses the `expo-font` package to load fonts and `expo-splash-screen` to manage the splash screen visibility during the font loading process.

## Features

- Loads custom fonts using `expo-font`.
- Manages the splash screen visibility with `expo-splash-screen`.
- Passes all received props to the underlying `View` component.
- Renders children components only after the fonts are loaded.

## Installation

Before using the `Font` component, ensure you have installed the required packages:

```bash
npx expo install expo-font expo-splash-screen
```


## Usage

To use the `Font` component, follow these steps:

1. Import the `Font` component into your app:

```jsx
import Font from 'rukkiecodes-expo-fonts'
```

2. Wrap your application's root component with the `Font` component:

```jsx
<Font style={/* Your styles here */}>
  {/* Your app's components */}
</Font>
```

3. Ensure your text components use the custom font:

```jsx
<Text style={{ fontFamily: 'Roboto-Regular' }}>
  Your text here
</Text>
```

## Props

The `Font` component accepts all the props that a standard React Native `View` component accepts. Here's a table explaining the custom props:

| Prop          | Type     | Description                                           |
|---------------|----------|-------------------------------------------------------|
| `children`    | `node`   | The components to render inside the `Font` component. |

## Example

Here's an example of how to use the `Font` component in your application:

```jsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Font from 'rukkiecodes-expo-fonts'

export default function App() {
  return (
    <Font style={styles.container}>
      <Text style={{ fontFamily: 'Roboto-Regular' }}>
        Open up App.js to start working on your app!
      </Text>
    </Font>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```