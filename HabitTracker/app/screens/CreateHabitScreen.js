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
import { setInitialPoints } from "../context/actions/pointActions";
import { colours } from "../components/theme";

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
      dispatch(setInitialPoints(uid, 10));
      setTitle("");
      setFrequency("Daily");
      setDays([]);

      nav.navigate("Habit Overview");
    } else {
      Alert.alert("Failed to create habit", "Please enter the habit title");
    }
  };

  return (
    <View style={{ height: "100%", backgroundColor: "#f9f6f1" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, color: colours.text }}>Habit Title</Text>

        {/* Habit name input */}
        <TextInput
          value={title}
          autoCapitalize="words"
          // autoCapitalize="sentences"
          onChangeText={(text) => setTitle(text)}
          style={[styles.textInput, styles.shadowAndroid, styles.shadowIOS]}
          placeholder="Example: Drink Water"
          onSubmitEditing={() => Keyboard.dismiss()}
        />

        {/* Select habit frequency - daily or weekly */}
        <Text style={styles.textHeading}>Repeat</Text>
        <View style={styles.optionsContainer}>
          <Pressable
            onPress={() => setFrequency("Daily")}
            style={[
              styles.optionButton,
              styles.shadowAndroid,
              styles.shadowIOS,
              {
                backgroundColor:
                  frequency == "Daily"
                    ? colours.selectedButton
                    : colours.button,
              },
            ]}
          >
            <Text style={styles.text}>Daily</Text>
          </Pressable>
          <Pressable
            onPress={() => setFrequency("Weekly")}
            style={[
              styles.optionButton,
              styles.shadowAndroid,
              styles.shadowIOS,
              {
                backgroundColor:
                  frequency == "Weekly"
                    ? colours.selectedButton
                    : colours.button,
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
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Mon")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>M</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Tue")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Tue")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>T</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Wed")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Wed")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>W</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Thu")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Thu")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>T</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Fri")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Fri")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>F</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Sat")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Sat")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>S</Text>
              </Pressable>
              <Pressable
                onPress={() => handleDayToggle("Sun")}
                style={[
                  styles.optionButton,
                  styles.shadowAndroid,
                  styles.shadowIOS,
                  {
                    backgroundColor:
                      days && days.includes("Sun")
                        ? colours.selectedButton
                        : colours.button,
                  },
                ]}
              >
                <Text style={styles.text}>S</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Save new habit */}
        <TouchableOpacity
          onPress={handleAddHabit}
          style={[styles.saveButton, styles.shadowAndroid, styles.shadowIOS]}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 15,
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  optionButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  saveButton: {
    marginTop: 25,
    backgroundColor: colours.buttonAlt,
    padding: 10,
    borderRadius: 13,
  },
  saveText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  // android shadow
  shadowAndroid: {
    elevation: 7,
    shadowColor: "#171717",
  },
  // ios shadow
  shadowIOS: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: colours.text,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: colours.text,
  },
  textInput: {
    width: "99%",
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: colours.textInputAlt,
  },
});

export default CreateHabitScreen;
