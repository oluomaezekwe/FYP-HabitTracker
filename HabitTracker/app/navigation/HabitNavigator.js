import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HabitScreen from "../screens/HabitScreen";
import CreateHabitScreen from "../screens/CreateHabitScreen";

const Stack = createStackNavigator();

function HabitNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTintColor: "#202020",
      }}
    >
      <Stack.Screen
        name="Habit Overview"
        component={HabitScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create Habit"
        component={CreateHabitScreen}
        options={{
          headerBackTitle: false,
          headerTransparent: true,
          title: "Add New Habit",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

export default HabitNavigator;
