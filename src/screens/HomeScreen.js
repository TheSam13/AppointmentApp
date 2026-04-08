// src/screens/HomeScreen.js
import { useContext } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { AppContext } from "../context/AppContext";

export default function HomeScreen({ navigation }) {
  const { providers, logout, user } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user?.username}</Text>
        <Button title="Logout" onPress={logout} color="red" />
      </View>
      <FlatList
        data={providers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProviderDetails", { provider: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: { fontSize: 18, fontWeight: "bold" },
  card: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: { fontSize: 16, fontWeight: "bold" },
});
