import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} initialRouteName="productscreen" >

  <Stack.Screen name="index" />
  <Stack.Screen name="productscreen" />

  </Stack>
}
