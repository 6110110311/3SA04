import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipcodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import Contact from './screen/contact';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {ZipcodeScreen} />
        <Stack.Screen name = "Weather" component = {WeatherScreen} />
        <Stack.Screen name = "Contact" component = {Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

