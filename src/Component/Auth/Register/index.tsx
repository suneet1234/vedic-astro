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
  START_COORDS,
  END_COORDS,
} from "../../../Configration";
import withConnect from "./withConnect";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SCREENS, VALIDATE_FORM } from "../../../Constant";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import { Images } from "../../../Assets";
import { CheckBox } from "react-native-elements";
import _ from "lodash";
import { showMessage } from "react-native-flash-message";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, FORGET_PASSWORD, LOGIN, ONE_LAST, ASTROLOGY } = SCREENS;
const Login = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [userid, setUserId] = useState("");
  const [isSecure, setSecure] = useState(true);
  const [pin, setPin] = useState("");
  const [pass, confirmPass] = useState("");
  const [isPrivacy, setPrivacy] = useState(false);
  const [userData, setUserData] = useState<ResponseModel>(user);
  const [isSecure1, setSecure1] = useState(true);
  const [isSecure2, setSecure2] = useState(true);
  const [isSecure3, setSecure3] = useState(true);
  var userRef = useRef();
  var pinRef = useRef();

  // useEffect(() => {
  //     setUserData(user)
  // }, [user])

  // useEffect(() => {
  //     Alert.alert(JSON.stringify(userData?.name))
  // }, [userData])

  // const registerLogin = () => {
  //   const body = {
  //     email: "orangemantra@gmail.com",
  //     password: "123456",
  //     confirmpassword: "123456",
  //   };
  //   // loginAction(body)

  //   navigation.navigate(ONE_LAST);
  // };

  // const passwordVisibleAction = () => {
  //   setSecure(!isSecure);
  // };
  useEffect(() => {
    navigation.addListener("focus", () => {
      setUserId("");
      setPin("");
      confirmPass("");
    });
  }, []);
  {
    /************************Validation State's***************************/
  }
  const [Email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);

  const [checkbox, setCheckbox] = useState("");
  const [errorcheckbox, setErrorcheckbox] = useState(null);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const _emailvalidate = (mail) => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === "") {
      setErrorEmail("Please enter email");
    } else if (!emailRegex.test(mail)) {
      setErrorEmail("Please enter valid email");
    } else {
      setErrorEmail(null);
    }
  };
  const _passwordvalidate = (pass) => {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i;
    if (pass === "") {
      setErrorPassword("Please enter password");
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword(
        "Password must have at least 8 characters that  include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
      );
    } else {
      setErrorPassword(null);
    }
  };
  const _confirmPasswordvalidate = (mail) => {
    // var confirmPasswordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i;
    // if (mail === '') {
    //   setErrorConfirmPassword('Please enter confirm password');
    // }
    // else if (!confirmPasswordRegex.test(mail)) {
    //   setErrorConfirmPassword('Please enter valid password');
    // }
    // // else if (password !== confirmPassword) {
    // //   setErrorConfirmPassword('*Password and confirm password do not match.');
    // // }
    if (mail != password) {
      setErrorConfirmPassword("Password and Confirm Password do not match.");
    } else {
      setErrorConfirmPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    var message = "";
    if (Email === "") {
      setErrorEmail("Please Enter Email ID");
      flag = false;
    }
    if (password === "") {
      setErrorPassword("Please Enter Password");
      flag = false;
    }
    if (confirmPassword === "") {
      setErrorConfirmPassword("Please Enter Confirm Password");
      flag = false;
    }

    if (checkbox === 'isPrivacy') {
      setErrorcheckbox("Please Select Checkbox.");
      flag = false;
    }
    // if (isPrivacy === ''){
    //   message = VALIDATE_FORM.EMAIL
    // }

    return flag;
  };
  {
    /************************Validation State's***************************/
  }

  // const validation = () => {
  //     var message = ""
  //     if (_.isEmpty(userid.trim())) {
  //         message = VALIDATE_FORM.EMAIL
  //     } else if (_.isEmpty(pin.trim())) {
  //         message = VALIDATE_FORM.PASSWORD
  //     }else if (_.isEmpty(pass.trim())) {
  //       message = VALIDATE_FORM.C_PASSWORD
  //   }
  //     if (!_.isEmpty(message)) {
  //         showMessage({ message: message, type: 'danger' })
  //         return false
  //     }
  //     return true
  // }

  const registerLogin = async () => {
    if (validate()) {
      const body = new FormData();
      body.append("username", userid.trim());
      body.append("password", pin.trim());
      body.append("confirmpassword", pass.trim());
      // body.append("checkbox");
      loginAction({
        body: body,
        isLogin: true,
        navigation: navigation.navigate(ONE_LAST),
      });
    }
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

  const setPrivacyEnable = () => {
    setPrivacy(!isPrivacy);
    if(!isPrivacy ){
    setErrorcheckbox(null);
    }
    else {
      setErrorcheckbox("Please Select Checkbox.");
    }
  };

  return (
    <ImageBackground style={styles.container} source={Images.backscreen}>
      <ImageBackground
        style={styles.Image}
        resizeMode="cover"
        source={Images.chakra}
      ></ImageBackground>
      <View style={styles.user1}>
        <Image source={Images.register} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"REGISTRATION"}</Text>
          <View style={styles.secureView}>
            <Image source={Images.email} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              placeholder={"Enter Email Address "}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={userRef}
              keyboardType={"email-address"}
              // onChangeText={setUserId}
              onChangeText={(txt) => {
                _emailvalidate(txt), setEmail(txt);
              }}
            />
          </View>
          {errorEmail != null ? (
            <View
              style={{
                height: 30,
                width: 370,
                // backgroundColor:'green',
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.TEXT,
                  fontSize: 17,
                  marginLeft: 10,
                  fontFamily:FONT_FAMILIES.MEDIUM
                  // fontFamily: 'Roboto-Regular',
                }}
              >
                {errorEmail}
              </Text>
            </View>
          ) : null}

          <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              ref={pinRef}
              placeholder={"Enter Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure1}
              keyboardType={'default'}
              selectionColor={COLORS.WHITE}
              // onChangeText={setPin}
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

          {/* <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              // ref={refNew}
              returnKeyType="next"
              maxLength={30}
              placeholder={"Enter Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure1}
              onSubmitEditing={() => refNew.current.focus()}
              selectionColor={COLORS.WHITE}
              // onChangeText={setNewPassword}
              onChangeText={(txt) => {
                _passwordvalidate(txt), setPassword(txt);
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
          </View> */}
          {errorPassword != null ? (
            <View
              style={{
                height: 30,
                width: 370,
                // backgroundColor:'green',
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.TEXT,
                  fontSize: 17,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorPassword}
              </Text>
            </View>
          ) : null}
          <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              ref={pinRef}
              placeholder={"Confirm Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure2}
              keyboardType={'default'}
              selectionColor={COLORS.WHITE}
              // onChangeText={confirmPass}
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

          {/* <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              // ref={refNew}
              returnKeyType="next"
              maxLength={30}
              placeholder={"Enter Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure2}
              keyboardType="default"
              // onSubmitEditing={() => refNew.current.focus()}
              selectionColor={COLORS.WHITE}
              // onChangeText={setNewPassword}
              onChangeText={(txt) => {
                _passwordvalidate(txt), setPassword(txt);
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
          </View> */}
          {errorConfirmPassword != null ? (
            <View
              style={{
                height: 30,
                width: 370,
                // backgroundColor:'green',
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.TEXT,
                  fontSize: 17,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorConfirmPassword}
              </Text>
            </View>
          ) : null}



          <View style={styles.checkt}>
            <CheckBox
              checkedColor={COLORS.MED}
              onPress={setPrivacyEnable}
              // value={isPrivacy}
              containerStyle={{
                alignSelf: "flex-start",
                borderWidth: 0,
                marginBottom: 20,
                borderColor: COLORS.MED,
              }}
              // title={<Text style={styles.termsMessage}>{' I Agree to Eat.Read.Love Astrology Terms & Services,Privacy'}</Text>}
              checked={isPrivacy}
            />


            {/* <Image  source={Images.checkbox} style={styles.check}/> */}

            <View style={{ padding: 2 }}>
              <Text style={styles.terms}>
                {`I Agree to Eat.Read.Love Astrology `}{" "}
                <Text
                  onPress={() => {
                    console.log("terms &");
                  }}
                >{`Terms & Services`}</Text>
                ,
                <Text
                  onPress={() => {
                    console.log(`privacy`);
                  }}
                >{`Privacy`}</Text>
              </Text>
              {/* <TouchableOpacity>
              <Text style={styles.terms}>{`Terms & Services,Privacy`}</Text>
            </TouchableOpacity> */}
            </View>
          </View>
          {/* <Text style={styles.forgotPassword} onPress={() => navigation.navigate(FORGET_PASSWORD)}>{`Forgot Password?`}</Text> */}

          {errorcheckbox != null ? (
            <View
              style={{
                height: 20,
                width: 370,
                // backgroundColor:'green',
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 13,
                  marginLeft: 10,
                  // fontFamily: 'Roboto-Regular',
                }}
              >
                {errorcheckbox}
              </Text>
            </View>
          ) : null}


          <LinearGradient
            style={styles.button}
            start={START_COORDS}
            end={END_COORDS}
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >
            <TouchableOpacity onPress={() => registerLogin()}>
              <Text style={styles.buttonText}>{`Next`}</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.footer}>
            <Text style={styles.account}>{`Already have an account?`}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
              <Text style={styles.signup}>{`Login`}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};

export default withConnect(Login);

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
  checkt: {
    flexDirection: "row",
    //  marginHorizontal:METRICS.MAR_10,
    marginVertical: METRICS.MAR_20,
  },
  //   termsMessage: {
  //     color:COLORS.WHITE_NORMAL,
  //     fontFamily: FONT_FAMILIES.MEDIUM,
  //     fontSize:responsiveFontSize(2.3),
  //     textAlignVertical: 'center',
  //     // marginVertical:METRICS.MAR_18

  // },
  terms: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2.3),
    //  textAlign:"left",
    marginLeft: "-3%",
    marginTop: "3%",
  },
  check: {
    marginTop: METRICS.MAR_8,
  },
  signup: {
    color: COLORS.YEL,
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: METRICS.MAR_5,
    fontFamily: FONT_FAMILIES.BOLD,
  },
  account: {
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.5),
  },
  goimage: {
    // height:50,
    // width:45,
    marginLeft: "15%",
    marginTop: "8%",
  },
  faceimage: {
    // height:50,
    // width:45,
    // flex:1,
    marginLeft: "3%",
    marginTop: "8%",
    // marginRight:-20
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    marginBottom: 0,
    fontFamily: FONT_FAMILIES.MEDIUM,
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
    fontSize: responsiveFontSize(3.5),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  social: {
    fontSize: responsiveFontSize(3),
    textAlign: "center",
    paddingTop: "11%",
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
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
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  secureView: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    height: METRICS.MAR_60,
    width: "90%",
    marginTop: METRICS.MAR_32,
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
    marginTop: METRICS.MAR_25,
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
    fontFamily: FONT_FAMILIES.MEDIUM,
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
