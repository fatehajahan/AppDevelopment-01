import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFDCDC',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
      options={{
        headerTitle: "Home"
      }}
      name="index" />
      <Stack.Screen name="details" />
    </Stack>;
}
