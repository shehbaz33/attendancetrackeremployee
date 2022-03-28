import { StyleSheet, Text, View, SafeAreaView,StatusBar,Image,TextInput } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

const Login = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View>
                <Image
                style={styles.image}
                source={require('../assets/Grouphome.png')}
                />
            </View>
            <View>
                <Text>Welcome</Text>
                <Text>You have been missed</Text>
            </View>
            <View>
                <TextInput
                style={styles.textInput1}
                placeholder='+919920805299'
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent:'center',
    },
    image:{
        width: 242,
        height: 182,
        marginBottom:20
    },
    textInput1:{
        padding: 10,
        color:'#000000',
        backgroundColor:'#ffffff',
        borderRadius:10,
        height: 45,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        fontSize:18,
        fontFamily:'DMSans-Regular'
    }
})