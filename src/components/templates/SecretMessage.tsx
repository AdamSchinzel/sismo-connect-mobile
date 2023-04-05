import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "native-base";
import React from "react";

import { RootStackParamList } from "../../screens/RootStackParams";
import Button from "../elements/Button";
import Heading from "../modules/Heading";

type SecretMessageProp = StackNavigationProp<RootStackParamList, "SecretMessage">;

const SecretMessage = () => {
  const navigation = useNavigation<SecretMessageProp>();

  return (
    <View>
      <Heading title="You made it!" subtitle="The secret message is Ethereum." />
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecretMessage;
