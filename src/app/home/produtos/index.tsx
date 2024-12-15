import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Separator } from "@/components/separator";

export default function Produtos() {
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
    productQty: "",
  });

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
        id: new Date().getTime(),
        name: state.productName,
        price: parseFloat(state.productPrice),
        qty: parseInt(state.productQty),
      };

      let savedProducts = [];
      const response = await AsyncStorage.getItem("products");

      if (response) savedProducts = JSON.parse(response);
      savedProducts.push(listItem);
      console.log(savedProducts);
      Alert.alert("Dados do Produto!", "Produto cadastrado com sucesso!");

      await AsyncStorage.setItem("products", JSON.stringify(savedProducts));

      setState({
        productName: "",
        productPrice: "",
        productQty: "",
      });
      Alert.alert("Dados do Produto!", "Produto cadastrado com sucesso!");
      router.navigate("home");
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
