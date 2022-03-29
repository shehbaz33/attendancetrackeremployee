import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import colors from '../assets/colors/colors'
import { Entypo } from '@expo/vector-icons';

const HomeCard = ({navigation,top,middle,bottom,to}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
          <View style={styles.box}>
              <Image
              style={{width:62,height:70}}
              source={require('../assets/Groupattendance.png')}
              />
          </View>
          <View style={{justifyContent:'center',alignItems:'flex-start'}}>
            <Text style={[tw`text-sm`,{fontFamily:'DMSans-Regular',color:colors.textSecondary}]}>{top}</Text>
            <Text style={[tw`text-lg`,{fontFamily:'DMSans-Regular',color:colors.textPrimary}]}>{middle}</Text>
            <Text style={[tw`text-xs`,{color:colors.accents,fontFamily:'DMSans-Regular'}]}>{bottom}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <View style={styles.round}>
                <Entypo name="chevron-thin-right" size={18} color="white" />
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginLeft: 20,
        marginRight:20,
        height: 100,
        justifyContent:'center',
        borderRadius:10
    },
    box:{
        margin: 20,
        backgroundColor:colors.background,
        width: 80,
        borderRadius:10,
        alignItems: 'center',
        justifyContent:'center',
    },
    round:{
        backgroundColor:colors.button,
        padding: 10,
        borderRadius:50,
        height: 45,
        width: 45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        marginLeft:10
    }
})