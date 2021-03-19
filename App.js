import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Imports Components

import CityLibraryLogin from './src/container/CityLibraryLogin'


// Author Dhruv Panchani

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="CityLibraryLogin" component={CityLibraryLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;