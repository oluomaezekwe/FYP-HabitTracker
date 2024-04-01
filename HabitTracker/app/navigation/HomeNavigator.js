import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#202020",
      }}
    >
      <Stack.Screen
        name="App Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          headerBackTitle: false,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
