import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTips } from "../../context/actions/firebaseActions";

function Tips() {
  const dispatch = useDispatch();
  const tips = useSelector((state) => state.tip.tips);

  useEffect(() => {
    // Dispatch the fetchTips action when the component mounts
    try {
      dispatch(fetchTips());
    } catch (error) {
      console.log("Error fetching tips: ", error);
    }

    console.log("Tips:", tips);
  }, [dispatch]);

  const getRandomTip = (array) => {
    if (!array || array.length === 0) return null; // Return null if array is empty
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const randomTip = getRandomTip(tips);

  if (!randomTip) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="darkgrey"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ padding: 18 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={{ width: 250, paddingTop: 5, paddingLeft: 15 }}>
            <Text style={{ fontSize: 22 }}>{randomTip.content}</Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              {randomTip.author}
            </Text>
          </View>
          <View style={{ width: 120 }}>
            <Image
              style={styles.image}
              source={require("../../../assets/tipImage.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  image: {
    width: 120,
    height: 120,
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});

export default Tips;
