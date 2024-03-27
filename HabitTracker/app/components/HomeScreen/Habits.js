import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { colours } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { fetchHabits } from "../../context/actions/habitActions";
import getHabitsForCurrentDate from "./getHabitsForCurrentDate";

function Habits() {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const { uid } = useAuth();
  const habits = useSelector((state) => state.habit.habits);

  const [currentDate, setCurrentDate] = useState("");
  const [formattedCurrentDate, setFormattedCurrentDate] = useState("");
  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(() => {
    // Dispatch the fetchHabits action when the component mounts
    dispatch(fetchHabits(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];

    setCurrentDate(date);
    setFormattedCurrentDate(formattedDate);

    setTodayHabits(getHabitsForCurrentDate(date, habits));
  }, [habits]);

  console.log("current date:", currentDate);

  if (todayHabits.length == 0) {
    return (
      <View>
        <View style={[styles.header, styles.shadowAndroid, styles.shadowIOS]}>
          <Text style={{ fontSize: 28, paddingLeft: 5, color: colours.text }}>
            Today
          </Text>
          <TouchableOpacity onPress={() => nav.navigate("Habits")}>
            <Feather name="chevron-right" size={28} color={colours.text} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 100 }}>
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color="darkgrey"
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={[styles.header, styles.shadowAndroid, styles.shadowIOS]}>
        <Text style={{ fontSize: 28, paddingLeft: 5, color: colours.text }}>
          Today
        </Text>
        <TouchableOpacity onPress={() => nav.navigate("Habits")}>
          <Feather name="chevron-right" size={30} color={colours.text} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ paddingTop: 15, paddingLeft: 20 }}>
          {todayHabits.map((habit) => (
            <View key={habit.id} style={{ flexDirection: "row", gap: 15 }}>
              {habit.completed.includes(formattedCurrentDate) ? (
                <FontAwesome5 name="check-circle" size={24} color="black" />
              ) : (
                <FontAwesome5 name="circle" size={24} color="black" />
              )}
              <Text
                key={habit.id}
                style={{
                  fontSize: 26,
                  color: colours.text,
                }}
              >
                {habit.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#638f4c",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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

export default Habits;
