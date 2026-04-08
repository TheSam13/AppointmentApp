// src/screens/LoginScreen.js
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/AppContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BookIt</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button
        title="Login"
        onPress={() => login(username)}
        disabled={!username}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
