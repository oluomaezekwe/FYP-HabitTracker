import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { auth } from "../../api/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const textInputRef = useRef();

  const handleRegister = async () => {
    if (email && password) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log("Error registering account: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert(
        "Registration Unsuccessful",
        "Please enter a valid email and password greater than 6 characters"
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => textInputRef.current.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        ref={textInputRef}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleRegister}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="darkgrey"
        />
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={handleRegister}>
          <Text style={{ fontSize: 18 }}>Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    width: 250,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 12,
  },
  touchable: {
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 12,
    borderRadius: 12,
  },
});

export default RegisterScreen;
