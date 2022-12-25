import React, { useEffect, useState, useRef } from "react";
import {
  Text, TextInput, TouchableOpacity, View, Image, StyleSheet, ImageBackground, Platform
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
import { showMessage } from 'react-native-flash-message';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import withConnect from "./withConnect";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SCREENS, VALIDATE_FORM } from "../../../Constant";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import { Images } from "../../../Assets";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import _ from 'lodash';
import { GoogleSignin, statusCodes, User } from "@react-native-google-signin/google-signin";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
import { colors } from "react-native-elements";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, FORGET_PASSWORD } = SCREENS;
const Login = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [isSecure, setSecure] = useState(true);
  const [userData, setUserData] = useState<ResponseModel>(user);
  // const [error,setError] = useState({email:'', password:''})
  const [isSuccess, setSuccess] = useState(false);
  var emailRef = useRef();
  var passwordRef = useRef();
  {/************************Validation State's***************************/ }
  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);
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
  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    if (pass === '') {
      setErrorPassword('Please enter password');
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('A Incorrect Password has been entered');
    } else {
      setErrorPassword(null);
    }
  };


  const validate = () => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('Please enter Email ID.');
      flag = false;
    }
    if (password === '') {
      setErrorPassword('Please enter Password.');
      flag = false;
    }
    return flag;
  };
  {/************************Validation State's***************************/ }

  // useEffect(() => {
  //     setUserData(user)
  // }, [user])

  // useEffect(() => {
  //     Alert.alert(JSON.stringify(userData?.name))
  // }, [userData])


  useEffect(() => {
    navigation.addListener('focus', () => {

      setEmail('')

      console.log("myemail", Email, password)
    });
  }, [])

  // const validation = () => {
  //   var message = ""
  //   if (_.isEmpty(Email.trim())) {
  //     message = VALIDATE_FORM.EMAIL
  //   } else if (_.isEmpty(password.trim())) {
  //     message = VALIDATE_FORM.PASSWORD
  //   }
  //   if (!_.isEmpty(message)) {
  //     showMessage({ message: message, type: 'danger' })
  //     return false
  //   }
  //   return true
  // }

  const userLogin = async () => {
    if (validate()) {
      const body = new FormData()
      body.append('username', Email.trim())
      body.append('password', password.trim())
      loginAction({ body: body, isLogin: true, navigation: navigation.navigate(MAIN) })
    }
  }


  // const userLogin = () => {


  //   if (email.trim() === '') {
  //     showMessage({message: 'please enter mobile Email Address', type: 'danger'});
  //               // setError({...error,'email':'please enter Email Address'})
  //     return;
  //   } else if (password.trim() === '') {
  //     showMessage({message: , type:'danger'});
  //     // setError({...error,'password':'A Incorrect Password has been entered'})
  //     return;
  //   }
  //   const body = {
  //     email: "orangemantra@gmail.com",
  //     password: "123456",
  //   };
  //   // loginAction(body)

  //   AsyncStorage.setItem("user", JSON.stringify(body));
  //   navigation.navigate(MAIN);
  //   setSuccess(!isSuccess)
  // };
  const register = () => {
    navigation.navigate(REGISTER);
  };


  //====================== For Apple ========================//
  const loginWithApple = async () => {
    console.warn('Beginning Apple Authentication');

    // start a login request
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log('appleAuthRequestResponse', appleAuthRequestResponse);

      const {
        user: newUser,
        email,
        nonce,
        identityToken,
        realUserStatus /* etc */,
      } = appleAuthRequestResponse;

      let user = newUser;

      // fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
      //     updateCredentialStateForUser(`Error: ${error.code}`),
      // );

      if (identityToken) {
        // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
        console.log(nonce, identityToken);
      } else {
        // no token - failed sign-in?
      }

      if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
        console.log("I'm a real person!");
      }

      console.warn(`Apple Authentication Completed, ${user}, ${email}`);
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        console.warn('User canceled Apple Sign in.');
      } else {
        console.error(error);
      }
    }
  }

  //====================== For Google ========================//
  const loginWithGoogle = async () => {
    try {
      await signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //await callback(userInfo);
      console.log('user info ====>', userInfo)

    } catch (error) {
      console.log('Error in response ===> ', error)
      // @ts-ignore
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else { // @ts-ignore
        if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else { // @ts-ignore
          if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Error in signout ===>', error)
    }
  };

  //====================== For Facebook ========================//
  const getInfoFromToken = (token: string) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name, email',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error: Error, user: any) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          console.log('result:', user);
          // navigation.navigate(MAIN);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const loginWithFacebook = () => {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['public_profile']).then(
      (login: any) => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      (error: any) => {
        console.log('Login fail with error: ' + error);
      },
    );
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
        <NavHeader bc={'transparent'} isBackHide />
      </ImageBackground>
      <View style={styles.user1}>
        <Image source={Images.user1} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"LOG IN"}</Text>
          <View>
            <View style={styles.secureView}>
              <Image resizeMode='contain' source={Images.email} style={styles.email} />
              <TextInput
                style={styles.secureInput}
                // ref={emailRef}
                // value={email}
                placeholder={"Enter Email Address "}
                placeholderTextColor={COLORS.WHITE_NORMAL}
                maxLength={100}
                keyboardType={'email-address'}
                onChangeText={txt => {
                  _emailvalidate(txt), setEmail(txt)
                }}
              />
              {/* <Text style={{color:"red"}} >{error.email}</Text>                       */}
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
          </View>
          <View style={styles.secureView1}>
            <Image source={Images.lock} style={styles.lock} />
            <TextInput
              style={styles.secureInput}
              ref={passwordRef}
              placeholder={"Enter Password"}
              placeholderTextColor={COLORS.WHITE}
              secureTextEntry={isSecure}
              selectionColor={COLORS.WHITE}
              onChangeText={txt => {
                _passwordvalidate(txt), setPassword(txt)
              }}
              maxLength={40}
            />
            <TouchableOpacity
              style={styles.secure}
              onPress={() => passwordVisibleAction()}
            >
              <Ionicons
                name={isSecure ? "eye-off" : "eye"}
                size={25}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
          </View>
          {errorPassword != null ? (
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
                {errorPassword}
              </Text>
            </View>
          ) : null}
          {/* <Text style={styles.text}>A Incorrect Password has been entered</Text> */}
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end' }}>
            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate(FORGET_PASSWORD)}
            >{`Forgot Password?`}</Text>
          </View>
          <LinearGradient
            style={styles.button}
            useAngle={true}
            angle={20}
            locations={[0, .3, .8, 1]}
            colors={COLORS.GRAD}>
            <TouchableOpacity onPress={() => userLogin()}>
              <Text style={styles.buttonText}>{`Login`}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View>
            <Text style={styles.social}>{`and By Social account`}</Text>
            <View style={styles.google1}>
              <TouchableOpacity onPress={() => loginWithFacebook()}>
                <LinearGradient
                  style={{ flexDirection: "row", borderRadius: 25, width: 170 }}
                  useAngle={true}
                  angle={20}
                  locations={[0, .3, .8, 1]}
                  colors={COLORS.GRAD}
                >
                  <Text style={styles.buttonText1}>{`Facebook`}</Text>
                  <Image source={Images.facebook} style={styles.faceimage} />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { loginWithGoogle() }}>
                <LinearGradient
                  style={{ flexDirection: "row", borderRadius: 25, width: 170 }}
                  useAngle={true}
                  angle={20}
                  locations={[0, .3, .8, 1]}
                  colors={COLORS.GRAD}
                >
                  <Text style={styles.buttonText1}>{`Google Plus`}</Text>
                  <Image source={Images.google} style={styles.faceimage} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>


          {Platform.OS === 'ios' &&


            <AppleButton
              style={styles.appleButton}

              cornerRadius={5}
              buttonStyle={AppleButton.Style.BLACK}
              buttonType={AppleButton.Type.SIGN_IN}
              onPress={() => loginWithApple()}
            />


          }

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
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
  },
  text: {
    color: COLORS.TEXT,
    fontSize: responsiveFontSize(2.4),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_22,
    marginVertical: METRICS.MAR_5,
  },
  signup: {
    color: COLORS.YEL,
    fontSize: responsiveFontSize(2.2),
    marginHorizontal: METRICS.MAR_5,
    fontFamily: FONT_FAMILIES.BOLD,
  },
  account: {
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.2),
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  goimage: {
    height: 30,
    width: 25,
    marginLeft: "15%",
    marginTop: "6%",
  },
  faceimage: {
    height: 30,
    width: 30,
    marginRight: METRICS.MAR_10,
    alignSelf: 'center'
    // marginRight:-20
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: "8%",
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginBottom: responsiveHeight(2)
  },

  user1: {
    position: "absolute",
    top: "17%",
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
    fontSize: responsiveFontSize(3.5),
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  social: {
    fontSize: responsiveFontSize(2.8),
    textAlign: "center",
    paddingTop: "7%",
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
    marginTop: -60,
  },
  forgotPassword: {
    fontSize: responsiveFontSize(2.3),
    color: COLORS.WHITE_NORMAL,
    textAlign: "right",
    marginVertical: METRICS.MAR_15,
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
    marginTop: METRICS.MAR_20,
    height: responsiveHeight(7),
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  button4: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_20,
    height: responsiveHeight(6),
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
    fontSize: responsiveFontSize(2.2),
    color: COLORS.GRADIENT,
    marginHorizontal: METRICS.MAR_15,
    marginVertical: METRICS.MAR_10,
    flex: 1,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  google1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: METRICS.MAR_20,
    marginVertical: METRICS.MAR_10,
  },
  google: {
    // height:50,
    // width:50,
    marginHorizontal: METRICS.MAR_25,
  },
  appleButton: {
    // width: 200,
    height: 40,
    marginHorizontal: 20,
    // borderRadius: 20,
    padding: METRICS.MAR_10,
    // borderWidth: 1,
    // backgroundColor: COLORS.YEL,
    // marginTop: METRICS.MAR_17
  }
});
