import React, { useEffect, useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setCurrentDate(currentDate);
  }, []);

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
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Habits</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Create Habit")}>
          <FontAwesome6 name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 18 }}>{currentDate}</Text>
    </View>
  );
}

export default Header;
