import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";

import { RootStackParamList } from "../../screens/RootStackParams";
import Card from "../modules/Card";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Card text="" buttonText="" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

export default Home;
