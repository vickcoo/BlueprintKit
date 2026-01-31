import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      <ThemedText style={styles.subtitle}>App settings and preferences</ThemedText>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Appearance</ThemedText>
        <ThemedText>Theme: Automatic (follows system)</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Notifications</ThemedText>
        <ThemedText>Push notifications: Enabled</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">About</ThemedText>
        <ThemedText>Built with DevKit</ThemedText>
        <ThemedText>Version {{VERSION}}</ThemedText>
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
  section: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
