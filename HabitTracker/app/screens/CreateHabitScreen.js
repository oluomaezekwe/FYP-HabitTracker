import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { connect } from "react-redux";
import { addHabit } from "../context/actions";

function CreateHabitScreen() {
  const [title, setTitle] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [selectedDays, setDays] = useState([]);

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setDays(selectedDays.filter((d) => d !== day));
    } else {
      setDays([...selectedDays, day]);
    }
  };

  const handleAddHabit = () => {
    if (title.trim() !== "") {
      addHabit(title, frequency, selectedDays);
      setText("");
      setFrequency("Daily");
      setDays([]);
    }
  };

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
          onPress={() => setFrequency("daily")}
          style={{
            backgroundColor: frequency == "daily" ? "lightblue" : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable
          onPress={() => setFrequency("weekly")}
          style={{
            backgroundColor: frequency == "weekly" ? "lightblue" : "#E0E0E0",
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
          onPress={() => handleDayToggle("Mon")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Mon")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>M</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Tue")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Tue")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>T</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Wed")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Wed")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>W</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Thu")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Thu")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>T</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Fri")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Fri")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>F</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Sat")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Sat")
                ? "lightblue"
                : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>S</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDayToggle("Sun")}
          style={{
            backgroundColor:
              selectedDays && selectedDays.includes("Sun")
                ? "lightblue"
                : "#E0E0E0",
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
        onPress={handleAddHabit}
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
