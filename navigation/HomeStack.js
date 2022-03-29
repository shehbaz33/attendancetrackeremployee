import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import Attendance from '../screens/Attendance';
import Status from '../screens/Status';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutSuccess } from '../redux/userSlice'
import colors from '../assets/colors/colors'
import { useDispatch } from 'react-redux';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const handleLogout = async() => {
      console.log('Logged out')
      dispatch(logoutSuccess())
      await AsyncStorage.clear();
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{color:colors.accents}}>
            Home
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>
            <Text>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Status")}>
            <Text>Status</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

export const HomeStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Attendance" component={Attendance} options={{headerShown:false}} />
      <Stack.Screen name="Status" component={Status} options={{headerShown:false}} />
    </Stack.Navigator>
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