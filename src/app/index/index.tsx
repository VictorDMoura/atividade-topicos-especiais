import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { Separator } from "@/components/separator";
import { useCallback, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { router, useFocusEffect } from "expo-router";
import React from "react";

export default function Index() {
  const [registeredState, setRegisteredState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haveAccount, setHaveAccount] = useState(false);

  async function getUserData() {
    let userData = await SecureStore.getItemAsync("userData");
    if (userData) {
      setEmail(JSON.parse(userData).email);
      setRegisteredState({ ...JSON.parse(userData) });
      setHaveAccount(true);
    } else {
      setHaveAccount(false);
    }
  }

  function handleLogin() {
    if (email.length !== 0 || password.length !== 0) {
      if (
        email === registeredState.email &&
        password === registeredState.password
      ) {
        setPassword("");
        router.push({
          pathname: "/home",
          params: { email: email, name: registeredState.name },
        });
      } else {
        Alert.alert("Erro ao efetuar login", "Informa email e senha corretos");
      }
    } else {
      Alert.alert("Erro ao efetuar login", "Preencha todos os campos");
    }
  }

  function handleRegister() {
    setEmail("");
    setPassword("");
    router.navigate("/register");
  }

  function handleDeleteRegister() {
    SecureStore.deleteItemAsync("userData");
  }

  useFocusEffect(
    useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Secure Store App</Text>
      <TextInput
        style={styles.input}
        placeholder="usuario@example.com"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <Separator marginVertical={10} />
      {!haveAccount ? (
        <>
          <Text style={styles.textSimple}>
            É a primeira vez aqui e ainda não se cadastrou?
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>Já possuo uma conta, porém...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Informação",
                "A sua senha foi enviada para o email cadastrado"
              )
            }
          >
            <Text style={styles.buttonText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </>
      )}
      <Separator marginVertical={30} />
      <Text style={styles.textSimpleJustify}>
        Esse aplicativo faz uso de armazenamento local com SecureStore e fará
        também com AsyncStorage
      </Text>
      <TouchableOpacity onPress={handleDeleteRegister}>
        <Text style={styles.buttonText}>Deletar chave</Text>
      </TouchableOpacity>
    </View>
  );
}
