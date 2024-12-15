import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fef3b4",
    marginTop: 15,
    width: "100%",
    borderRadius: 10,
    padding: 5,
  },
  itemLayoutDetail: {
    flexDirection: "row",
  },
  itemTextName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#730000",
  },
  itemTextDetailTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#730000",
  },
  itemTextDetail: {
    fontSize: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    marginLeft: 10,
    height: 30,
    backgroundColor: "#d26900",
    borderRadius: 7,
    padding: 5,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteItem: {
    marginLeft: 10,
    height: 30,
    backgroundColor: "#d26900",
    borderRadius: 7,
    padding: 5,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
});
