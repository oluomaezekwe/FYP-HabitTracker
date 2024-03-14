import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomModal,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "../components/HabitScreen/Header";
import { deleteHabit, toggleHabit } from "../context/actions/habitActions";
import { fetchHabits } from "../context/actions/firebaseActions";

import { FontAwesome6 } from "@expo/vector-icons";
import useAuth from "../hooks/useAuth";
import calculateStreak from "../components/calculateStreak";

function HabitScreen() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit.habits);
  const { user } = useAuth();
  const { uid } = useAuth();

  const [currentDate, setCurrentDate] = useState("");
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Dispatch the fetchHabits action when the component mounts
    if (user) {
      dispatch(fetchHabits());
    }

    // Set current date
    const currentDate = new Date().toISOString().split("T")[0];
    setCurrentDate(currentDate);
  }, [dispatch]);

  const handleHabitPress = (habit) => {
    setSelectedHabit(habit);
    setModalVisible(true);
  };

  const currentUserHabits = habits?.filter((habit) => habit.uid === uid);

  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <Header />
        <View style={{ padding: 20 }}>
          {currentUserHabits.map((habit) => (
            <TouchableOpacity
              key={habit.id}
              onPress={() => handleHabitPress(habit)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 20,
                  marginBottom: 20,
                }}
              >
                {habit.completed.includes(currentDate) ? (
                  <FontAwesome6 name="check-circle" size={24} color="black" />
                ) : (
                  <FontAwesome6 name="circle" size={24} color="black" />
                )}
                <Text style={{ fontSize: 20 }}>{habit.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Create modal to edit and delete habits */}
      <BottomModal
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Configure Habit" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 300 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 20 }}>Habit ID: {selectedHabit?.id}</Text>
            <Text style={{ fontSize: 20 }}>User ID: {selectedHabit?.uid}</Text>
            <Text style={{ fontSize: 20 }}>
              Streak:{" "}
              {selectedHabit?.completed
                ? calculateStreak(selectedHabit.completed)
                : 0}{" "}
              days
            </Text>
            <Text style={{ fontSize: 20 }}>
              Frequency: {selectedHabit?.frequency}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Days: {selectedHabit?.days.join(", ")}
            </Text>
            {selectedHabit?.completed.includes(currentDate) ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <FontAwesome6 name="heart" size={24} color="black" />
                <Text style={{ fontSize: 16 }}>Habit Complete!</Text>
              </View>
            ) : (
              <Pressable
                onPress={() => {
                  dispatch(toggleHabit(selectedHabit?.id, currentDate));
                  setModalVisible(!isModalVisible);
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <FontAwesome6 name="check-circle" size={24} color="black" />
                <Text style={{ fontSize: 16 }}>Mark as complete</Text>
              </Pressable>
            )}
            <Pressable
              onPress={() => {
                dispatch(deleteHabit(selectedHabit?.id));
                setModalVisible(!isModalVisible);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 10,
              }}
            >
              <FontAwesome6 name="trash-can" size={28} color="black" />
              <Text style={{ fontSize: 16 }}>Delete</Text>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

export default HabitScreen;
