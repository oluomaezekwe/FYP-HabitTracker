import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Pressable, Text, View } from "react-native";

function Habits() {
  const nav = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => nav.navigate("Habits")}
        style={{
          width: Dimensions.get("screen").width * 0.85,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, padding: 50 }}>Habits</Text>
      </Pressable>
    </View>
  );
}

export default Habits;
