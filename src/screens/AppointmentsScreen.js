// src/screens/AppointmentsScreen.js
import { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";

export default function AppointmentsScreen() {
  const { appointments, cancelAppointment } = useContext(AppContext);

  if (appointments.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No upcoming appointments.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.provider.name}</Text>
              <Text>{item.time}</Text>
            </View>
            <Button
              title="Cancel"
              color="red"
              onPress={() => cancelAppointment(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: { fontSize: 16, fontWeight: "bold" },
});
