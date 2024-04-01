import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ModalPortal } from "react-native-modals";

import HomeNavigator from "./HomeNavigator";
import HabitNavigator from "./HabitNavigator";
import AchievementScreen from "../screens/AchievementScreen";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function InnerNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#638f4c",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Habits"
          component={HabitNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="check" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Achievements"
          component={AchievementScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="trophy" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <ModalPortal />
    </>
  );
}

export default InnerNavigator;
