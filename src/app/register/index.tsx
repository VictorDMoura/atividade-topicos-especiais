import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "./style";
import { Separator } from "@/components/separator";

type userData = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export default function Register() {
  const [state, setState] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userPassword: "",
  });

  const [userPasswordconfirm, setUserPasswordconfirm] = useState("");

  const saveUserData = (userData: userData) =>
    SecureStore.setItemAsync("userData", JSON.stringify(userData));

  function handleRegister() {
    if (
      !state.userName ||
      !state.userPhone ||
      !state.userEmail ||
      !state.userPassword ||
      !userPasswordconfirm
    ) {
      Alert.alert("Erro ao efetuar cadastro", "Preencha todos os campos");
      return;
    } else {
      saveUserData({
        name: state.userName,
        phone: state.userPhone,
        email: state.userEmail,
        password: state.userPassword,
      });
      router.back();
    }
  }

  const handleChangeText = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={state.userName}
        onChangeText={(text) => handleChangeText("userName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={state.userPhone}
        keyboardType="phone-pad"
        onChangeText={(text) => handleChangeText("userPhone", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={state.userEmail}
        keyboardType="email-address"
        onChangeText={(text) => handleChangeText("userEmail", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={state.userPassword}
        onChangeText={(text) => handleChangeText("userPassword", text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        value={userPasswordconfirm}
        onChangeText={(text) => setUserPasswordconfirm(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      <Separator marginVertical={30} />
      <Text style={styles.textSimple}>Atenção!</Text>
      <Text style={styles.textSimple}>
        Informe um e-mail válido, pois em caso de recuperação de senha, ela será
        enviada para o e-mail cadastrado.
      </Text>
    </View>
  );
}
