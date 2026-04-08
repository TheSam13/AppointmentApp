// src/screens/ProviderScreen.js
import { useContext } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";

export default function ProviderScreen({ route, navigation }) {
  const { provider } = route.params;
  const { bookAppointment } = useContext(AppContext);

  const handleBooking = (time) => {
    bookAppointment(provider, time);
    Alert.alert(
      "Success",
      `Appointment booked with ${provider.name} at ${time}`,
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{provider.name}</Text>
      <Text style={styles.subtitle}>{provider.category}</Text>
      <Text style={styles.sectionTitle}>Available Slots:</Text>

      {provider.availableSlots.map((time, index) => (
        <View key={index} style={styles.slot}>
          <Text>{time}</Text>
          <Button title="Book" onPress={() => handleBooking(time)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "gray", marginBottom: 20 },
  sectionTitle: { fontSize: 18, marginBottom: 10 },
  slot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 5,
  },
});
