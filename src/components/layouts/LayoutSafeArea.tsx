import { View } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LayoutSafeArea = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={{
        ...props.style,
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: props.ignoreBottom ? 0 : insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#121F3C",
      }}>
      {props.children}
    </View>
  );
};

export default LayoutSafeArea;
