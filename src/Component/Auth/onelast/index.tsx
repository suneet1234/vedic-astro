
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
  END_COORDS, START_COORDS
} from "../../../Configration";
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector';
// import GetLocation from 'react-native-get-location'

import withConnect from "./withConnect";

import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Constant from "../../../Constant";
import Modal from "react-native-modal";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import { Images } from "../../../Assets";

import { CheckBox, colors } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../../ReuableComponent/Loader";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
import moment from "moment";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER, FORGET_PASSWORD, LOGIN, ONE_LAST, ASTROLOGY } =
  Constant.SCREENS;
const Login = (props: any) => {
  const { navigation, loginAction, user, loading } = props;
  const [colour, setColour] = useState('');
  const[image,setIamge] = useState('');
  const [selectedButton,setSelectedButton] = useState('');
  const [userid, setUserId] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  // const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState<CountryCode>('');
  const [region, setRegion] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [myModalVisible, setmyModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [birthplace, setBirthPlace] = useState("");
  const refName = useRef();
  const refDate = useRef();
  const refTime = useRef();
  const refCountry = useRef();

  const [country, setCountry] = useState<Country>(null);
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  // const [withCallingCodeButton, setWithCallingCodeButton] =
  //   useState<boolean>(true);
  // const [withFlagButton, setWithFlagButton] = useState<boolean>(true);
  // const [withFlag, setWithFlag] = useState<boolean>(true);
  // const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(true);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(true);



  {/************************Validation State's***************************/ }
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);
  // const [date, setDate] = useState('');
  const [errorDate, setErrorDate] = useState(null);
  // const [time, setTime] = useState('');
  const [errorTime, setErrorTime] = useState(null);
  const [place, setPlace] = useState('');
  const [errorPlace, setErrorPlace] = useState(null);
  const [isSelected, setSelected] = useState("male");
  const [errorGender, setErrorGender] = useState(null);
  const [location, setLocation] = useState("");
  const [errorLocation, setErrorLocation] = useState(null);
  const [value, setValue] = useState(null);
  const [errorTopic, setErrorTopic] = useState(null);
  const _topicvalidate = tpc => {
    console.log(tpc);
    if (tpc === null) {
      setErrorTopic('Please choose one Topic');
    } else {
      setErrorTopic(null);
    }
  };
  // const _gendervlidate = gen => {
  //     if (gen === '') {
  //         setErrorPlace('Please enter gender');
  //     } else {
  //         setErrorPlace(null);
  //     }
  // };
  const _namevalidate = nme => {
    var nameRegex =
      /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/i;
    if (nme === '') {
      setErrorName('Please enter name');
    } else if (!nameRegex.test(nme)) {
      setErrorName('Please enter valid name');
    } else {
      setErrorName(null);
    }
  };
  const _datevalidate = dte => {
    var dateRegex =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i;
    if (dte === '') {
      setErrorDate('Please enter date');
    } else if (!dateRegex.test(dte)) {
      setErrorDate('Please enter valid date');
    } else {
      setErrorDate(null);
    }
  };
  const _timevalidate = tme => {
    var timeRegex =
      /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/i;
    if (tme === '') {
      setErrorTime('Please enter time');
    } else if (!timeRegex.test(tme)) {
      setErrorTime('Please enter valid time');
    } else {
      setErrorTime(null);
    }
  };

  const _placealidate = ple => {
    var placeRegex =
      /[A-Za-z0-9'\.\-\s\,]/i;
    if (ple === '') {
      setErrorPlace('Please enter place');
    } else if (!placeRegex.test(ple)) {
      setErrorPlace('Please enter valid place');
    } else {
      setErrorPlace(null);
    }
  };


  const _locationvlidate = loc => {
    var locationRegex =
      /[A-Za-z0-9'\.\-\s\,]/i;
    if (loc === '') {
      setErrorLocation('Please enter location');
    } else if (!locationRegex.test(loc)) {
      setErrorLocation('Please enter valid location');
    } else {
      setErrorLocation(null);
    }
  };
  const validate = () => {
    let flag = true;
    if (name === '') {
      setErrorName('*Please enter name.');
      flag = false;
    }
    if (date == null) {
      setErrorDate('*Please enter date.');
      flag = false;
    }
    // if (place === '') {
    //   setErrorPlace('*Please enter place.');
    //   flag = false;
    // }
    if (time == null) {
      setErrorTime('*Please enter time.');
      flag = false;
    }
    // if (isSelected === "") {
    //   setErrorGender('*Please choose gender.');
    //   flag = false;
    // }
    // if (location === '') {
    //   setErrorLocation('*Please enter location.');
    //   flag = false;
    // }
    // if (value === null) {
    //   setErrorTopic('*Please choose Astrology');
    //   flag = false;
    // }

    return flag;
  };
  {/************************Validation State's***************************/ }
  const onSelect = (country: Country) => {
    console.log(country);
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const showDatePicker = () => {
    
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  const handleConfirm = (date) => {
    setDate(date);
    // errorDate();
    setErrorDate(null);
    // setTime(time);
    hideDatePicker();

  };



  const showTimePicker = () => {
    
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };


  const handleConfirm1 = (Time) => {
    setTime(Time);
    // errorDate();
    setErrorTime(null);
    // setTime(time);
    hideTimePicker();

  };
  const toggleModal = () => {
  
    setModalVisible(!isModalVisible);
    
  };

  const usrLogin = () => {
  
    if(validate()){
         toggleModal();
    }
    
  };
  const astrology = () => {
    toggleModal();
    setTimeout(() => {
      navigation.navigate(ASTROLOGY);
    }, 100);
  };
  // selectCountry =() => {
  //   setState(true);
  // };

  // selectRegion = ()  => {
  //   setState(false);
  // };
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
        <Image source={Images.register} style={styles.user} />

        <KeyboardAwareScrollView>
          <Text style={styles.headingText}>{"ONE LAST THING"}</Text>

          <Text style={{color:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.MEDIUM,textAlign:"center",fontSize:19,paddingHorizontal:10,marginTop:10}}>To create a personalized birth chart for accurate insights and astrological readings, our app will need your place, date & Time of your birth</Text>
          <View style={styles.secureView}>
            <Image source={Images.name} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              placeholder={"Name"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={refName}
              keyboardType={"default"}
              // onChangeText={setUserId}
              onChangeText={txt => {
                _namevalidate(txt), setName(txt)
              }}
            />
          </View>
          {errorName != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}>
                {errorName}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity style={styles.secureView1} onPress={ showDatePicker}  >
            <Image source={Images.birth} style={styles.email1} />
            <Text  style={styles.secureInput8}>  {date ? moment(date).format('DD-MM-YYYY ') : "Birth Date"}</Text>
            {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Date"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={refDate}
              keyboardType={"phone-pad"}
              //   onChangeText={showDatePicker}
            /> */}
            <DateTimePickerModal
              // style={styles.secureInput}
              ref={refDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>



          {errorDate != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}>
                {errorDate}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity style={styles.secureView1} onPress={ showTimePicker}   >
            <Image source={Images.birthtime} style={styles.email4} />
            <Text style={styles.secureInput9}>{time ? moment(time).format("HH:MM A") : "Birth Time"}</Text>
            {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Date"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={refDate}
              keyboardType={"phone-pad"}
              //   onChangeText={showDatePicker}
            /> */}
            <DateTimePickerModal
              // style={styles.secureInput}
              ref={refTime}
              isVisible={isTimePickerVisible}
              mode='time'

              onConfirm={handleConfirm1}
              onCancel={hideTimePicker}
            />
          </TouchableOpacity>




          {errorTime != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}>
                {errorTime}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity style={styles.secureView1} >
            <Image source={Images.location} style={styles.email1} />
            <Text style={styles.secureInput9}>{`Birth Place`}</Text>
            {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Place"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={refDate}
              keyboardType={'default'}
              //   onChangeText={showDatePicker}
            /> */}
             {/* <CountryPicker
                {...{
                  countryCode,
                  withFilter,
                  
                  // withCountryNameButton,
                  // withCallingCodeButton,
                  // withFlagButton,
                  withAlphaFilter,
                  withCallingCode,
                  // withEmoji,
                  onSelect,
                  // containerButtonStyle: {
                  //   borderWidth: 1,
                  //   borderBottomColor: COLORS.GRAY,
                  //   borderTopColor: 'transparent',
                  //   borderLeftColor: 'transparent',
                  //   borderRightColor: 'transparent',
                  //   marginBottom: METRICS.MAR_6,
                  // },
                }}
              /> */}
            
           

          </TouchableOpacity>
          {/* {errorPlace != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  // fontFamily: FONT_FAMILIES.MEDIUM,
                }}>
                {errorPlace}
              </Text>
            </View>
          ) : null} */}
          <TouchableOpacity style={styles.secureView1}
            onPress={() => setmyModalVisible(true)}
          >
            <Image source={Images.gender} style={styles.email} />
            <Text style={styles.secureInput4}>{selectedButton === "" ? 'Gender at birth':selectedButton}</Text>
            {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Date"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={35}
              ref={refDate}
              keyboardType={"phone-pad"}
              //   onChangeText={showDatePicker}
            /> */}
            {/* <DateTimePickerModal
              // style={styles.secureInput}
              ref={refDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            /> */}
          </TouchableOpacity>

     
   {errorGender != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}>
                {errorGender}
              </Text>
            </View>
          ) : null} 

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
            <TouchableOpacity onPress={() => usrLogin()}>
              <Text style={styles.buttonText}>{`Done`}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </KeyboardAwareScrollView>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              // flex: 1,
              backgroundColor: COLORS.NORMAL_BLAC,
              height: "55%",
              width: "95%",
              marginBottom: "60%",
              marginTop: "50%",
              borderRadius: 15,
              marginHorizontal: METRICS.MAR_9,
              marginRight: 0,
            }}
          >
            <TouchableOpacity onPress={() => toggleModal()}>
              <Image source={Images.cross2} style={styles.cross} />
            </TouchableOpacity>
            <Text style={styles.reset}>Signup Successful !</Text>
            <Text style={styles.suces}>Eat.Read.Love Astrology</Text>
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
              <TouchableOpacity onPress={() => astrology()}>
                <Text style={styles.buttonText}>{`Continue`}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Modal>
        {/*************************************************/}

        <Modal
          animationType="slide"
          transparent={true}
          visible={myModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!myModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.chooseGender}>
                <Text style={styles.chooseGenderText} >{`Choose Gender`}</Text>
              </View>
            
              <View style={{
                 flex: 0.9, flexDirection: "row", 
                 width:230,
                //  marginTop: 40,
                //  backgroundColor:'green',
                 alignItems: "center",
                 justifyContent: 'space-between', 
                  }}>
                <TouchableOpacity onPress={() => setIamge('Male')}>
                  <View style={{ 
                    backgroundColor: COLORS.MED,
                     height:image === 'Male' ? 87: 72, 
                     width:image === 'Male' ? 87: 72,
                     borderRadius: image === 'Male' ? 44: 40,
                       alignItems: "center",
                       justifyContent: "center", 
                      //  marginRight: 70, 
                       }}>
                    <View style={{ height: 70, width: 70, borderRadius: 45, borderWidth: 2, backgroundColor: COLORS.MALE, alignItems: "center", justifyContent: "center" }}>
                      <Image source={Images.male} />
                    </View>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() => setIamge('Female')}>
                  <View style={{ 
                    backgroundColor: COLORS.MED,
                    height:image === 'Female' ? 87: 72, 
                    width:image === 'Female' ? 87: 72,
                    borderRadius: image === 'Female' ? 44:40,
                      alignItems: "center", 
                      justifyContent: "center", }}>
                    <View style={{ height: 70, width: 70, borderRadius: 45, borderWidth: 2, backgroundColor: COLORS.MALE, alignItems: "center", justifyContent: "center" }}>
                      <Image source={Images.girl} />
                    </View>
                  </View>
                </TouchableOpacity>
                {/* </View>  */}
              </View>
              <View style={styles.last}>
                <LinearGradient
                  style={styles.buttonn}
                  useAngle={true}
                  angle={20}
                  locations={[0, .3, .8, 1]}
                  colors={COLORS.GRAD}>
                  <TouchableOpacity onPress={() =>{setmyModalVisible(!myModalVisible)}}>
                    <Text style={styles.buttonnnText}>{`Cancel`}</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  style={styles.buttonn}
                  useAngle={true}
                  angle={20}
                  locations={[0, .3, .8, 1]}
                  colors={COLORS.GRAD}>
                  <TouchableOpacity onPress={() => {setSelectedButton(image),setmyModalVisible(!myModalVisible)}}>
                    <Text style={styles.buttonnnText}>{`Set`}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              {/* <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setmyModalVisible(!myModalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </Modal>

        {/*************************************** */}
      </View>
    </ImageBackground>
  );
};

