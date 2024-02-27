import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function CreateHabitScreen() {
  const [title, setTitle] = useState("");
  const [selectedRepeatMode, setRepeatMode] = useState("");
  const [selectedDays, setDays] = useState("");

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <View style={{ marginTop: 100, padding: 15 }}>
      <Text style={{ fontSize: 24 }}>Habit Title</Text>

      {/* Habit name input */}
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          width: "95%",
          marginTop: 20,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "lightgray",
        }}
        placeholder="Example: Drink Water"
      />

      {/* Select habit frequency - daily or weekly */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
        Repeat
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          onPress={() => setRepeatMode("daily")}
          style={{
            backgroundColor:
              selectedRepeatMode == "daily" ? "lightblue" : "darkgray",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable
          onPress={() => setRepeatMode("weekly")}
          style={{
            backgroundColor:
              selectedRepeatMode == "weekly" ? "lightblue" : "darkgray",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>Weekly</Text>
        </Pressable>
      </View>

      {/* Select days to track */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
        Days To Track
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>M</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>T</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>W</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>T</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>F</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>S</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>S</Text>
        </Pressable>
      </View>

      {/* Save new habit */}
      <TouchableOpacity
        onPress={() => console.log("Habit Added")}
        style={{
          marginTop: 25,
          backgroundColor: "dodgerblue",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreateHabitScreen;
