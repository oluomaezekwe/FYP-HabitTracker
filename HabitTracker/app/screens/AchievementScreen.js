import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { colours } from "../components/theme";
import { fetchBadges } from "../context/actions/badgeActions";

function AchievementScreen() {
  const dispatch = useDispatch();
  const badges = useSelector((state) => state.badge.badges);
  const streakOneBadge = "One day streak";
  const streakSevenBadge = "Seven day streak";
  const streakThirtyBadge = "Thirty day streak";
  const streakSixtyBadge = "Sixty day streak";
  const { uid } = useAuth();

  useEffect(() => {
    try {
      dispatch(fetchBadges(uid));
    } catch (error) {
      console.log("Error fetching badges: ", error);
    }

    console.log("Badges from Redux:", badges);
  }, [dispatch, uid]);

  const hasStreakOneBadge = badges.some(
    (badge) => badge.name === streakOneBadge
  );
  const hasStreakSevenBadge = badges.some(
    (badge) => badge.name === streakSevenBadge
  );
  const hasStreakThirtyBadge = badges.some(
    (badge) => badge.name === streakThirtyBadge
  );
  const hasStreakSixtyBadge = badges.some(
    (badge) => badge.name === streakSixtyBadge
  );

  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      source={require("../../assets/appBackground4.png")}
    >
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={styles.headerText}>Badges</Text>
        </View>
        <ScrollView
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: 10,
              marginBottom: 100,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={[
                styles.card,
                styles.shadowAndroid,
                styles.shadowIOS,
                { marginTop: 5 },
              ]}
            >
              {hasStreakOneBadge ? (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak1dayEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>Earned Badge for</Text>
                    <Text style={styles.text}>Achieving 1 Day Streak!</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak1dayNotEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>1 Day Streak Badge</Text>
                    <Text style={styles.text}>Not Earned</Text>
                  </View>
                </View>
              )}
            </View>

            <View style={[styles.card, styles.shadowAndroid, styles.shadowIOS]}>
              {hasStreakSevenBadge ? (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak7daysEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>Earned Badge for</Text>
                    <Text style={styles.text}>Achieving 7 Day Streak!</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak7daysNotEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>7 Day Streak Badge</Text>
                    <Text style={styles.text}>Not Earned</Text>
                  </View>
                </View>
              )}
            </View>

            <View style={[styles.card, styles.shadowAndroid, styles.shadowIOS]}>
              {hasStreakThirtyBadge ? (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak30daysEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>Earned Badge for</Text>
                    <Text style={styles.text}>Achieving 30 Day Streak!</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak30daysNotEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>30 Day Streak Badge</Text>
                    <Text style={styles.text}>Not Earned</Text>
                  </View>
                </View>
              )}
            </View>

            <View style={[styles.card, styles.shadowAndroid, styles.shadowIOS]}>
              {hasStreakSixtyBadge ? (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak60daysEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>Earned Badge for</Text>
                    <Text style={styles.text}>Achieving 60 Day Streak!</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.cardInner}>
                  <Image
                    source={require("../../assets/streak60daysNotEarned.png")}
                    style={styles.image}
                  />
                  <View style={{ paddingTop: 15 }}>
                    <Text style={styles.text}>60 Day Streak Badge</Text>
                    <Text style={styles.text}>Not Earned</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const screenHeight = Platform.OS == "ios" ? 60 : 40;

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: 150,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 20,
    borderRadius: 30,
  },
  cardInner: {
    flexDirection: "row",
    gap: 20,
  },
  container: {
    width: "100%",
    paddingTop: screenHeight,
  },
  bottomContainer: {
    backgroundColor: "white",
    height: "70%",
    padding: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    width: 90,
    height: 90,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colours.text,
  },
  // android shadow
  shadowAndroid: {
    elevation: 10,
    shadowOffset: {
      height: 1,
    },
    shadowColor: "#171717",
  },
  // ios shadow
  shadowIOS: {
    shadowColor: "#777779",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  text: {
    fontSize: 20,
    color: colours.text,
  },
});

export default AchievementScreen;
