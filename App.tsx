/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../vedic-astrology-app/src/Redux/Store';
import Navigator from '../vedic-astrology-app/src/Navigator';
import { Platform, StatusBar, StyleSheet, View, Alert, BackHandler } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'rnative-splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import JailMonkey from 'jail-monkey';
import messaging from '@react-native-firebase/messaging';
import SharedManager from './src/Common/SharedManager.tsx';

const App = (props) => {
  SplashScreen.close({
    animationType: SplashScreen.animationType.scale,
    duration: 850,
    delay: 500,
  });

  useEffect(() => {
    requestUserPermission()
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '538661078427-tasmcvmg5gm2g7bb33mk6kbdtfmgvrq1.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      //accountName: '', // [Android] specifies an account name on the device that should be used

    });
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    // if (JailMonkey.isJailBroken()) {
    //   Alert.alert(
    //     "Error",
    //     'Your phone is customized. You are not eligible to access the app.',
    //     [{
    //       text: "Exit App",
    //       onPress: () => { BackHandler.exitApp(); },
    //     }
    //     ],
    //     {
    //       cancelable: false
    //     }

    //   );
    // }
  }, [])
  const requestUserPermission = async () => {

    messaging()
      .getToken()
      .then(fcmToken => {

        if (fcmToken) {
          console.log('FCM Token ===>', fcmToken)
          //@ts-ignore
          SharedManager.getInstance().setToken(fcmToken)
        } else {
          console.log('[FCMService] user does not have a device token');
        }
      })
      .catch(error => {
        console.log('[FCMService] getToken rejected ', error);
      });

  }

  return (
    <Provider store={store}>

      <View style={styles.container}>
        <Navigator />
        <FlashMessage
          type={'danger'}
          duration={5000}
          position={
            Platform.OS === 'ios'
              ? 'top'
              : { top: StatusBar.currentHeight, left: 0, right: 0 }
          }
          floating={Platform.OS !== 'ios'}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
