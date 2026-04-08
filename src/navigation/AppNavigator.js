// src/navigation/AppNavigator.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import AppointmentsScreen from "../screens/AppointmentsScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProviderScreen from "../screens/ProviderScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Providers" component={HomeScreen} />
      <Stack.Screen
        name="ProviderDetails"
        component={ProviderScreen}
        options={{ title: "Book Appointment" }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="My Appointments" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useContext(AppContext);

  return (
    <NavigationContainer>
      {user ? (
        <MainTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
