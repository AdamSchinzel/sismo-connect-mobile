import { ApolloProvider } from "@apollo/client";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import "react-native-gesture-handler";

import theme from "./src/config/theme";
import { AboutScreen, HomeScreen } from "./src/screens";
import { RootStackParamList } from "./src/screens/RootStackParams";
import { client } from "./src/services/client";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const navigationRef = useNavigationContainerRef();

  const screens: {
    name: keyof RootStackParamList;
    component: () => JSX.Element;
  }[] = [
    { name: "Home", component: HomeScreen },
    { name: "About", component: AboutScreen },
  ];

  return (
    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NavigationContainer ref={navigationRef}>
        <NativeBaseProvider theme={theme}>
          <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
            {screens.map((it: any) => (
              <Stack.Screen key={it.name} {...it} />
            ))}
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
