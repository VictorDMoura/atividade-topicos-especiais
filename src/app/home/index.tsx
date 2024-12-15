import { useLocalSearchParams } from "expo-router/build/hooks";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Separator } from "@/components/separator";

export default function Home() {
  const { name, email } = useLocalSearchParams();
  async function handleProdutosDelete() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      Alert.alert("Erro ao deletar produtos");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Tela Home {email}</Text>
      <Text>Olá {name}, seja bem-vindo!</Text>
      <Separator marginVertical={20} />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleProdutosDelete}
      >
        <Text style={styles.saveButtonText}>Deletar Todos Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}
