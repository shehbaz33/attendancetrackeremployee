import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import AppLoading  from 'expo-app-loading';
import fetchFonts from './useFonts';
import Login from './screens/Login';
import Home from './screens/Home';
import colors from './assets/colors/colors';
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoaded,setDataLoaded] = useState(false)
  const loadFont = async () => {
    await fetchFonts();
  }
  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setDataLoaded(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
