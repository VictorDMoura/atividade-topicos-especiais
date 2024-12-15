import { View, FlatList } from "react-native";
import { styles } from "./style";
import { useCallback, useEffect, useState } from "react";
import ProductModel from "@/models/ProductModel";
import { useFocusEffect } from "@react-navigation/native";
import ProductItem from "@/components/productItem";

type listProduct = {
  id: number | Date | null;
  name: string;
  price: number;
  qty: number;
};

export default function ProdutosLista() {
  const [item, setItems] = useState([] as listProduct[]);

  const loadItems = async () => {
    try {
      const fetchedItems = await ProductModel.getItems();
      setItems(fetchedItems);
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadItems();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        data={item}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem items={item} />}
      />
    </View>
  );
}
