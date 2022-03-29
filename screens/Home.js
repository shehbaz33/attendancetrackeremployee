import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import colors from '../assets/colors/colors'
import { logoutSuccess } from '../redux/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from './Notification'
import Profile from './Profile'
import Leaves from './Leaves'
import { AntDesign,Ionicons } from '@expo/vector-icons';


const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = async() => {
    console.log('Logged out')
    dispatch(logoutSuccess())
    await AsyncStorage.clear();
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Wrapper = () => { 
  const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer independent={true}>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notification' : 'notification';
            } else if (route.name === 'Leaves') {
              iconName = focused ? 'calendar' : 'calendar'
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.accents,
          tabBarInactiveTintColor: '#7D909B',
          tabBarActiveBackgroundColor: colors.background,
          tabBarItemStyle:{
            borderRadius:50,
            marginLeft:20,
            marginTop:22,
            marginBottom:22,
            marginRight:20,
            elevation:0
          },
          tabBarStyle:{height:100,elevation:0,borderColor:'white'},
          tabBarShowLabel:false,
      }
      )}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tab.Screen name="Leaves" component={Leaves} options={{headerShown:false}}  />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}  />
        <Tab.Screen name="Notification" component={Notification} options={{headerShown:false}}  />  
      </Tab.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    alignItems:'center',
    justifyContent:'center'
  }
})