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
  START_COORDS,END_COORDS
} from "../../../Configration";
import withConnect from "./withConnect";
import Modal from "react-native-modal";
import _ from 'lodash';
import { showMessage } from 'react-native-flash-message';
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {SCREENS,VALIDATE_FORM} from "../../../Constant";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import { Images } from "../../../Assets";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import { Colors } from "react-native-paper";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, LOGIN, CREATE_PASSWORD, ASTROLOGY,ONE_LAST } = SCREENS;
const createPassword = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isSecure1, setSecure1] = useState(true);
  const [isSecure2, setSecure2] = useState(true);
  const [isSecure3, setSecure3] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  // var userRef = useRef();
  // var pinRef = useRef();
  const refNew = useRef();
  const refConf = useRef();
  {/************************Validation State's***************************/ }
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const _passwordvalidate = pass => {
    var passwordRegex =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i;
    if (pass === '') {
      setErrorPassword('Please enter password');
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('Password must have at least 8 characters that  include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
      setErrorPassword(null);
    }
  };
  const _confirmPasswordvalidate = mail => {
    // var confirmPasswordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i;
    // if (mail === '') {
    //   setErrorConfirmPassword('Please enter confirm password');
    // } else if (!confirmPasswordRegex.test(mail)) {
    //   setErrorConfirmPassword('Please enter valid password');
    // }
    // //  else if (confirmPassword !== password) {
    // //   setErrorConfirmPassword('Password and confirm password do not match');
    // // }
    if(mail!=password){
      setErrorConfirmPassword('Password and Confirm password do not match.');
    }
    else {
      setErrorConfirmPassword(null);
    }
  };
  const validate = () => {
    let flag = true;
    if (password === '') {
      setErrorPassword('Please enter password');
      flag = false;
    }
    if (confirmPassword === '') {
      setErrorConfirmPassword('Please enter confirm password');
      flag = false;
    }
    return flag;
  };
  {/************************Validation State's***************************/ }

  useEffect(() => {
    navigation.addListener('focus', () => {
      setNewPassword('')
      setConfPassword('')
     
  });
  }, [])

  
//   const validation = () => {
//     var message = ""
//     if (_.isEmpty(newPassword.trim())) {
//         message = VALIDATE_FORM.PASSWORD
//     } else if (_.isEmpty(confPassword.trim())) {
//         message = VALIDATE_FORM.C_PASSWORD
  
//     if (!_.isEmpty(message)) {
//         showMessage({ message: message, type: 'danger' })
//         return false
//     }
//     return true
// }

  const userLogin = () => {
    navigation.navigate(LOGIN);
  };
  const register = () => {
    navigation.navigate(REGISTER);
  };
  const cross = () => {
    // navigation.navigate(CREATE_PASSWORD);
  };

  const account = () => {
    toggleModal();
    setTimeout(() => {
      navigation.navigate(ASTROLOGY);
    }, 100);
  };
  const passwordSecureAction = (index: number) => {
    if (index === 0) {
      setSecure1(!isSecure1);
    } else if (index === 1) {
      setSecure2(!isSecure2);
    } else {
      setSecure3(!isSecure3);
    }
  };

  // const passwordVisibleAction = () => {
  //   setSecure(!isSecure);
  // };
  // const passwordVisible = () => {
  //   setSecure(!isSecure);
  // };
  const toggleModal = () => {

    if (validate()) {
      const body = new FormData()
      body.append('username', newPassword.trim())
      body.append('password', confPassword.trim())
      // body.append('confirmpassword', pass.trim())
      loginAction({ body: body, isLogin: true, })
      setModalVisible(!isModalVisible);
  }
//   if(newPassword.trim() === ''){
//     showMessage({message:"please enter New password",type:"danger"})
//     // setError({...error,'voucherCount':'please enter voucher digit'})
//     return;
// }else if(confPassword.trim() === ''){
//     showMessage({message:"please enter Confirm Password",type:"danger"})
//     return;
// }
    
  };

  return (
    <ImageBackground style={styles.container} source={Images.backscreen}>
      <ImageBackground
        style={styles.Image}
        resizeMode="cover"
        source={Images.chakra}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.back} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.user1}>
        <Image source={Images.forgot} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"CREATE NEW PASSWORD"}</Text>
          <Text style={styles.headingText2}>
            {"Enter your new password below,"}
            {"\n"}
            {"we're just being extra safe"}
          </Text>

          {/* <View style={styles.secureView}>
            <Image source={Images.email} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              placeholder={"Enter Email Address "}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              keyboardType={"phone-pad"}
              onChangeText={setUserId}
            />
          </View> */}
          <View style={styles.secureView2}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              ref={refNew}
              returnKeyType="next"
              maxLength={30}
              placeholder={"Enter Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure1}
              onSubmitEditing={() => refNew.current.focus()}
              selectionColor={COLORS.WHITE}
              // onChangeText={setNewPassword}
              onChangeText={txt => {
                _passwordvalidate(txt), setPassword(txt)
              }}
            />
            <TouchableOpacity
              style={styles.secure}
              onPress={() => passwordSecureAction(0)}
            >
              <Ionicons
                name={isSecure1 ? "eye-off" : "eye"}
                size={25}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
          </View>
          {errorPassword != null ? (
              <View
                style={{
                  // height: 20,
                  width: 370,
                  // backgroundColor:'green',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  marginHorizontal: 20
                }}>
                <Text
                  style={{
                    color: COLORS.WHITE_NORMAL,
                    fontSize: 17,
                    marginLeft: 5,
                    // marginRight:10,
                    marginTop:6,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                  }}>
                  {errorPassword}
                </Text>
              </View>
            ) : null}
          {/* <Text style={styles.text}>
            Password must have at least 8 characters that include at least 1
            lowercase character, 1 uppercase characters, 1 number, and 1 special
            character in (!@#$%^&*)
          </Text> */}
          <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              ref={refConf}
              returnKeyType="next"
              maxLength={30}
              placeholder={"Confirm Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure2}
              selectionColor={COLORS.WHITE}
              // onChangeText={setConfPassword}
              onChangeText={txt => {
                _confirmPasswordvalidate(txt),setConfirmPassword(txt)
              }}
            />
            <TouchableOpacity
              style={styles.secure}
              onPress={() => passwordSecureAction(1)}
            >
              <Ionicons
                name={isSecure2 ? "eye-off" : "eye"}
                size={25}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
          </View>
          {errorConfirmPassword != null ? (
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
                    color: COLORS.WHITE_NORMAL,
                    fontSize: 17,
                    marginTop:6,
                    marginLeft: 10,
                    fontFamily: FONT_FAMILIES.MEDIUM
                  }}>
                  {errorConfirmPassword}
                </Text>
              </View>
            ) : null}
          {/* <Text style={styles.text}>
            Password and confirm password do not match.
          </Text> */}
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
            <TouchableOpacity onPress={() => toggleModal()}>
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

        <Modal isVisible={isModalVisible}>
          <View
            style={{
              // flex: 1,
              backgroundColor: COLORS.NORMAL_BLAC,
              height: "70%",
              width: "95%",
              marginBottom: "30%",
              marginTop: "40%",
              borderRadius: 15,
              marginHorizontal: METRICS.MAR_9,
              marginRight: 0,
            }}
          >
            <TouchableOpacity onPress={() => toggleModal()}>
              <Image source={Images.cross2} style={styles.cross} />
            </TouchableOpacity>
            <Text style={styles.reset}>Password reset successful</Text>
            <Text style={styles.suces}>
              Password reset has been done successfully
            </Text>
            <LinearGradient
              style={styles.buton1}
              start={START_COORDS
              
              }
              end={
                END_COORDS
              }
              // locations={[0.5,0.1,0.10]}
              colors={COLORS.GRAD}
            >
              <TouchableOpacity onPress={() => userLogin()}>
                <Text style={styles.buttonText}>{`Go To Login Page`}</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={styles.buton1}
              start={START_COORDS
              
              }
              end={
                END_COORDS
              }
              // locations={[0.5,0.1,0.10]}
              colors={COLORS.GRAD}
            >
              <TouchableOpacity onPress={() => account()}>
                <Text style={styles.buttonText}>{`Continue To Account`}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default withConnect(createPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2),
    marginLeft: "5%",
    marginRight: "5%",
    marginVertical: METRICS.MAR_10,
  },
  back: {
    marginVertical: METRICS.MAR_55,
    marginHorizontal: METRICS.MAR_16,
  },
  cross: {
    // height: "12%",
    // width: "20%",
    height: 16,
    width: 11,
    alignSelf: "flex-end",
    marginRight: METRICS.MAR_18,
    marginVertical: METRICS.MAR_14,
  },
  suces: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(3),
    textAlign: "center",
  },
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
  },
  reset: {
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(5),
    textAlign: "center",
    fontFamily: FONT_FAMILIES.DEMI,
    marginTop: "5%",
  },
  signup: {
    color: COLORS.YEL,
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
    // marginTop: "10%",
    // flex:1,
    margin:30,
    marginBottom: 0,
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
    marginVertical: METRICS.MAR_15,
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
    marginTop: -68,
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
    marginTop: METRICS.MAR_20,
    alignSelf: "center",
  },
  secureView2: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    height: METRICS.MAR_60,
    width: "90%",
    flex: 1,
    marginTop: METRICS.MAR_40,
    // padding:10,
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
    marginTop: 50,
    // padding:10,
    // margin:70,
    height: 60,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  buton1: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_40,
    height: 60,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: responsiveFontSize(3),
    color: COLORS.POP_UP,
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
