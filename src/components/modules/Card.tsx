import React from "react";
import { Linking, Text, View } from "react-native";

import Button from "../elements/Button";

interface CardProps {
  text: string;
  buttonText: string;
  onPress: () => void;
  isAbout?: boolean;
}

const Card = ({ text, buttonText, onPress, isAbout }: CardProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ paddingBottom: 20, fontSize: 18, fontWeight: "500", textAlign: "center", color: "#fff" }}>
        {text}
      </Text>
      {isAbout && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            width: 120,
          }}></View>
      )}
      <Button onPress={onPress} text={buttonText} />
    </View>
  );
};

export default Card;
