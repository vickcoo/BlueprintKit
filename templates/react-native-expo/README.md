# {{PROJECT_NAME}}

{{DESCRIPTION}}

Created with DevKit - Production-ready React Native app with Expo and TypeScript.

## Tech Stack

- **Framework:** React Native
- **Platform:** Expo
- **Language:** TypeScript
- **Navigation:** Expo Router
- **Styling:** StyleSheet with Theme System

## Features

- Expo Router for file-based navigation
- TypeScript for type safety
- Theme system with light/dark mode support
- Pre-built screens (Home, Profile, Settings)
- Safe area handling
- Splash screen configuration
- ESLint + Prettier

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on different platforms:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
app/
├── (tabs)/               # Tab navigation group
│   ├── _layout.tsx      # Tab layout
│   ├── index.tsx        # Home tab
│   ├── profile.tsx      # Profile tab
│   └── settings.tsx     # Settings tab
├── _layout.tsx          # Root layout
└── +not-found.tsx       # 404 page

components/
├── ThemedText.tsx       # Themed text component
├── ThemedView.tsx       # Themed view component
└── TabBarIcon.tsx       # Tab bar icons

constants/
├── Colors.ts            # Color definitions
└── theme.ts             # Theme configuration

hooks/
└── useColorScheme.ts    # Color scheme hook
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Theme System

The app includes a built-in theme system with light and dark mode support.

### Using Themed Components

```tsx
import { ThemedText, ThemedView } from '@/components';

export default function Screen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hello World</ThemedText>
    </ThemedView>
  );
}
```

### Accessing Theme Colors

```tsx
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Component() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return <View style={{ backgroundColor: colors.background }} />;
}
```

## Navigation

This template uses Expo Router for file-based navigation.

### Adding New Screens

1. Create a new file in the `app/` directory
2. Export a React component as default
3. The file path becomes the route

Example: `app/about.tsx` → `/about`

### Navigation Between Screens

```tsx
import { Link } from 'expo-router';

<Link href="/about">Go to About</Link>
```

## Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

### Setup EAS Build
```bash
npm install -g eas-cli
eas login
eas build:configure
```

## Environment Variables

Create `.env`:
```env
EXPO_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```tsx
const API_URL = process.env.EXPO_PUBLIC_API_URL;
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## License

MIT

## Author

{{AUTHOR}}
