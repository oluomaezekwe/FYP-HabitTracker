import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "./app/context/store";
import CreateHabitScreen from "./app/screens/CreateHabitScreen";

export default function App() {
  return (
    <Provider store={store}>
      <CreateHabitScreen />
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
