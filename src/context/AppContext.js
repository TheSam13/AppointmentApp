// src/context/AppContext.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // Mock Providers
  const providers = [
    {
      id: "1",
      name: "Dr. Sarah Jenkins",
      category: "Therapist",
      availableSlots: ["10:00 AM", "01:00 PM", "03:00 PM"],
    },
    {
      id: "2",
      name: "Mike Ross",
      category: "Lawyer",
      availableSlots: ["09:00 AM", "11:00 AM", "04:00 PM"],
    },
    {
      id: "3",
      name: "Jane Doe",
      category: "Hair Stylist",
      availableSlots: ["12:00 PM", "02:00 PM", "05:00 PM"],
    },
  ];

  const login = async (username) => {
    setUser({ username });
    await AsyncStorage.setItem("user", username);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  const bookAppointment = (provider, time) => {
    const newAppointment = { id: Date.now().toString(), provider, time };
    setAppointments([...appointments, newAppointment]);
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        providers,
        appointments,
        bookAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
