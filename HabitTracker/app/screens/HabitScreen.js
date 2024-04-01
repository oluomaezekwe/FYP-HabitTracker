import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomModal,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "../components/HabitScreen/Header";
import calculateStreak from "../components/calculateStreak";
import {
  deleteHabit,
  fetchHabits,
  toggleHabit,
} from "../context/actions/habitActions";
import useAuth from "../hooks/useAuth";

import { FontAwesome6, Entypo, Feather } from "@expo/vector-icons";
import { colours } from "../components/theme";
import addStreakBadge from "../components/addStreakBadge";

function HabitScreen() {
  const dispatch = useDispatch();
  const { uid } = useAuth();
  const habits = useSelector((state) => state.habit.habits);
  const badges = useSelector((state) => state.badge.badges);

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

  useEffect(() => {
    habits.forEach((habit) => {
      addStreakBadge(uid, calculateStreak(habit?.completed), badges, dispatch);
    });
  }, [uid, habits]);

  const handleHabitPress = (habit) => {
    setSelectedHabit(habit);
    setModalVisible(true);
  };

  const renderTitle = (title) => {
    if (title.length > 18) {
      const spaceIndex = title.indexOf(" ", 17);
      if (spaceIndex !== -1) {
        const firstPart = title.substring(0, spaceIndex); // Extract the first part of the title
        const secondPart = title.substring(spaceIndex + 1); // Extract the second part of the title
        return (
          <>
            {firstPart}
            {"\n"}
            {secondPart}
          </>
        );
      }
    }
    return title;
  };

  return (
    <>
      <ImageBackground
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        source={require("../../assets/appBackground4.png")}
      >
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
            <Header />
          </View>
          <View>
            <ScrollView>
              <View
                style={{
                  marginBottom: 30,
                  paddingTop: 25,
                  paddingHorizontal: 20,
                  paddingBottom: 15,
                }}
              >
                {habits.map((habit) => (
                  <View
                    key={habit.id}
                    style={[
                      styles.habitCard,
                      styles.shadowAndroid,
                      styles.shadowIOS,
                    ]}
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Habit Title */}
                        <View style={{ flexDirection: "row", gap: 10 }}>
                          <Text
                            style={{
                              fontSize: 22,
                              fontWeight: "bold",
                              color: colours.text,
                            }}
                          >
                            {renderTitle(habit.title)}
                          </Text>
                          {habit.completed.includes(currentDate) ? (
                            <Feather
                              name="check"
                              size={24}
                              color={colours.text}
                            />
                          ) : (
                            <View></View>
                          )}
                        </View>
                        <TouchableOpacity
                          onPress={() => handleHabitPress(habit)}
                        >
                          <Entypo
                            name="dots-three-horizontal"
                            size={24}
                            color={colours.text}
                          />
                        </TouchableOpacity>
                      </View>

                      {/* Habit Streak */}
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <FontAwesome6
                          name="fire-flame-curved"
                          size={24}
                          color={colours.text}
                        />
                        {calculateStreak(habit.completed) == 1 ? (
                          <Text style={{ fontSize: 18, color: colours.text }}>
                            {calculateStreak(habit.completed)} day
                          </Text>
                        ) : (
                          <Text style={{ fontSize: 18, color: colours.text }}>
                            {calculateStreak(habit.completed)} days
                          </Text>
                        )}
                      </View>

                      {/* Habit Frequency */}
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Feather name="repeat" size={24} color={colours.text} />
                        {habit.frequency == "Daily" ? (
                          <Text style={{ fontSize: 18, color: colours.text }}>
                            {habit.frequency}
                          </Text>
                        ) : (
                          <Text style={{ fontSize: 18, color: colours.text }}>
                            Weekly every {habit.days.join(", ")}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>

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
            {/* <Text style={{ fontSize: 16, color: colours.text }}>
              Days Completed: {selectedHabit?.completed.join(", ")}
            </Text> */}

            {/* Display habit complete */}
            {selectedHabit?.completed.includes(currentDate) ? (
              <View style={styles.habitDetailsView}></View>
            ) : (
              <Pressable
                onPress={() => {
                  dispatch(toggleHabit(selectedHabit?.id, uid, currentDate));
                  setModalVisible(!isModalVisible);
                }}
                style={styles.habitDetailsView}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "white",
                    width: 300,
                    // padding: 12,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontSize: 20, color: colours.text }}>
                    Mark as complete
                  </Text>
                </View>
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
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "white",
                  width: 300,
                  paddingTop: 8,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "red" }}>Delete Habit</Text>
              </View>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const screenHeight = Platform.OS == "ios" ? 60 : 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight,
  },
  habitCard: {
    flex: 1,
    width: 370,
    height: 150,
    backgroundColor: "white",
    padding: 20,
    // marginLeft: 20,
    marginBottom: 15,
    borderRadius: 30,
  },
  habitList: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  modal: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: 140,
  },
  habitDetailsView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  // android shadow
  shadowAndroid: {
    elevation: 10,
    shadowColor: "#171717",
  },
  // ios shadow
  shadowIOS: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
});

export default HabitScreen;
