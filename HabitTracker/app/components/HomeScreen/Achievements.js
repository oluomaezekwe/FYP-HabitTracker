import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Pressable, Text, View } from "react-native";

function Achievements() {
  const nav = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => nav.navigate("Achievements")}
        style={{
          width: Dimensions.get("screen").width * 0.85,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, padding: 50 }}>Achievements</Text>
      </Pressable>
    </View>
  );
}

export default Achievements;
