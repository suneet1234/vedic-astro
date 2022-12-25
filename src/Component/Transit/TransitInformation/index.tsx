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
} from "react-native";
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  METRICS,
  START_COORDS,
  END_COORDS,
} from "../../../Configration";
import "./withConnect";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from "react-native-elements";
import DatePicker from "react-native-date-picker";
import moment from 'moment';
const { KEYPOINT, DASHBOARD } = Constant.SCREENS;
const TransitInformation = (props: any) => {
  const { navigation } = props;
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
 

  const [birthdata, setBirthData] = useState([
    {
      image: Images.halfsun,
      name: "Sun In",
      title: "Libra",
      vir: "Vir",
      earth: "14*23'",
    },
    {
      image: Images.halfmoon,
      name: "Moon",
      title: "Gemini",
      vir: "Vir",
      earth: "14*23'",
    },
    {
      image: Images.halfsun,
      name: "Mercury",
      title: "Libra",
      vir: "Vir",
      earth: "14*23'",
    },
    {
      image: Images.halfmoon,
      name: "Moon",
      title: "Gemini",
      vir: "Vir",
      earth: "14*23'",
    },
  ]);

  


  const renderItem1 = (item, index ) => {
    const { name, title, vir, earth, image } = item;
    return (
      <View style={styles.view}>
        <Image source={image} style={styles.img3} />
        <Text style={styles.text}>{name}</Text>
        <Divider orientation="vertical" color="white" width={2}  />
        <Text style={styles.text1}>{title}</Text>
        {/* <Text style={styles.text3}>{vir}</Text> */}
        <Divider orientation="vertical" color="white" width={2}  />
        <Text style={styles.text2}>{earth}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavHeader
        isBack
        simpleBack
        title={"Transit Information"}
        isRightAction={true}
      />

      <ScrollView style={{paddingHorizontal:10,marginTop:20}}>
        <View style={styles.textStyle1}>
          <View style={{ margin: 10, alignSelf: "center" }}>
            <TouchableOpacity   onPress={() => [setIndex(0), setOpen(true)]}  >
              <View
                style={{
                  backgroundColor: COLORS.DASHBOARD,
                  height: 55,
                  width: 330,
                  // flex:1,
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems:"center",
                  margin: 5,
                }}
              >
                <Image
                  source={Images.calender1}
                  style={{ height: 17, marginLeft: 10 }}
                />
                <Text
                  style={{
                    fontSize: 21,
                    color: COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    marginLeft: 10,
                  }}
                >
                  
                  {moment(startDate).format('DD-MM-YYYY ')}
                </Text> 
                
      
          <DatePicker
                modal
                open={open}
                date={startDate }
                onConfirm={(date) => {
                    setOpen(false)
                     setStartDate(date) 
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
    
           
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: COLORS.DASHBOARD,
                  height: 55,
                  width:330,
                  // flex:1,
                  flexDirection: "row",
                  alignSelf:"center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Image
                  source={Images.time1}
                  style={{ height: 17, marginLeft: 10 }}
                />
                <Text
                  style={{
                    fontSize: 21,
                    color: COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    marginLeft: 10,
                  }}
                >
                {moment().format("hh:mm:ss A")}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: COLORS.DASHBOARD,
                  height: 55,
                  width: 330,
                  flexDirection: "row",
                  alignSelf:"center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Image
                  source={Images.location2}
                  style={{ height: 17, marginLeft: 10 }}
                />
                <Text
                  style={{
                    fontSize: 21,
                    color: COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    marginLeft: 10,
                  }}
                >
                  Current Location
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textStyle2}>
          <View style={styles.view1}>
            <Image source={Images.moon2} style={styles.touch} />
          </View>
          <View>
            <Text style={styles.textStyle3}>DISSEMINATING</Text>
            <Text style={styles.textStyle4}>Moon</Text>
          </View>
        </View>

        <View style={styles.textt}>
          <View style={{ flex: 0.5, padding: 10 }}>
            <Image source={Images.fulmoon} style={styles.img2} />
          </View>
          <View style={{ flex: 1,margin:15 }}>
            <Text style={styles.node}>FULL MOON</Text>
            <Text style={styles.posit}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </Text>
          </View>
        </View>

        {/* <FlatList
          style={styles.flt}
          data={birthdata}
          keyExtractor={(item) => item.name}
          renderItem={renderItem1}
        /> */}

        <View   style={styles.flt}>
          {birthdata.map((item,index)=>{
            return renderItem1(item,index)
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransitInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
  },
  node: {
    fontSize: 25,
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    // marginLeft: 10,
  },
  none: {
    marginTop: 15,
    marginLeft: 15,
  },
  posit: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginTop:10
    // flex:1
    // textAlign: "center",
    // paddingTop: 10,
  },
  south: {
    height: 26,
    width: 21,
  },
  img1: {
    height: 120,
    width: 80,
    marginLeft: 35,
    marginTop: 20,
  },
  img3: {
    height: 30,
    width: 30,
    // marginLeft: 25,
    paddingTop: 10,
    // marginTop: 20,
  },
  img2: {
    height: 120,
    width: 120,
    // flex:0.5
    // marginLeft: 25,
    // marginTop: 20,
  },
  chkr: {
    flex: 1,
  },
  error: {
    borderRadius: 5,
    borderWidth: 1,
    height: 500,
    borderColor: COLORS.BORD,
    width: 370,
    marginLeft: 15,
    marginRight: 0,
  },
  tex: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
  },
  text: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    flex: 1,
    // padding:5,
    // marginLeft: 5,
    textAlign: "center",
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    flex: 1,
    textAlign: "center",
    // backgroundColor:"green"
  },
  text2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    // textAlign: "right",
    flex: 0.7,
    marginLeft: 40,
    // marginTop: 5,
  },
  text3: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    // jus:"right"
    // marginLeft: 30,
    // marginTop: 5,
  },
  new: {
    marginTop: 10,

    flex: 1,
  },
  view: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.BACK,
    borderColor: COLORS.BORD,
    height: 55,
    // width:370,
    padding: 6,
    marginTop: 8,
    // flex:1,
    alignItems: "center",
    // justifyContent:""
  },
  view1: {
    flex: 0.5,
  },
  flatlist: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 25,
  },
  textStyle: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    flex: 0.5,
    // marginTop: 5,
  },
  textStyle1: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLORS.BACK,
    height: 240,
    // width:370,
    margingTop: 10,
    flex: 1,
    // alignSelf:"center",
    justifyContent:"center"
  },
  textStyle2: {
    height: 90,
    //  width:370,
    //  alignSelf:"center",
    marginTop: 8,
    padding: 10,
    flexDirection: "row",
  },
  textStyle3: {
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    fontSize: 25,
    // marginLeft: 25,
    // marginTop: 5,
  },
  textStyle4: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 20,
    // marginLeft: 10,
    // marginTop: 5,
  },
  flt: {
    // padding: 10,
    marginTop: 10,
    // alignItem:"center",
    // width: 400,
  },
  flt1: {
    backgroundColor: COLORS.BACK,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    marginTop: 10,
    // width: 370,
    marginLeft: 15,
    //  height:60
  },
  renderItem: {
    marginLeft: 20,
    flexDirection: "row",
    // justifyContent:"space-between",
    marginTop: "15%",
  },
  network: {
    height: 35,
    width: 80,
    backgroundColor: COLORS.BOL,
    borderRadius: 5,
    // padding:5
    marginLeft: 10,
    // flex:0.5
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "1%",
  },
  touch: {
    height: 55,
    width: 55,
  },
  textt: {
    height: 210,
    // width:370,
    alignItems: "center",
    // alignSelf:"center",
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    
    backgroundColor: COLORS.BACK2,
    // marginTop:10,
    flexDirection: "row",
    // padding:10
  },
  button: {
    color: COLORS.HOME,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2.3),
    marginLeft: "3%",
  },
  heading: {
    fontSize: FONT_SIZES.H1,
    color: COLORS.WHITE,
    textAlign: "center",
  },
  home: {
    flex: 1,
    // backgroundColor: COLORS.DASHBOARD,
  },
  buttonText1: {
    fontSize: responsiveFontSize(4),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_10,
    color: COLORS.HOME,
  },
  inputBox: {
    height: 50,
    backgroundColor: "white",
    // paddingHorizontal: METRICS.MARGIN,
    // marginVertical: METRICS.PADDING_COMMON
  },
});
