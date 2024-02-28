import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import InnerNavigator from "./InnerNavigator";
import AuthScreen from "../screens/AuthScreen";

const Stack = createStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};

function RootNavigator() {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Inner" component={InnerNavigator} />
        {/* {isSignedIn ? (
        <Stack.Screen name="Inner" component={InnerNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} />
      )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
