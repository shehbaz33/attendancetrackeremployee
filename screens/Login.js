import { StyleSheet, Text, View, SafeAreaView,StatusBar,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import colors from '../assets/colors/colors'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import OTPTextView from 'react-native-otp-textinput'
import { showMessage, hideMessage } from "react-native-flash-message";

const Login = () => {
    const loginValidationSchema = yup.object().shape({
        phone: yup.string()
        .required('Please enter a phone number')
        .matches(
            /^([0]|\+91)?[789]\d{9}$/,
            'Phone number is not valid'
        )
      })
      const [hash,setHash] = useState()
      const [otp,setOTP] = useState()
      const [phone,setPhone] = useState()
      const [page,setPage] = useState(1)
      const [error,setError] = useState()
      const [userOTP,setUserOtp] = useState()

      const handlePage = () => {
          setPage(page + 1)
      }
      if(page > 2) {
          setPage(1)
      }
      const goBack = () => {
          setPage(page - 1)
      }

      const verifyOTP = async () => {
          const data = {
              hash:hash,
              otp:userOTP,
              phone:phone
          }
          await axios({
              method:'POST',
              url:'http://192.168.0.175:5000/api/v1/verifyotp',
              data:data,
              headers: {"Content-Type": "application/json"}
          }).then(res => console.log(res.data))
          .catch(err => {
            showMessage({
                message: err.response.data.message,
                type: "danger",
              });
          })
      }

  return (
    // err.response.data.message
    <SafeAreaView style={styles.container}>
        <View>
            <View>
                <Image
                style={styles.image}
                source={require('../assets/Grouphome.png')}
                />
            </View>
            <View style={styles.leftBorder}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.missed}>You have been missed</Text>
            </View>
            <Formik
            initialValues={{ phone:''}}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) => {
                const extension = '+91'
                const number = `${extension}${values.phone}`
                const phone = {
                    phone: number
                }
                await axios({
                    method: 'post',
                    url:'http://192.168.0.175:5000/api/v1/sendotp',
                    data: phone,
                    headers: {"Content-Type": "application/json"}
                   })
                   .then(res => {
                       setHash(res.data.hash)
                       setOTP(res.data.otp)
                       setPhone(number)
                       showMessage({
                        message: res.data.message,
                        type: "success",
                      });
                   })
                   .catch(err => 
                    setError(err.response.data.error.message)
                    )
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View>
                    {
                        page == 1 ? (
                        <>
                            <TextInput
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            style={styles.textInput1}
                            keyboardType="numeric"
                            placeholder='9920805299'
                            />
                            {
                                errors.phone &&
                                <Text style={{ fontSize: 12, color: 'red',fontFamily:'DMSans-Regular'}}>{errors.phone}</Text>
                            }
                            <TouchableOpacity style={!isValid ? styles.disabled : styles.button} onPress={() => {handleSubmit(),handlePage()}} disabled={!isValid}>
                                <Text style={styles.buttonText}>Get Otp</Text>
                            </TouchableOpacity>
                        </>
                        ) : null
                    }
                    {
                        page == 2 ? (
                        <>
                            <OTPTextView
                                inputCount={4}
                                keyboardType="numeric"
                                handleTextChange={(text) => setUserOtp(text)}
                                containerStyle={styles.textInputContainer}
                                tintColor={colors.accents}
                            />
                            <TouchableOpacity style={styles.button} onPress={() => verifyOTP()}>
                                <Text style={styles.buttonText}>Enter OTP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={goBack}>
                                <Text style={{color:colors.accents}}>Go back</Text>
                            </TouchableOpacity>
                        </>
                        ) : null
                    }
                </View>
            )}
            </Formik>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        alignItems:'center',
        justifyContent:'center'
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
        fontFamily:'DMSans-Regular',
        marginTop:20,
    },
    welcome:{
        fontSize:24,
        fontFamily:'DMSans-Bold'
    },
    missed:{
        fontFamily:'DMSans-Regular',
        fontSize:18,
    },
    leftBorder:{
        paddingLeft:10,
        borderLeftWidth:4,
        borderLeftColor:colors.accents
    },
    button:{
        padding: 10,
        backgroundColor:colors.button,
        borderRadius:10,
        alignItems:'center',
        marginTop:10
    },
    buttonText:{
        fontSize:16,
        fontFamily:'DMSans-Regular',
        color:'white'
    },
    disabled:{
        padding: 10,
        backgroundColor: 'gray',
        borderRadius:10,
        alignItems:'center',
        marginTop:10
    },
    textInputContainer:{
        marginBottom: 20
    },
})