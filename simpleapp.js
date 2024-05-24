import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./Screens/HomeScreen";
import EventsScreen from "./Screens/EventsScreen";
import ContactScreen from "./Screens/ContactScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
