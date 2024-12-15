import AsyncStorage from "@react-native-async-storage/async-storage";

type listProduct = {
  id?: number | Date | null;
  name: string;
  price: number;
  qty: number;
};

async function saveItem(
  listItem: listProduct,
  id: number | Date | null
): Promise<void> {
  const savedItem = await getItems();
  listItem.id = id ? id : new Date().getTime();

  if (id) {
    const index = await savedItem.findIndex(
      (item: listProduct) => item.id === id
    );

    console.log("verdadeiro", index);

    savedItem[index] = listItem;
  } else {
    savedItem.push(listItem);

    console.log("Falso");
  }

  return await AsyncStorage.setItem("products", JSON.stringify(savedItem));
}

async function getItems(): Promise<listProduct[]> {
  return AsyncStorage.getItem("products").then((response) => {
    if (response) {
      return Promise.resolve(JSON.parse(response));
    } else {
      return Promise.resolve([] as listProduct[]);
    }
  });
}

async function getItem(id: number | Date): Promise<listProduct | undefined> {
  const savedItem = await getItems();
  return savedItem.find((item: listProduct) => item.id === id);
}

async function deleteItem(id: number | Date) {
  const savedItem = await getItems();
  const index = savedItem.findIndex((item: listProduct) => item.id === id);
  savedItem.splice(index, 1);
  return await AsyncStorage.setItem("products", JSON.stringify(savedItem));
}

export default {
  saveItem,
  getItems,
  getItem,
  deleteItem,
};
