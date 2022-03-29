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
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginStart,loginSuccess,loginError } from './redux/userSlice'
const Stack = createNativeStackNavigator();

function App() {
  const dispatch = useDispatch()
  const [dataLoaded,setDataLoaded] = useState(false)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
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
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        dispatch(loginSuccess(value))
      }
    } catch(e) {
      console.log(e)
    }
  }
  getData()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            !isLoggedIn ? (
              <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            ) : (
              <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default function Wrapper () {
  return (
    <Provider store={store}>
      <App/>
      <FlashMessage position="top"/>
    </Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
