import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#121212"
                },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>
            <Stack.Screen name="profile/[login]" options={{title: "Perfil"}}></Stack.Screen>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
        </Stack>
    )
}