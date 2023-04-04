import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, View } from "native-base";
import React from "react";

import { RootStackParamList } from "../../screens/RootStackParams";
import Heading from "../modules/Heading";

type SecretMessageProp = StackNavigationProp<RootStackParamList, "SecretMessage">;

const SecretMessage = () => {
  const navigation = useNavigation<SecretMessageProp>();

  return (
    <View>
      <Heading title="You made it!" subtitle="Secret message is Ethereum." />
      <Button
        mt={10}
        mx={10}
        onPress={() => navigation.goBack()}
        _text={{ fontWeight: "bold", fontSize: "lg" }}
        size="lg">
        Go back
      </Button>
    </View>
  );
};

export default SecretMessage;
