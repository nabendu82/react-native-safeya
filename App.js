import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Pressable, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from './components/CustomButton'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const FirstScreen = ({ navigation }) => {
  const onPressHandler = () => navigation.navigate('Second');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>First Screen</Text>
      <CustomButton pressFunction={onPressHandler} title='Go Second'/>
    </View>
  )
}

const SecondScreen = ({ navigation }) => {
  const onPressHandler = () => navigation.goBack();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Second Screen</Text>
      <CustomButton pressFunction={onPressHandler} title='Go First'/>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='First' component={FirstScreen} options={{ header: () => null }}/>
        <Stack.Screen name='Second' component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 40, fontWeight: 'bold', margin: 10 },
})

export default App