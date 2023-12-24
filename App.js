import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Farm from './image1';
import Wild from './wild';
import Water from './water';
import Bird from './bird';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ title: 'Animal Card' }}
          initialParams={{ msg: 'Hello from main navigator' }}
          />
        <Stack.Screen name="Pet Animals" component={Farm}/>
        <Stack.Screen name="Wild Animals" component={Wild}/>
        <Stack.Screen name="Bird Animals" component={Bird}/>
        <Stack.Screen name="Water Animals" component={Water}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
