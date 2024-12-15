import { useState } from "react";
import { Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Separator } from "@/components/separator";
import ProductModel from "@/models/ProductModel";

export default function Produtos() {
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
    productQty: "",
  });

  const { id } = useLocalSearchParams();

  const handleChangeText = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  async function handleSave() {
    if (!state.productName || !state.productPrice || !state.productQty) {
      Alert.alert(
        "Erro ao tentar cadastrar produto:",
        "Preencha todos os campos!"
      );
      return;
    } else {
      const listItem = {
        id: null,
        name: state.productName,
        price: parseFloat(state.productPrice),
        qty: parseInt(state.productQty),
      };

      ProductModel.saveItem(listItem, id)
        .then(() => router.navigate("/home/produtosLista"))
        .catch(() =>
          Alert.alert(
            "Erro ao tentar cadastrar produto:",
            "Tente novamente mais tarde!"
          )
        );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dados de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={state.productName}
        onChangeText={(value) => handleChangeText("productName", value)}
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={state.productPrice}
        onChangeText={(value) => handleChangeText("productPrice", value)}
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={state.productQty}
        onChangeText={(value) => handleChangeText("productQty", value)}
        clearButtonMode="always"
      />
      <Separator marginVertical={30} />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
