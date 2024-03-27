import React, { useEffect, useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../theme";

function Header() {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold", color: colours.text }}>
          Habits
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Create Habit")}>
          <FontAwesome6 name="add" size={30} color={colours.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
