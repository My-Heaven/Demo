import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './app/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentDetail from './app/StudentDetail';
import StudentProvider from './app/contexts/StudentProvider';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
  <NavigationContainer>
    <StudentProvider>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="StudentDetail" component={StudentDetail} />
      </Stack.Navigator>
     </StudentProvider> 
    </NavigationContainer>
  )
}

