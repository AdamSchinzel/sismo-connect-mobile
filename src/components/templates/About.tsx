import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";

import { RootStackParamList } from "../../screens/RootStackParams";
import Card from "../modules/Card";

type AboutScreenProp = StackNavigationProp<RootStackParamList, "About">;

const About = () => {
  const navigation = useNavigation<AboutScreenProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Card text="" buttonText="" onPress={() => navigation.goBack()} isAbout />
    </View>
  );
};

export default About;
