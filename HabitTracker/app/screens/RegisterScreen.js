import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../context/actions/authActions";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    dispatch(registerUser(username, password));
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
