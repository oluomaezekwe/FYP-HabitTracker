import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
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

  const { uid } = useAuth();
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

      dispatch(addHabit(uid, title, frequency, selectedDays));
      setTitle("");
      setFrequency("Daily");
      setDays([]);

      nav.navigate("Habit Overview");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Habit Title</Text>

      {/* Habit name input */}
      <TextInput
        value={title}
        autoCapitalize="sentences"
        onChangeText={(text) => setTitle(text)}
        style={styles.textInput}
        placeholder="Example: Drink Water"
        onSubmitEditing={() => Keyboard.dismiss()}
      />

      {/* Select habit frequency - daily or weekly */}
      <Text style={styles.textHeading}>Repeat</Text>
      <View style={styles.optionsContainer}>
        <Pressable
          onPress={() => setFrequency("Daily")}
          style={[
            styles.freqPressable,
            {
              backgroundColor: frequency == "Daily" ? "lightblue" : "#E0E0E0",
            },
          ]}
        >
          <Text style={styles.text}>Daily</Text>
        </Pressable>
        <Pressable
          onPress={() => setFrequency("Weekly")}
          style={[
            styles.freqPressable,
            {
              backgroundColor: frequency == "Weekly" ? "lightblue" : "#E0E0E0",
            },
          ]}
        >
          <Text style={styles.text}>Weekly</Text>
        </Pressable>
      </View>

      {/* Select days to track */}
      {frequency === "Daily" ? (
        <View></View>
      ) : (
        <View>
          <Text style={styles.textHeading}>Days To Track</Text>
          <View style={styles.optionsContainer}>
            <Pressable
              onPress={() => handleDayToggle("Mon")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Mon") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>M</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Tue")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Tue") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>T</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Wed")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Wed") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>W</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Thu")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Thu") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>T</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Fri")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Fri") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>F</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Sat")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Sat") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>S</Text>
            </Pressable>
            <Pressable
              onPress={() => handleDayToggle("Sun")}
              style={[
                styles.dayPressable,
                {
                  backgroundColor:
                    days && days.includes("Sun") ? "lightblue" : "#E0E0E0",
                },
              ]}
            >
              <Text style={styles.text}>S</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Save new habit */}
      <TouchableOpacity onPress={handleAddHabit} style={styles.saveTouchable}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 15,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  textInput: {
    width: "95%",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  freqPressable: { padding: 10, borderRadius: 6, flex: 1 },
  text: { fontSize: 18, textAlign: "center" },
  dayPressable: { padding: 10, borderRadius: 6, flex: 1 },
  saveTouchable: {
    marginTop: 25,
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 8,
  },
  saveText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreateHabitScreen;
