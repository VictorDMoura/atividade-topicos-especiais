import ProductModel from "@/models/ProductModel";
import { router } from "expo-router";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";

type listProduct = {
  id: number | Date;
  name: string;
  price: number;
  qty: number;
};

export default function ProductItem({ items }: { items: listProduct }) {
  async function handleEditButton() {
    const item = await ProductModel.getItem(items.id);
    router.navigate("/home/produtos");
  }

  function handleDeletePress() {
    Alert.alert(
      "Atenção!",
      `Deseja realmente excluir "${items.name}"?`,
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await ProductModel.deleteItem(items.id);
            router.navigate("/home/produtosLista");
          },
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.itemTextName}>{items.name}</Text>
      <View style={styles.itemLayoutDetail}>
        <Text style={styles.itemTextDetailTitle}>Id:</Text>
        <Text style={styles.itemTextDetail}>{items.id}</Text>
      </View>
      <View style={styles.itemLayoutDetail}>
        <Text style={styles.itemTextDetailTitle}>Preço:</Text>
        <Text style={styles.itemTextDetail}>{items.price}</Text>
      </View>
      <View style={styles.itemLayoutDetail}>
        <Text style={styles.itemTextDetailTitle}>Quantidade Estoque (Kg):</Text>
        <Text style={styles.itemTextDetail}>{items.qty}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleDeletePress}>
          <MaterialCommunityIcons
            name="delete-forever"
            color="#fff"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={handleEditButton}>
          <MaterialCommunityIcons
            name="file-document-edit-outline"
            color="#fff"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
