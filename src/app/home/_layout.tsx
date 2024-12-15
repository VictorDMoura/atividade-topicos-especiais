import { Tabs } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

const BottomStack: FC = () => {
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarStyle: { backgroundColor: "#e37d00" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ffc300 ",
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="produtos/index"
        options={{
          tabBarLabel: "Novo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={"plus-box-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="produtosLista/index"
        options={{
          tabBarLabel: "Listar",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"list-alt"} size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomStack;
