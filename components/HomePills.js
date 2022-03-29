import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const HomePills = () => {
  return (
    <View style={styles.container}>
      <Image
      style={{height:50,width:50}}
      source={require('../assets/plane.png')}
      />
    </View>
  )
}

export default HomePills

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: 80,
        height: 90,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
    }
})