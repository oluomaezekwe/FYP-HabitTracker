import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HabitScreen from "../screens/HabitScreen";
import CreateHabitScreen from "../screens/CreateHabitScreen";

const Stack = createStackNavigator();

function HabitNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
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
        }}
      />
    </Stack.Navigator>
  );
}

export default HabitNavigator;
