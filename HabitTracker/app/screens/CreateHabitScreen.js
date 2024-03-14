import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { addHabit } from "../context/actions/habitActions";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

function CreateHabitScreen() {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const user = useAuth();
  const [title, setTitle] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [days, setDays] = useState([]);

  const handleDayToggle = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleAddHabit = () => {
    if (title.trim() !== "") {
      let selectedDays = days;

      // Check if all days are selected
      const allDaysSelected = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ].every((day) => days.includes(day));

      if (allDaysSelected) {
        setFrequency("Daily");
      } else if (frequency === "Daily") {
        selectedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      }

      if (selectedDays.length === 0) {
        Alert.alert(
          "Failed to create habit",
          "Please enter the days you wish to track"
        );
        return;
      }

      dispatch(addHabit(user.uid, title, frequency, selectedDays));
      setTitle("");
      setFrequency("Daily");
      setDays([]);

      nav.navigate("Habit Overview");
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
          onPress={() => setFrequency("Daily")}
          style={{
            backgroundColor: frequency == "Daily" ? "lightblue" : "#E0E0E0",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable
          onPress={() => setFrequency("Weekly")}
          style={{
            backgroundColor: frequency == "Weekly" ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Mon") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Tue") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Wed") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Thu") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Fri") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Sat") ? "lightblue" : "#E0E0E0",
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
              days && days.includes("Sun") ? "lightblue" : "#E0E0E0",
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
