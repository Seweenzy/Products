import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="recruits">
      <Stack.Screen name="recruits" />
      <Stack.Screen name="moviescreen" />
      <Stack.Screen name="jobs" />
    </Stack>
  );
}
