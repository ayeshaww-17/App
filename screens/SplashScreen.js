import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const Splash = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('NewsScreen')
      }, 2000)
    },
      []);
    return (
      <View>
        <Text style={styles.splash}>NEWS FEEDS</Text>
        
      </View>
    )
  }