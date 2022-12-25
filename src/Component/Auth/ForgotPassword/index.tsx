import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  COLORS,
  FONT_SIZES,
  METRICS,
  FONT_FAMILIES,
  START_COORDS, END_COORDS
} from "../../../Configration";
import withConnect from "./withConnect";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {SCREENS,VALIDATE_FORM} from "../../../Constant";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import { Images } from "../../../Assets";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import _ from 'lodash';
import { showMessage } from 'react-native-flash-message';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, OTP } = SCREENS;
const ForgotPassword = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [isSecure, setSecure] = useState(true);
  
  const [userData, setUserData] = useState<ResponseModel>(user);

  var emailRef = useRef();
  var pinRef = useRef();
  {/************************Validation State's***************************/ }
  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === '') {
      setErrorEmail('Please enter Email ID');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('Please enter valid Email ID');
    } else {
      setErrorEmail(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('Please enter Email ID');
      flag = false;
    }
    return flag;
  };
  {/************************Validation State's***************************/ }
  const forgotPassword = async() => {

    if (validate()) {
      const body = new FormData()
      body.append('username', Email.trim())
    
      loginAction({ body: body, isLogin: true, navigation:  navigation.navigate(OTP) })
  }
  };
//   const validation = () => {
//     var message = ""
//     if (_.isEmpty(email.trim())) {
//         message = VALIDATE_FORM.EMAIL
//     } 
//     if (!_.isEmpty(message)) {
//         showMessage({ message: message, type: 'danger' })
//         return false
//     }
//     return true
// }
  const register = () => {
    navigation.navigate(REGISTER);
  };

  const passwordVisibleAction = () => {
    setSecure(!isSecure);
  };

  return (
    <ImageBackground style={styles.container} source={Images.backscreen}>
      <ImageBackground
        style={styles.Image}
        resizeMode="cover"
        source={Images.chakra}
      >
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.back} />
        </TouchableOpacity> */}
        <NavHeader bc={'transparent'} isBack />
      </ImageBackground>
      <View style={styles.user1}>
        <Image source={Images.forgot} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"FORGOT YOUR PASSWORD?"}</Text>
          <Text style={styles.headingText2}>
            {"Enter your Email Address and we will"}
            {"\n"}
            {"send you an OTP to reset your password"}
          </Text>

          <View style={styles.secureView}>
            <Image source={Images.email} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              ref={emailRef}
              placeholder={"Enter Email Address "}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={100}
              keyboardType={"email-address"}
              onChangeText={txt => {
                _emailvalidate(txt), setEmail(txt)
              }}
            />
          </View>
          {errorEmail != null ? (
              <View
                style={{
                  height: 30,
                  width: 370,
                  // backgroundColor:'green',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginHorizontal: 20
                }}>
                <Text
                  style={{
                    color: COLORS.TEXT,
                    fontSize: 17,
                    marginLeft: 10,
                    marginTop:6,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                  }}>
                  {errorEmail}
                </Text>
              </View>
            ) : null}
          {/* <Text style={styles.text}>Please enter valid Email ID</Text> */}
          <LinearGradient
            style={styles.button}
            start={START_COORDS

            }
            end={
              END_COORDS
            }
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >

            <TouchableOpacity onPress={() => forgotPassword()}>
              <Text style={styles.buttonText}>{`Reset Password`}</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.footer}>
            <Text style={styles.account}>{`Don't have an account?`}</Text>
            <TouchableOpacity onPress={() => register()}>
              <Text style={styles.signup}>{`Signup`}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};

export default withConnect(ForgotPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
  },
  text: {
    color: COLORS.TEXT,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2),
    marginHorizontal: METRICS.MAR_22,
    marginVertical: METRICS.MAR_20,
  },
  signup: {
    color: COLORS.SIGNUP,
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: METRICS.MAR_5,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  account: {
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.5),
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  goimage: {
    height: 50,
    width: 45,
    marginLeft: "10%",
    marginRight: 0,
  },
  faceimage: {
    height: 50,
    width: 45,
    marginLeft: "-5%",
    // marginRight:-20
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: "15%",
    marginBottom: 0,
  },
  back: {
    marginVertical: METRICS.MAR_55,
    marginHorizontal: METRICS.MAR_16,
  },
  user1: {
    position: "absolute",
    top: "19%",
    backgroundColor: COLORS.BLACK_TRANS,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 30,
  },

  email: {
    marginVertical: METRICS.MAR_18,
    marginHorizontal: METRICS.MAR_19,
    height: METRICS.MAR_19,
    width: METRICS.MAR_25,
  },
  lock: {
    marginVertical: METRICS.MAR_18,
    marginHorizontal: METRICS.MAR_19,
    height: METRICS.MAR_25,
    width: METRICS.MAR_25,
  },

  headingText: {
    fontSize: responsiveFontSize(3),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  headingText2: {
    fontSize: responsiveFontSize(2.5),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  social: {
    fontSize: responsiveFontSize(3),
    textAlign: "center",
    paddingTop: "15%",
    color: COLORS.WHITE_NORMAL,
    //  fontFamily:FONT_FAMILIES.MEDIUM
  },

  textInput: {
    paddingHorizontal: METRICS.MAR_12,
    color: COLORS.WHITE_NORMAL,
    height: METRICS.MAR_50,
    // fontFamily: FONT_FAMILIES.Segoe_UI,
    fontSize: responsiveFontSize(2.5),
  },
  secure: {
    position: "absolute",
    top: 18,
    right: 10,
  },
  user: {
    alignSelf: "center",
    marginTop: -70,
  },
  forgotPassword: {
    fontSize: responsiveFontSize(2),
    color: COLORS.WHITE_NORMAL,
    textAlign: "right",
    marginVertical: METRICS.MAR_35,
    marginRight: METRICS.MAR_20,
    textDecorationLine: "underline",
  },
  secureView: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    height: METRICS.MAR_60,
    width: "90%",
    marginTop: METRICS.MAR_60,
    alignSelf: "center",
  },
  secureView1: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    height: METRICS.MAR_60,
    width: "90%",
    flex: 1,
    marginTop: METRICS.MAR_10,
    alignSelf: "center",
  },
  secureInput: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,
    flex: 1,
  },
  button: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_81,
    height: 60,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: responsiveFontSize(3),
    color: COLORS.BLACK_LOGIN,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  button1: {
    borderRadius: 25,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_10,
    height: 50,
    width: 170,
    flexDirection: "row",
    // justifyContent: "center",
    // alignSelf: "center",
  },
  buttonText1: {
    fontSize: responsiveFontSize(3),
    color: COLORS.GRADIENT,
    marginHorizontal: METRICS.MAR_15,
    marginVertical: METRICS.MAR_10,

    // textAlign: "center",
    fontFamily: FONT_FAMILIES.REGULAR,
  },
  facebook: {
    //    height:50,
    //    width:50
  },
  google1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: METRICS.MAR_15,
    marginRight: METRICS.MAR_15,
    marginVertical: METRICS.MAR_10,
  },
  google: {
    // height:50,
    // width:50,
    marginHorizontal: METRICS.MAR_25,
  },
});
