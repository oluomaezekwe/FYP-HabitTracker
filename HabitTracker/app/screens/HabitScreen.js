import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "../components/HabitScreen/Header";
import calculateStreak from "../components/calculateStreak";
import { deleteHabit, toggleHabit } from "../context/actions/habitActions";
import { fetchHabits } from "../context/actions/firebaseActions";
import useAuth from "../hooks/useAuth";

import { FontAwesome6 } from "@expo/vector-icons";

function HabitScreen() {
  const dispatch = useDispatch();
  const { uid } = useAuth();
  const habits = useSelector((state) => state.habit.habits);

  const [currentDate, setCurrentDate] = useState("");
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Dispatch the fetchHabits action when the component mounts
    dispatch(fetchHabits(uid));

    console.log("User Habits:", habits);

    // Set current date
    const currentDate = new Date().toISOString().split("T")[0];
    setCurrentDate(currentDate);
  }, [dispatch, uid]);

  const handleHabitPress = (habit) => {
    setSelectedHabit(habit);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <View style={{ paddingTop: 25 }}>
          {habits.map((habit) => (
            <TouchableOpacity
              key={habit.id}
              onPress={() => handleHabitPress(habit)}
            >
              <View style={styles.habitList}>
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
        <ModalContent style={styles.modal}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Habit ID: {selectedHabit?.id}</Text>
            <Text style={{ fontSize: 16 }}>User ID: {selectedHabit?.uid}</Text>
            <Text style={{ fontSize: 16 }}>
              Days Completed: {selectedHabit?.completed.join(", ")}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Frequency: {selectedHabit?.frequency}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Days: {selectedHabit?.days.join(", ")}
            </Text>

            {/* Display habit streak */}
            <View style={styles.habitDetailsView}>
              <FontAwesome6 name="fire-flame-curved" size={25} color="black" />
              {calculateStreak(selectedHabit?.completed) == 1 ? (
                <Text style={{ fontSize: 16 }}>
                  Streak: {calculateStreak(selectedHabit?.completed)} day
                </Text>
              ) : (
                <Text style={{ fontSize: 16 }}>
                  Streak: {calculateStreak(selectedHabit?.completed)} days
                </Text>
              )}
            </View>

            {/* Display habit completion */}
            {selectedHabit?.completed.includes(currentDate) ? (
              <View style={styles.habitDetailsView}>
                <FontAwesome6 name="heart" size={24} color="black" />
                <Text style={{ fontSize: 16 }}>Habit Complete!</Text>
              </View>
            ) : (
              <Pressable
                onPress={() => {
                  dispatch(toggleHabit(selectedHabit?.id, uid, currentDate));
                  setModalVisible(!isModalVisible);
                }}
                style={styles.habitDetailsView}
              >
                <FontAwesome6 name="check-circle" size={24} color="black" />
                <Text style={{ fontSize: 16 }}>Mark as complete</Text>
              </Pressable>
            )}

            {/* Display habit delete */}
            <Pressable
              onPress={() => {
                dispatch(deleteHabit(selectedHabit?.id, uid));
                setModalVisible(!isModalVisible);
              }}
              style={styles.habitDetailsView}
            >
              <FontAwesome6 name="trash-can" size={26} color="black" />
              <Text style={{ fontSize: 16 }}>Delete</Text>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  habitList: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    marginBottom: 20,
  },
  modal: {
    width: "100%",
    height: 300,
  },
  habitDetailsView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
});

export default HabitScreen;
