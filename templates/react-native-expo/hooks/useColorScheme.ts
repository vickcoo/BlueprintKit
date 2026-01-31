import { useColorScheme as useNativeColorScheme } from 'react-native';

/**
 * Hook to get the current color scheme (light or dark)
 */
export function useColorScheme() {
  return useNativeColorScheme();
}
