import { Stack } from "expo-router";

export default function PageLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="conversation/[id]"
        options={{
          animation: "ios_from_left",
        }}
      />
    </Stack>
  );
}
