import { useLocalSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";
import { styles } from "./style";

export default function Home() {
  const { name, email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Tela Home {email}</Text>
      <Text>Olá {name}, seja bem-vindo!</Text>
    </View>
  );
}
