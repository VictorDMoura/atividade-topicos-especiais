import { Stack } from "expo-router";
import { Alert, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Atenção!",
                "Deseja Sair do aplicativo?",
                [
                  {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Sim",
                    onPress: () => console.log("OK Pressed"),
                  },
                ],
                { cancelable: false }
              );
            }}
            style={{ padding: 10 }}
          >
            <MaterialCommunityIcons name="exit-run" color="#fff" size={26} />
          </TouchableOpacity>
        ),
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
