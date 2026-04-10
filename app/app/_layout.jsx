import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="index" />
      <Stack.Screen name="jobs" />
      <Stack.Screen name="moviescreen" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
