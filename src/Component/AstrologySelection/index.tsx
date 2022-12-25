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
import { COLORS, FONT_SIZES, METRICS, FONT_FAMILIES, END_COORDS, START_COORDS } from "../../Configration";
import withConnect from "./withConnect";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Constant from "../../Constant";
import NavHeader from "../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../Model";
import { Images } from "../../Assets";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../ReuableComponent/Loader";


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, LOGIN, CREATE_PASSWORD } = Constant.SCREENS;
const Login = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isSecure1, setSecure1] = useState(true);
  const [isSecure2, setSecure2] = useState(true);
  const [isSecure3, setSecure3] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState('Vedic Astrology');

  var userRef = useRef();
  var pinRef = useRef();
  const refNew = useRef();
  const refConf = useRef();

  // useEffect(() => {
  //     setUserData(user)
  // }, [user])

  // useEffect(() => {
  //     Alert.alert(JSON.stringify(userData?.name))
  // }, [userData])

  const userLogin = () => {
    navigation.navigate(MAIN);
  };
  const register = () => {
    navigation.navigate(REGISTER);
  };
  const cross = () => {
    navigation.navigate(CREATE_PASSWORD);
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
    setModalVisible(!isModalVisible);
  };

  return (
    <ImageBackground style={styles.container} source={Images.backscreen}>

      <Image source={Images.half} style={styles.user} />
      <View style={{ height: 110, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.headingText}>Which Astrology</Text>
        <Text style={styles.headingText}>do You Follow</Text>
      </View>
      <View style={styles.signup}>
        <TouchableOpacity onPress={() => setSelectedButton('Vedic Astrology')}
          style={{
            backgroundColor: COLORS.POP_UP,
            borderRadius: 5,
            borderWidth: selectedButton === 'Vedic Astrology' ? 10 : 3,
            borderColor: COLORS.MED,
            height: "95%",
            width: "45%",
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.suces}>Vedic</Text>
          <Text style={styles.suces}>Astrology</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedButton('Western Astrology')}
          style={{
            backgroundColor: COLORS.POP_UP,
            borderRadius: 5,
            borderWidth: selectedButton === 'Western Astrology' ? 10 : 3,
            borderColor: COLORS.MED,
            height: "95%",
            width: "45%",
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.suces1}>Western</Text>
          <Text style={styles.suces1}>Astrology</Text>
        </TouchableOpacity>
      </View>
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
        <TouchableOpacity onPress={() => userLogin()}>
          <Text style={styles.buttonText}>{`Save`}</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.footer}>
        <Text
          style={styles.account}
        >{`You can later change your preferences from the profile`}</Text>
      </View>
    </ImageBackground>
  );
};

export default withConnect(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // cross: {
  //   backgroundColor: COLORS.POP_UP,
  //   borderRadius: 5,
  //   borderWidth: selectedButton === 'Male' ? 44 : 32,
  //   borderColor: COLORS.MED,
  //   height: "95%",
  //   width: "45%",
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  cross1: {
    backgroundColor: COLORS.MED,
    borderRadius: 5,
    height: "98%",
    width: "40%",
    justifyContent: 'center',
    alignItems: 'center'
    // marginRight: "5%",
    // marginLeft: "5%",
  },
  suces: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(3),
    // textAlign: "center",
    // marginTop: "20%",
  },
  suces1: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(3),
    // textAlign: "center",
    // marginTop: "20%",
  },
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
  },
  reset: {
    backgroundColor: COLORS.POP_UP,
    height: "85%",
    marginTop: "9%",
    width: "85%",
    alignSelf: "center",
  },
  reset1: {
    backgroundColor: COLORS.POP_UP,
    height: "85%",
    marginTop: "9%",
    width: "85%",
    alignSelf: "center",
  },
  signup: {
    flexDirection: "row",
    height: "30%",
    width: "90%",
    // backgroundColor: "white",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
    // marginVertical: METRICS.MAR_10,
  },
  account: {
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
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
    //    flexDirection:"row",
    alignSelf: "center",
    //    justifyContent:"space-between",
    marginTop: "2%",
    //    marginBottom:0
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
    fontSize: 36,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    // marginTop:20,
    fontFamily: FONT_FAMILIES.MEDIUM,
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
    //    resizeMode:"cover",
    height: "40%",
    width: "100%",
    //  marginTop:"1%",
    // flex:1
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
    marginTop: METRICS.MAR_40,
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
    marginTop: "5%",
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
