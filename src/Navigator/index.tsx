import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, Text, Alert, BackHandler } from "react-native";
import Splash from "../Component/Splash";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";
import Dashboard from "../Component/Dashboard";
import LeftMenu from '../Component/LeftMenu';
import transits from '../Component/Transit';
import calender from '../Component/Calender';
import subscription from '../Component/Subscription';
import ForgotPassword from "../Component/Auth/ForgotPassword";
import createPassword from "../Component/Auth/createPassword";
import astrology from '../Component/AstrologySelection';
import oneLast from '../Component/Auth/onelast';
import keypoint from '../Component/Dashboard/Keypoint';
import remedie from '../Component/Retrograde/Remedies';
import Lunar from '../Component/Calender/Lunar Calender';
import fullmoon from '../Component/Fullmoon';
import Payment from '../Component/Payment';
import houseplacement from '../Component/Houseplacement';
import retrograde from '../Component/Retrograde';
import Faq from '../Component/Faq';
import Contact from '../Component/Contact';
// import profile from '../Component/Profile';
// import myprofile from '../Component/Myprofile';
import Myprofile from '../Component/MyProfile';
import Privacypolicy from '../Component/Privacypolicy';
import planetplacement from '../Component/Planetplacement';
// import Onelast from "../Component/Auth/One";
import otp from '../Component/Auth/otp';
import * as Constnt from "../Constant";
// import retropanetdetails from '../Component/RetrogradePlanet/Retrogetplanetdetail'
import tranitinformation from "../Component/Transit/TransitInformation"
import horoscope from "../Component/Horoscope";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { COLORS, FONT_FAMILIES } from "../Configration";
import { Images } from "../Assets";
const navigationRef = React.createRef()
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const { SPLASH, LOGIN, REGISTER, DASHBOARD, MAIN,FORGET_PASSWORD,OTP,CREATE_PASSWORD,ONE_LAST,ASTROLOGY,
  TABS, HOROSCOPE,TRANSIT,CALENDER,SUBSCRIPTION,KEYPOINT,TRANSITINFORMATION,RETROGRADE,REMEDIES,FULLMOON,PLANET_PLACEMENT,HOUSE_PLACEMENT,LUNAR_CALENDER,PRIVACY_POLICY,FAQ ,MY_PROFILE,CONTACT,PAYMENT} = Constnt.SCREENS;

const Navigator = (props: any) => {
  //=======================================Use Effect =======================//
  React.useEffect(() => {
    function handleBackButton() {
      // @ts-ignore
      const routeInfo = navigationRef.current.getCurrentRoute();
      if (
        routeInfo.name.toLowerCase() === LOGIN ||
        routeInfo.name.toLowerCase() === DASHBOARD
      ) {
        exitApp();
      } else {
        // @ts-ignore
        if (navigationRef.current.canGoBack()) {
          // @ts-ignore
          navigationRef.current.goBack();
        }
      }
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, []);

  const exitApp = () => {
    Alert.alert(
      "Exit App",
      "Are You Sure You Want Exit?",
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  //========================Drawer Navigator ====================================//
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true, }}
        initialRouteName={TABS}
        drawerType={'back'}
        // drawerStyle={{ width: widthPercentageToDP(75) }}
        drawerContent={(props: any) => <LeftMenu {...props} />}>
        <Drawer.Screen
          name={TABS}
          component={Tabs}
          options={{
            headerShown: false,
            swipeEnabled: true,
            drawerLabel: 'Home',
          }}
        />
      </Drawer.Navigator>
    );
  };

  //=====================Tab Navigator =====================================//
  const tabScreenOptions = ({ route }: any) => ({
    tabBarShowLabel: false,
    tabBarStyle: {
      height: responsiveHeight(10),
      backgroundColor: COLORS.HEADER,
      borderColor: 'transparent',
    },

    
    tabBarIcon: (data: any) => {
      const { focused } = data;
      let iconName;
      let title;
      if (route.name === DASHBOARD) {
        iconName = Images.home2;
        title = 'Home';
      } else if (route.name === HOROSCOPE) {
        iconName = Images.horoscope;
        title = "Horoscopes";
      }else if (route.name === TRANSIT) {
        iconName = Images.transit;
        title = "Transits";
      }else if (route.name === CALENDER) {
        iconName = Images.calender;
        title = "Calender";
      }else if (route.name === SUBSCRIPTION) {
        iconName = Images.subscription;
        title = "Subscription";
      }
      return (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={iconName}
            style={{
              height: 30,
              width: 30,
              tintColor: focused ? COLORS.SIGNUP : COLORS.WHITE
             
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),fontFamily:FONT_FAMILIES.MEDIUM,
              color:  COLORS.WHITE_NORMAL,textAlign:"center"
            }}>
            {title}
          </Text>
        </View>
      );
    },
  });

  const Tabs = () => {
    return (
      <Tab.Navigator
        //backBehavior={}
        screenOptions={tabScreenOptions}
        defaultScreenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={DASHBOARD}
          component={Dashboard}
          options={{ headerShown: false }} />
        <Tab.Screen
          name={HOROSCOPE}
          component={horoscope}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={TRANSIT}
          component={transits}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={CALENDER}
          component={calender}
          options={{ headerShown: false }}
        />
         
        <Tab.Screen
          name={SUBSCRIPTION}
          component={subscription}
          options={{ headerShown: false }}
        />
         

      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator defaultScreenOptions={{ headerShown: false }}>
        <MainStack.Screen
          name={SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={REGISTER}
          component={Register}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={HOUSE_PLACEMENT}
          component={houseplacement}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={RETROGRADE}
          component={retrograde}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={MY_PROFILE}
          component={Myprofile}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={FAQ}
          component={Faq}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={PRIVACY_POLICY}
          component={Privacypolicy}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={FORGET_PASSWORD}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={OTP}
          component={otp}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={REMEDIES}
          component={remedie}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={CREATE_PASSWORD}
          component={createPassword}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={CONTACT}
          component={Contact}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={TRANSITINFORMATION}
          component={tranitinformation}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={PLANET_PLACEMENT}
          component={planetplacement}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ONE_LAST}
          component={oneLast}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={FULLMOON}
          component={fullmoon}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={DASHBOARD}
          component={Dashboard}
          options={{ headerShown: false }}
        />
 <MainStack.Screen
          name={ASTROLOGY}
          component={astrology}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={KEYPOINT}
          component={keypoint}
          options={{ headerShown: false }}
        />
         <MainStack.Screen
          name={LUNAR_CALENDER}
          component={Lunar}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={PAYMENT}
          component={Payment}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={MAIN}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
