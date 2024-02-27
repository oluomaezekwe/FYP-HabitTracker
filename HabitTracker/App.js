import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./app/context/store";
import CreateHabitScreen from "./app/screens/CreateHabitScreen";
import HabitNavigator from "./app/navigation/HabitNavigator";

export default function App() {
  return (
    <Provider store={store}>
      {/* <CreateHabitScreen /> */}
      <NavigationContainer>
        <HabitNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
