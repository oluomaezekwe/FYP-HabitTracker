import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Header from "../components/HabitScreen/Header";
import { deleteHabit, toggleHabit } from "../context/actions";

function HabitScreen() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Header />
      <View style={{ padding: 20 }}>
        {habits?.map((habit) => (
          <View key={habit.id}>
            <Text style={{ fontSize: 20 }}>Title: {habit.title}</Text>
            <Text style={{ fontSize: 20 }}>Frequency: {habit.frequency}</Text>
            <Text style={{ fontSize: 20 }}>Days: {habit.days.join(", ")}</Text>
            {habit.completed == true ? (
              <Text style={{ fontSize: 20 }}>Completed: True</Text>
            ) : (
              <Text style={{ fontSize: 20 }}>Completed: False</Text>
            )}
            <TouchableOpacity
              onPress={() => dispatch(toggleHabit(habit.id))}
              style={{
                padding: 20,
                backgroundColor: "#E0E0E0",
                borderRadius: 12,
                margin: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Complete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(deleteHabit(habit.id))}
              style={{
                padding: 20,
                backgroundColor: "#E0E0E0",
                borderRadius: 12,
                margin: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default HabitScreen;
