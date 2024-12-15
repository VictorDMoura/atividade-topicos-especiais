import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc300",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#730000",
    marginBottom: 20,
    textAlign: "center",
  },
  saveButton: {
    width: "50%",
    height: 40,
    backgroundColor: "#e37d00",
    padding: 5,
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#730000",
  },
  input: {
    width: "90%",
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: "#730000",
    borderRadius: 5,
    marginBottom: 10,
  },
  textSimple: {
    color: "#730000",
    width: "95%",
    textAlign: "center",
  },
});
