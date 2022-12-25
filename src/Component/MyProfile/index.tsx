import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Modal,
  ImageBackground,
  Platform,
} from "react-native";
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  METRICS,
  START_COORDS,
  END_COORDS,
} from "../../Configration";
import "./withConnect";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox, RadioButton } from "react-native-paper";
import { SCREENS, VALIDATE_FORM } from "../../Constant";
import { showMessage } from "react-native-flash-message";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import LinearGradient from "react-native-linear-gradient";
// import { RadioButton } from 'react-native-paper';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import NavHeader from "../../ReuableComponent/NavHeader";
import { Images } from "../../Assets";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
const { height, width } = Dimensions.get("screen");
import ImagePicker from "react-native-image-crop-picker";
import { CheckBox } from "react-native-elements";
import _ from "lodash";
const Profile = (props: any) => {
  //   const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);

  // const { isSelected } = props

  const [checked, setChecked] = React.useState("");
  const refName = useRef();
  const refTime = useRef();
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("false");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    // { label: 'Perforred Astrology', value: 'Perforred Astrology', icon: () => <Image source={Images.world} style={styles.email} /> },
    {
      label: "Perforred Astrology",
      value: "Perforred Astrology",
      icon: () => <Image source={Images.world} style={styles.emailTwo} />,
    },
    {
      label: "Vadic Astrology",
      value: "Vadic Astrology",
      icon: () => <Image source={Images.world} style={styles.emailTwo} />,
    },
    {
      label: "Western Astrology",
      value: "Western Astrology",
      icon: () => <Image source={Images.world} style={styles.emailTwo} />,
    },
  ]);
  const [myimages, setMyImages] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const EditProfileScreen = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      setModalVisible(!modalVisible);
      console.log(image);
      setMyImages(image.path);
      console.log("paaaaaaaaaaath", image.path);
      console.log("&&&&&&&&&&&&&&&&&&&&&", myimages);
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    setErrorDate(null);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm1 = (time) => {
    setTime(time);
    setErrorTime(null);
    hideTimePicker();
  };

  //   const genderMale = () => {
  //     setMale(true);
  //   };
  const ChoosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      setModalVisible(!modalVisible);
      console.log(image);
      setMyImages(image.path);
      console.log("paaaaaaaaaaath", image.path);
      console.log("&&&&&&&&&&&&&&&&&&&&&", myimages);
    });
  };

  {
    /************************Validation State's***************************/
  }
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [date, setDate] = useState("");
  const [errorDate, setErrorDate] = useState(null);
  const [time, setTime] = useState("");
  const [errorTime, setErrorTime] = useState(null);
  const [place, setPlace] = useState("");
  const [errorPlace, setErrorPlace] = useState(null);
  const [isSelected, setSelected] = useState("male");
  const [errorGender, setErrorGender] = useState(null);
  const [location, setLocation] = useState("");
  const [errorLocation, setErrorLocation] = useState(null);
  const [value, setValue] = useState(null);

  const [errorTopic, setErrorTopic] = useState(null);
  const _topicvalidate = (tpc) => {
    console.log(tpc);
    if (tpc === null) {
      setErrorTopic("Please choose one Topic");
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
  const _namevalidate = (nme) => {
    var nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/i;
    if (nme === "") {
      setErrorName("Please enter name");
    } else if (!nameRegex.test(nme)) {
      setErrorName("Please enter valid name");
    } else {
      setErrorName(null);
    }
  };
  const _datevalidate = (dte) => {
    var dateRegex =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i;
    if (dte === "") {
      setErrorDate("Please enter date");
    } else if (!dateRegex.test(dte)) {
      setErrorDate("Please enter valid date");
    } else {
      setErrorDate(null);
    }
  };
  const _timevalidate = (tme) => {
    var timeRegex = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/i;
    if (tme === "") {
      setErrorTime("Please enter time");
    } else if (!timeRegex.test(tme)) {
      setErrorTime("Please enter valid time");
    } else {
      setErrorTime(null);
    }
  };

  const _placealidate = (ple) => {
    var placeRegex = /[A-Za-z0-9'\.\-\s\,]/i;
    if (ple === "") {
      setErrorPlace("Please enter place");
    } else if (!placeRegex.test(ple)) {
      setErrorPlace("Please enter valid place");
    } else {
      setErrorPlace(null);
    }
  };

  const _locationvlidate = (loc) => {
    var locationRegex = /[A-Za-z0-9'\.\-\s\,]/i;
    if (loc === "") {
      setErrorLocation("Please enter Location");
    } else if (!locationRegex.test(loc)) {
      setErrorLocation("Please enter valid Location");
    } else {
      setErrorLocation(null);
    }
  };
  const validate = () => {
    let flag = true;
    if (name === "") {
      setErrorName("Please enter Full Name.");
      flag = false;
    }
    if (date == null) {
      setErrorDate("Please enter Date.");
      flag = false;
    }
    if (place === "") {
      setErrorPlace("Please enter Place.");
      flag = false;
    }
    if (time == null) {
      setErrorTime("Please enter Time.");
      flag = false;
    }
    // if (isSelected === '') {
    //   setErrorGender('*Please choose gender.');
    //   flag = false;
    // }
    if (location === "") {
      setErrorLocation("Please enter Location.");
      flag = false;
    }
    if (value === null) {
      setErrorTopic("Please choose Astrology");
      flag = false;
    }

    return flag;
  };
  {
    /************************Validation State's***************************/
  }

  const userLogin = async () => {
    if (validate()) {
      // alert("Profile Completed");
    }
  };
  return (
    <View style={styles.container}>
      <NavHeader isBack simpleBack title={"My Profile"} isRightAction={true} />
      <ScrollView style={{ zIndex: 1 }}>
        <KeyboardAwareScrollView>
          <View style={{ flexDirection: "row", marginTop: 20, flex: 1 }}>
            <View style={styles.secureeView}>
              <Image source={Images.name} style={styles.email} />
              <TextInput
                style={styles.secureeInput}
                placeholder={"Name"}
                placeholderTextColor={COLORS.WHITE_NORMAL}
                maxLength={50}
                keyboardType={"default"}
                onChangeText={(txt) => {
                  _namevalidate(txt), setName(txt);
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.image}
              onPress={() => setModalVisible(true)}
            >
              {myimages == 0 ? (
                <View style={styles.imageee}>
                  <Image
                    resizeMode="contain"
                    source={Images.camera}
                    style={styles.imageViewOne}
                  />
                  <Image
                    resizeMode="contain"
                    source={Images.camera2}
                    style={{ marginTop: 5 }}
                  />
                </View>
              ) : (
                <ImageBackground
                  source={{
                    uri: myimages,
                  }}
                  style={{
                    height: METRICS.MAR_60,
                    width: width / 6.5,
                    borderRadius: 30,
                  }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  {/* <Image resizeMode='contain' source={Images.camera} style={styles.imageViewOne} /> */}
                  {/* <Image resizeMode='contain' source={Images.cameraTwo} style={styles.imageView} /> */}
                </ImageBackground>
              )}
              {/* <ImageBackground
                        source={{
                            uri: image,
                        }}
                        style={{
                            height: METRICS.MAR_60,
                            width: width / 6.5,
                            borderRadius: 30,
                        }}
                        imageStyle={{ borderRadius: 15 }}>
                        <Image resizeMode='contain' source={Images.camera} style={styles.imageViewOne} />
                        <Image resizeMode='contain' source={Images.cameraTwo} style={styles.imageView} />

                    </ImageBackground> */}
            </TouchableOpacity>
          </View>
          {errorName != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorName}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity  style={styles.secureView} onPress={showDatePicker}>
           
              <Image source={Images.birth} style={styles.email} />
              {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Date"}
            
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={50}
              keyboardType={"numeric"}
              onChangeText={txt => {
                _datevalidate(txt), setDate(txt)
              }}
            /> */}
              
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.WHITE_NORMAL,
                    textAlign: "center",
                    // marginLeft:-,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    // marginTop: 25,
                  }}
                >
                  {date ? moment(date).format("DD/MM/YYYY ") : "Birth Date"}
                </Text>
                <DateTimePickerModal
                  // style={styles.secureInput}
                  //   ref={refDate}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
             
         

            {/* <DateTimePickerModal
              // style={styles.secureInput}
              //   ref={refDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            /> */}
          </TouchableOpacity>

          {errorDate != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorDate}
              </Text>
            </View>
          ) : null}
        <TouchableOpacity  style={styles.secureView} onPress={showTimePicker}>
            <Image source={Images.birthtime} style={styles.email} />
            {/* <TextInput
              style={styles.secureInput}
              placeholder={"Birth Time"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={50}
              keyboardType={'numeric'}
              onChangeText={txt => {
                _timevalidate(txt), setTime(txt)
              }}
            /> */}
            
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.WHITE_NORMAL,
                  textAlign: "center",
                  alignSelf:"center"
                  // marginTop: 25,
                }}
              >
                {time ? moment().format("HH:MM a ") : "Birth Time"}
              </Text>
              <DateTimePickerModal
                // style={styles.secureInput}
                ref={refTime}
                isVisible={isTimePickerVisible}
                mode="time"
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
                justifyContent: "flex-end",
                alignItems: "flex-start",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.TEXT,
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorTime}
              </Text>
            </View>
          ) : null}
          <View style={styles.secureView}>
            <Image source={Images.location3} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              placeholder={"Birth Place"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={50}
              keyboardType={"default"}
              onChangeText={(txt) => {
                _placealidate(txt), setPlace(txt);
              }}
            />
          </View>
          {errorPlace != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorPlace}
              </Text>
            </View>
          ) : null}
          <View style={styles.gender}>
            <View style={styles.firstGender}>
              <Image source={Images.gender} style={styles.genderImage} />
              <Text style={styles.genderText}>{`Gender`}</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setSelected("male")}>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      borderColor: COLORS.WHITE_NORMAL,
                      borderWidth: 1,
                      backgroundColor:
                        isSelected === "male"
                          ? COLORS.WHITE_NORMAL
                          : "transparent",
                    }}
                  >
                    {/* <View style={{height:10,width:10,borderRadius:10}}></View> */}
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    marginLeft: 15,
                    marginTop: -5,
                  }}
                >
                  Male
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginLeft: 30 }}>
                <TouchableOpacity onPress={() => setSelected("female")}>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      borderColor: COLORS.WHITE_NORMAL,
                      borderWidth: 1,
                      backgroundColor:
                        isSelected === "female"
                          ? COLORS.WHITE_NORMAL
                          : "transparent",
                    }}
                  >
                    {/* <View style={{height:10,width:10,borderRadius:10}}></View> */}
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    marginLeft: 15,
                    marginTop: -5,
                  }}
                >
                  Female
                </Text>
              </View>
            </View>
            {/* <CheckBox 
                            title="Male"

                            containerStyle={{height:10,width:10,borderRadius:10}}
                            // checked={male}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            onPress={genderMale}
                            /> */}
            {/* <RadioButton.IOS
                                // uncheckedColor="white"
                                value="male"
                                status={checked === 'male' ? 'checked' : 'unchecked'}
                                color="#f6d876"
                                onPress={() => setChecked('male')}
                            />
                            <Text
                                style={styles.radioText}
                                onPress={() => setChecked('male')}>
                                Male
                            </Text>

                            <RadioButton.IOS
                                // uncheckedColor="white"
                                value="female"
                                color="#f6d876"
                                status={checked === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('female')}
                            />
                            <Text
                                style={styles.radioText}
                                onPress={() => setChecked('female')}>
                                Female
                            </Text> */}

            <View></View>
          </View>
          {/* {errorGender != null ? (
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
                  color: COLORS.TEXT,
                  fontSize: 18,
                  marginLeft: 10,
                  // fontFamily: 'Roboto-Regular',
                }}
              >
                {errorGender}
              </Text>
            </View>
          ) : null} */}

          <View style={styles.secureView}>
            <Image source={Images.location3} style={styles.email} />
            <TextInput
              style={styles.secureInput}
              placeholder={"Current Location"}
              placeholderTextColor={COLORS.WHITE_NORMAL}
              maxLength={50}
              keyboardType={"default"}
              onChangeText={(txt) => {
                _locationvlidate(txt), setLocation(txt);
              }}
            />
          </View>
          {errorLocation != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorLocation}
              </Text>
            </View>
          ) : null}
          <View style={styles.secureView}>
            {/* <Image source={Images.world} style={styles.email} /> */}
            <DropDownPicker
              // autoScroll={false}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={(txt) => {
                _topicvalidate(txt), setValue(txt);
              }}
              // setValue={setValue}
              setItems={setItems}
              placeholder={
                <Text style={{ marginLeft: 20 }}>
                   <Image source={Images.world} style={{}} />
                  {"     Select Astrology"}
                </Text>
              }
              dropDownDirection="BOTTOM"
              showTickIcon={false}
              ArrowUpIconComponent={({ style }) => (
                <Image source={Images.down} />
              )}
              ArrowDownIconComponent={({ style }) => (
                <Image source={Images.up} />
              )}
              arrowIconStyle={{
                width: 30,
                height: 30,
                // backgroundColor:'white',
              }}
              closeIconStyle={{
                width: 30,
                height: 30,
              }}
              placeholderStyle={{
                color: COLORS.WHITE_NORMAL,
                fontSize: FONT_SIZES.H2,
                fontFamily: FONT_FAMILIES.MEDIUM,
                // backgroundColor:'green',
                justifyContent: "space-between",
              }}
              style={{
                // backgroundColor: "crimson",
                height: 65,
                backgroundColor: COLORS.BACK,
                // borderRadius: 50,
                // alignSelf:"center",
                // marginTop:-5,
                alignItems: "center",
                borderWidth: 3,
                borderColor: COLORS.BACK,
                // backgroundColor: COLORS.BACK,
                width: width / 1.11,
              }}
              textStyle={{
                color: COLORS.WHITE_NORMAL,
                fontSize: FONT_SIZES.H2,
                fontFamily: FONT_FAMILIES.MEDIUM,
              }}
              containerStyle={{
                borderRadius: 5,
                borderWidth: 0.1,
                borderColor: COLORS.DASHBOARD,
                // backgroundColor:'green',
                // width: 300
                // borderBottColor: COLORS.BORDER_COLOR,
              }}
              dropDownContainerStyle={{
                backgroundColor: COLORS.BACK2,
              }}
            />
          </View>
          {errorTopic != null ? (
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
                  fontSize: 18,
                  marginLeft: 10,
                  fontFamily: FONT_FAMILIES.MEDIUM,
                }}
              >
                {errorTopic}
              </Text>
            </View>
          ) : null}
          <View style={styles.last}>
            <LinearGradient
              style={styles.button}
              useAngle={true}
              angle={20}
              locations={[0, 0.3, 0.8, 1]}
              colors={COLORS.GRAD}
            >
              <TouchableOpacity>
                <Text style={styles.buttonText}>{`Discard`}</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={styles.buttonn}
              useAngle={true}
              angle={20}
              locations={[0, 0.3, 0.8, 1]}
              colors={COLORS.GRAD}
            >
              <TouchableOpacity onPress={() => userLogin()}>
                <Text style={styles.buttonText}>{`Save`}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/*******************************************************/}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable onPress={() => EditProfileScreen()}>
                  <View style={styles.buttonView}>
                    <Text style={styles.modalText}>Take Photo</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => ChoosePhotoFromLibrary()}>
                  <View style={styles.buttonViewSecond}>
                    <Text style={styles.modalText}>Choose From Library</Text>
                  </View>
                </Pressable>

                <Pressable
                  style={[styles.button]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <View style={styles.buttonViewCancel}>
                    <Text style={styles.modalText}>Cancel</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/***************************************************************/}
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  downArrowView: {
    // height:height/5,
    // width:width/5
  },
  modalText: {
    fontSize: FONT_SIZES.H6,
    color: COLORS.BLACK_LOGIN,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  buttonViewCancel: {
    height: height / 15,
    width: width / 1,
    // backgroundColor: 'rgba(209,62,44,255)',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    // borderBottomWidth:1,
    // borderColor:'gray'
  },
  cancelView: {
    // backgroundColor:'green',
    marginTop: 10,
    width: width / 5,
    height: height / 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width / 1.31,
  },
  buttonViewSecond: {
    height: height / 15,
    width: width / 1,
    // backgroundColor: 'rgba(209,62,44,255)',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // borderRadius: 10,
    // borderBottomWidth: 1,
    borderColor: "gray",
  },
  buttonView: {
    height: height / 15,
    width: width / 1,
    // backgroundColor: 'rgba(209,62,44,255)',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    // borderBottomWidth: 1,
    // borderColor: 'gray'
  },
  centeredView: {
    height: height / 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalView: {
    height: height / 4,
    width: width / 1,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  radioText: {
    fontSize: FONT_SIZES.H3,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  imageViewOne: {
    height: METRICS.MAR_30,
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
  },
  imageView: {
    height: METRICS.MAR_10,
    width: "80%",
    marginTop: 4,
    alignSelf: "center",
  },
  secureInput4: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    // height: METRICS.MAR_50,
    marginVertical: METRICS.MAR_16,
    // flex: 1,
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
    // zIndex:10
  },
  last: {
    height: 120,
    width: "90%",
    // backgroundColor: 'orange',
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
    // :1,
    // flex: 1,
    justifyContent: "space-between",
  },
  buttonn: {
    borderRadius: 10,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_10,
    marginLeft: 10,
    height: responsiveHeight(7),
    width: 150,
    justifyContent: "center",
    // alignSelf: "center",
  },
  button: {
    borderRadius: 10,
    // backgroundColor: COLORS.GRAY,
    marginTop: METRICS.MAR_10,
    height: responsiveHeight(7),
    width: 150,
    justifyContent: "center",
    // alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.BLACK_LOGIN,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  gender: {
    height: 70,
    width: "90%",
    marginTop: METRICS.MAR_10,
    // backgroundColor: 'orange',
    alignSelf: "center",
  },
  firstGender: {
    height: METRICS.MAR_30,
    width: "100%",
    // backgroundColor: 'pink',
    alignItems: "center",
    flexDirection: "row",
  },
  secondGender: {
    height: METRICS.MAR_30,
    width: "100%",
    flexDirection: "row",
    // backgroundColor: 'green',
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 8,
  },
  secureView: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.BACK,
    height: 67,
    width: "90%",
    marginTop: METRICS.MAR_10,
    alignSelf: "center",
    zIndex: 10,
  },
  genderText: {
    color: COLORS.WHITE_NORMAL,
    fontSize: FONT_SIZES.H2,
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginLeft: 10,
  },
  secureInput: {
    color: COLORS.WHITE_NORMAL,
    fontSize: FONT_SIZES.H2,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // marginTop:-5
    // height: METRICS.MAR_50,
    // flex: 1,
  },
  secureeView: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.BORDER_COLOR,
    height: 67,
    width: "70%",
    marginTop: METRICS.MAR_10,
    marginLeft: METRICS.MAR_20,
    backgroundColor: COLORS.BACK,
    // justifyContent:'center',
    // alignItems:'center'
    // backgroundColor: 'green'
  },
  secureeInput: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 16,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // height: METRICS.MAR_50,
    flex: 1,
    // marginTop:-6
    // backgroundColor: 'red'
  },

  genderImage: {
    height: height / 40,
    width: width / 25,
    marginLeft: 7,
  },
  emailTwo: {
    marginVertical: METRICS.MAR_20,
    marginHorizontal: METRICS.MAR_8,
  },
  email: {
    marginVertical: METRICS.MAR_23,
    marginHorizontal: METRICS.MAR_19,
  },
  input: {
    height: height / 10,
    // backgroundColor: 'blue',
    width: width / 1.91,
  },
  icon: {
    height: height / 10,
    // backgroundColor: 'orange',
    width: width / 7,
    justifyContent: "center",
    alignItems: "center",
  },
  imageee: {
    height: METRICS.MAR_60,
    // backgroundColor: 'green',
    width: width / 6.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  image: {
    height: METRICS.MAR_60,
    marginTop: METRICS.MAR_10,
    marginLeft: METRICS.MAR_10,
    backgroundColor: COLORS.BOL,
    width: width / 6.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  first: {
    height: height / 10,
    marginTop: height / 40,
    backgroundColor: "red",
    marginLeft: width / 12,
    // marginHorizontal:20,
    flexDirection: "row",
    width: width / 1.5,
  },
  containerr: {
    flex: 1,
    backgroundColor: COLORS.BACK,
    flexDirection: "row",
    // :1
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    // :1
    // flexDirection:'row'
  },
  horo: {
    height: height / 8,
    backgroundColor: COLORS.DASHBOARD,
    // backgroundColor: 'green',
    flexDirection: "row",
  },
  heading: {
    fontSize: FONT_SIZES.H1,
    color: COLORS.WHITE,
    textAlign: "center",
  },
});
