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
  END_COORDS,START_COORDS
} from "../../../Configration";
import withConnect from "./withConnect";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { showMessage } from 'react-native-flash-message';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {SCREENS,VALIDATE_FORM} from "../../../Constant";
import OtpInputs from "react-native-otp-inputs";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import Clipboard from "@react-native-clipboard/clipboard";
import { Images } from "../../../Assets";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import _ from 'lodash';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, CREATE_PASSWORD } = SCREENS;
const Login = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [userid, setUserId] = useState("");
  const [otp1, setOtp1] = useState("");
  const [isSecure, setSecure] = useState(true);
  const [pin, setPin] = useState("");
  const [userData, setUserData] = useState<ResponseModel>(user);
  const otpRef = useRef();
  var userRef = useRef();
  var pinRef = useRef();

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     setOtp1('')
   
  // });
  // }, [])

  
//   const validation = () => {
//     var message = ""
//     if (_.isEmpty(Otp1.trim())) {
//         message = VALIDATE_FORM.OTP
//     } 
//     if (!_.isEmpty(message)) {
//         showMessage({ message: message, type: 'danger' })
//         return false
//     }
//     return true
// }
  const otp = () => {

  //   if (validation()) {
  //     const body = new FormData()
  //     body.append('username', otp1.trim())
      
  //     loginAction({ body: body, isLogin: true, navigation:  navigation.navigate(CREATE_PASSWORD)})
  // }
  navigation.navigate(CREATE_PASSWORD)
  };
  const register = () => {
    navigation.navigate(REGISTER);
  };

  const handleChange = () => {};

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.back} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.user1}>
        <Image source={Images.forgot} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"RESET PASSWORD"}</Text>
          <Text style={styles.headingText2}>{"Verification Code"}</Text>
          <Text style={styles.headingText3}>
            {`We have sent you a verification code to`}
            {"\n"}
            {`your registered email ID`}
          </Text>

          <View style={{ alignItems: "center", marginTop: METRICS.MAR_20 }}>
            <OtpInputs
              clearTextOnFocus
              handleChange={handleChange}
              keyboardType={"phone-pad"}
              numberOfInputs={6}
              ref={otpRef}
              selectionColor={COLORS.WHITE}
              inputStyles={styles.input}
              inputContainerStyles={styles.inputContainer}
              style={styles.dot}
              selectTextOnFocus={false}
              autofillFromClipboard
            />
          </View>
          <TouchableOpacity style={styles.New}>
            <Image source={Images.timer} />
            <Text style={styles.timer}>00:30</Text>
          </TouchableOpacity>
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
            <TouchableOpacity onPress={() => otp()}>
              <Text style={styles.buttonText}>{`Done`}</Text>
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

export default withConnect(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timer: {
    color: COLORS.WHITE_NORMAL,
    marginHorizontal: METRICS.MAR_5,
  },
  New: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "6%",
    marginTop: "-5%",
    //  textAlign:"right"
  },
  back: {
    marginVertical: METRICS.MAR_55,
    marginHorizontal: METRICS.MAR_16,
  },
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
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
    marginTop: "20%",
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
  dot: {
    // flex: 1,
    flexDirection: "row",
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
    fontSize: responsiveFontSize(3.5),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  headingText2: {
    fontSize: responsiveFontSize(3),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  headingText3: {
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
    height: METRICS.MAR_50,
  },
  button: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_50,
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
  input: {
    color: COLORS.WHITE_NORMAL,
    lineHeight: METRICS.MAR_35,
    textAlign: "center",
    fontSize: responsiveFontSize(3),
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  inputContainer: {
    // backgroundColor: COLORS.GRAY,
    borderRadius: METRICS.MAR_9,
    marginHorizontal: METRICS.MAR_10,
    height: 50,
    width: responsiveWidth(10),
    borderWidth: 1,
    borderColor: COLORS.YEL,
    textAlign: "center",
    marginVertical: METRICS.MAR_40,
    textAlignVertical: "center",
  },
});
