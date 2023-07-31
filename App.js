import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/context";
import InshortTabs from "./components/InshortTabs";
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';

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
function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    
    <View
      style={{
       // darkTheme,
        ...styles.container,
       // backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <InshortTabs />
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
      
    </Context>
  );
};