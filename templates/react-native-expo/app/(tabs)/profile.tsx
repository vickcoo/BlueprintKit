import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Profile</ThemedText>
      <ThemedText style={styles.subtitle}>User profile information</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Name</ThemedText>
        <ThemedText>{{AUTHOR}}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Project</ThemedText>
        <ThemedText>{{PROJECT_NAME}}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Version</ThemedText>
        <ThemedText>{{VERSION}}</ThemedText>
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
