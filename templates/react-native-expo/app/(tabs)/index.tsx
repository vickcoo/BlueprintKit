import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to {{PROJECT_NAME}}</ThemedText>
      <ThemedText style={styles.subtitle}>{{DESCRIPTION}}</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Get Started</ThemedText>
        <ThemedText>
          Edit app/(tabs)/index.tsx to start building your app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Features</ThemedText>
        <ThemedText>• Expo Router for navigation</ThemedText>
        <ThemedText>• TypeScript for type safety</ThemedText>
        <ThemedText>• Theme system with dark mode</ThemedText>
        <ThemedText>• Production-ready structure</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 24,
    opacity: 0.6,
  },
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