export default withConnect(Login);

const styles = StyleSheet.create({
  femailView: {
    height: 70,
    width: 70,
    // backgroundColor:'red',
    borderRadius: 70 / 2,
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // maleView: {
  //   height: 70,
  //   width: 70,
  //   // backgroundColor:'red',
  //   borderRadius: 70 / 2,
  //   borderWidth: 1,
  //   color: selectedButton ? "black" : "grey",
  //   borderColor: COLORS.BORDER_COLOR,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  buttonn: {
    borderRadius: 50,
    // backgroundColor: COLORS.GRAY,
    // marginTop: METRICS.MAR_10,
    // marginLeft: 10,
    height: 50,
    width: 125,
    justifyContent: "center",
    // alignSelf: "center",
  },
  buttonnnText: {
    fontSize: 20,
    color: COLORS.BLACK_LOGIN,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  last: {
    height: 65,
    width: 270,
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  genderImage: {
    height: 110,
    width: 250,
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chooseGenderText: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 25
  },
  chooseGender: {
    height: 40,
    width: 350,
    // backgroundColor:'green',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    // backgroundColor: COLORS.BACK
  },
  modalView: {
    height: 250,
    width: 360,
    // margin: 20,
    backgroundColor: COLORS.DASHBOARD,
    // backgroundColor:'orange',
    borderRadius: 10,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  container: {
    flex: 1,
  },
  Image: {
    width: "100%",
    height: "80%",
    // position: "absolute",
    paddingBottom: "20%",
  },
  buton1: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: 20,
    height: 60,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  suces: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    textAlign: "center",
    fontSize: responsiveFontSize(3),
    marginVertical: METRICS.MAR_25,
  },
  back: {
    marginVertical: METRICS.MAR_55,
    marginHorizontal: METRICS.MAR_16,
  },
  checkt: {
    flexDirection: "row",
    //  marginHorizontal:METRICS.MAR_10,
    marginVertical: METRICS.MAR_20,
  },

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
  reset: {
    color: COLORS.SIGNUP,
    fontSize: responsiveFontSize(5),
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginTop: "10%",
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
    // flex:1
    // height: METRICS.MAR_19,
    // width: METRICS.MAR_25,
  },
  email4: {
    marginVertical: METRICS.MAR_20,
    marginHorizontal: METRICS.MAR_19,
    // flex:1
    // height: METRICS.MAR_19,
    // width: METRICS.MAR_25,
  },
  email1: {
    marginVertical: METRICS.MAR_19,
    marginHorizontal: METRICS.MAR_19,
    // flex:1
    // height: METRICS.MAR_19,
    // width: METRICS.MAR_25,
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
    marginTop: -60,
  },
  cross: {
    // height:"20%",
    // width:"8%",
    height: 16,
    width: 11,
    alignSelf: "flex-end",
    marginRight: METRICS.MAR_18,
    marginVertical: METRICS.MAR_14,
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
    marginTop: METRICS.MAR_10,
    alignSelf: "center",
  },
  //   secureView1: {
  //     borderRadius: 5,
  //     borderWidth: 1,
  //     flexDirection: "row",
  //     borderColor: COLORS.BORDER_COLOR,
  //     height: METRICS.MAR_60,
  //     width: "90%",
  //     flex:1,
  //     marginTop: METRICS.MAR_10,
  //     alignSelf: "center",
  //   },
  secureInput: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,

    flex: 1,
  },
  secureInput4: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,
    marginVertical: METRICS.MAR_16,
    // flex: 1,
  },
  secureInput8: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,
    // marginVertical: METRICS.MAR_20,
    marginLeft:-10,
    textAlign:"center",
    alignSelf:"center"

    // flex: 1,
  },
  secureInput9: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,
    marginVertical: METRICS.MAR_20,
    // flex: 1,
  },
  button: {
    borderRadius: 30,
    // backgroundColor: COLORS.GRAY,
    marginTop: 30,
    height: 60,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: responsiveFontSize(3),
    color: COLORS.POP,
    textAlign: "center",
    //  marginTop:"-5%",
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

