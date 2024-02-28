import React from "react";
import { Text, View } from "react-native";

function AchievementScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Achievement Page
      </Text>
    </View>
  );
}

export default AchievementScreen;
