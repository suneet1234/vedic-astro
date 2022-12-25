import React, { useEffect, useState } from "react";
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
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Divider } from "react-native-elements";
const { KEYPOINT, DASHBOARD, REMEDIES } = Constant.SCREENS;
const Retrograde = (props: any) => {
  const { navigation, isSelected } = props;

  const [planet, setPlanet] = useState("RETROGRADE");
  const [date1, setDate1] = useState(new Date());
  const [position, setPosition] = useState([
    {
      name: "Pluto in Capricorn",
      image: Images.notomoon,
      title: "Apr 28th - Oct 2nd ",
      end: "Saturday",
    },
    {
      name: "Saturn in Aquarius ",
      image: Images.notomoon,
      title: "Apr 28th - Oct 2nd ",
      end: "1 week",
    },
    {
      name: "Jupiter in Pisces",
      image: Images.notomoon,
      title: "Apr 28th - Oct 2nd ",
      end: "2 week",
    },
    {
      name: "Neptune in Pises",
      image: Images.notomoon,
      title: "Apr 28th - Oct 2nd ",
      end: "3 week",
    },
  ]);
  const ListHeader = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.NO,
          flexDirection: "row",
          height: 50,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={styles.textStyle5}>PLANETS</Text>
        <Text style={styles.textStyle6}>DATES</Text>
        <Text style={styles.textStyle7}>ENDS</Text>
      </View>
    );
  };

  const renderItem2 = (item, index) => {
    const { name, image, title, end, position, degree } = item;
    return (
      //   <View
      //   style={{
      //     backgroundColor: COLORS.NO,
      //     flexDirection: "row",
      //     height: 50,
      //     marginTop: 15,
      //     alignItems:"center",
      //   }}
      // >
      //   <Text style={styles.textStyle5}>PLANETS</Text>
      //   <Text style={styles.textStyle6}>DATES</Text>
      //   <Text style={styles.textStyle7}>ENDS</Text>

      // </View>

      <View
        style={[
          styles.view1,
          { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
        ]}
      >
        {/* <Text style={styles.text}>{name}</Text> */}
        <View
          style={{
            flexDirection: "row",
            flex: 0.3,
            marginTop: 8,
            marginLeft: 10,
          }}
        >
          <Image source={image} style={{ height: 30, width: 30 }} />
          <Text
            style={{
              fontFamily: FONT_FAMILIES.MEDIUM,
              color: COLORS.WHITE_NORMAL,
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            {name}
          </Text>
        </View>
        <Text style={styles.text5}>{title}</Text>
        <Text style={styles.text2}>{end}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <NavHeader  isBack simpleBack title={"RETROGRADE PLANET DETAILS"} isRightAction={true} /> */}

      {/* <View style={styles.textStyle4} > */}
      {/* <TouchableOpacity style={styles.textStyle} >
           <LinearGradient
          style={{  height:40,width:170,marginHorizontal: 1,borderRadius:5}}
          start={START_COORDS}
          end={END_COORDS}
          colors=  {COLORS.GRAD}
        >
            <Text style={styles.south}>DETAILS</Text>
            </LinearGradient>
           </TouchableOpacity>

           <TouchableOpacity style={styles.textStyle} onPress={() => navigation.navigate(REMEDIES)}>
           <LinearGradient
          style={{  height:40,width:170,marginHorizontal: 1,borderRadius:5}}
          start={START_COORDS}
          end={END_COORDS}
          colors=  {COLORS.GRAD}
        >
            <Text style={styles.south}>REMEDIES</Text>
            </LinearGradient>
           </TouchableOpacity>
        </View> */}
      <ScrollView>
        <View style={styles.textStyl}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setDate1(moment(date1).subtract(1, "days"))}
            >
              <Image source={Images.backpress} style={styles.retro2} />
            </TouchableOpacity>
            <View
              style={{ height: 50, flex: 1, backgroundColor: COLORS.DASHBOARD,alignSelf:"center",marginLeft:7 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  
                  // justifyContent: "center",
                  marginTop: 12,
                  // marginLeft: 5,
                  // marginRight: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILIES.MEDIUM,
                    color: COLORS.WHITE_NORMAL,
                    fontSize: 17,
                    flex: 1,
                    marginLeft:10
                  }}
                >
                  {moment(date1).format("MMMM D , YYYY")}
                </Text>
                <Image source={Images.calender} style={{marginRight:10}} />
              </View>
            </View>

            <TouchableOpacity
              style={{ margin: 4 }}
              onPress={() => setDate1(moment(date1).add(1, "days"))}
            >
              <Image source={Images.forward} style={styles.retro3} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textStyle1}>
          <Text style={styles.flt1}>MERCURY RETROGRADE</Text>
          <View style={styles.none}>
            <Image source={Images.retro} style={styles.img3} />
            <View
              style={{ flex: 1, padding: 10, marginLeft: 10, marginTop: 20 }}
            >
              <Text style={styles.network}>Mercury In Libra</Text>
              <Text style={styles.node}>(Sep 27th - Oct 19th)</Text>
            </View>
          </View>
          <Text style={styles.heading}>
            Mercury retrograde, which occurs three times a year for about three
            weeks each time, is interpreted particularly strongly. Mental
            pursuits and connections break down. The Mercury retrograde period
            is best used as a time for inner reflection. It is not a good time
            for making new decisions or new business plans, but it is ideal for
            reflecting on your current situation. It is best to quietly observe
            your inner process during
          </Text>
        </View>

        <View style={styles.home}>
          <Text style={styles.cale}>Retrograde Calender</Text>
          {/* <FlatList 
        ListHeaderComponent={ListHeader}
        style={styles.flt2}
          data={position}
          keyExtractor={(item) => item.name}
          renderItem={renderItem2}
        /> */}
          <View style={styles.flt2}>
            <View
              style={{
                backgroundColor: COLORS.NO,
                flexDirection: "row",
                height: 50,
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Text style={styles.textStyle5}>PLANETS</Text>
              <Text style={styles.textStyle6}>DATES</Text>
              <Text style={styles.textStyle7}>ENDS</Text>
            </View>
            {position.map((item, index) => {
              return renderItem2(item, index);
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Retrograde;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    paddingHorizontal: 10,
  },
  flt2: {
    width: 350,
    alignSelf: "center",
  },
  retro2: {
    height: 30,
    width: 29,
    marginLeft: 3,
    // marginLeft:16
  },
  retro3: {
    height: 30,
    width: 29,
    marginLeft: 5,
    // marginLeft:16
  },
  cale: {
    fontSize: 28,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 18,
  },
  node: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.BOL,
    // marginLeft: 10,
  },
  none: {
    flexDirection: "row",
  },
  posit: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // flex:1
    // textAlign: "center",
    // paddingTop: 10,
  },
  south: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.DASHBOARD,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  img1: {
    height: 120,
    width: 80,
    marginLeft: 35,
    marginTop: 20,
  },
  img3: {
    // height: 40,
    // width: 40,
    marginLeft: 25,
    // paddingTop:10
    flex: 0.6,
    alignSelf: "center",
    marginTop: 20,
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
  textStyle5: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.2),
    // marginTop: 5,
    flex: 1,
    marginLeft: 20,
    marginRight: 0,
  },
  textStyle6: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.2),
    // marginLeft: 8,
    // marginTop: 5,
    flex: 1,
  },
  textStyle7: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.2),
    flex: 0.5,

    // marginLeft: 10,
    // marginTop: 5,
  },
  textStyle8: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 25,
    marginTop: 5,
  },
  textStyle9: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 10,
    marginTop: 5,
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
    fontSize: 15,
    // flex:1,
    textAlign: "center",
    // backgroundColor:"green"
  },
  text5: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    // fontSize: 15,
    marginLeft: 30,
    flex: 0.5,

    // textAlign:"center",
    // // backgroundColor:"green"
  },
  text2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    //  textAlign:"right",
    flex: 0.2,
    // flex:0.9
    // marginLeft: 30,
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
    width: 370,
    padding: 5,
    marginTop: 10,

    alignItems: "center",
    // justifyContent:""
  },
  view1: {
    // flex:0.5
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  flatlist: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 25,
  },
  textStyle: {
    alignContent: "center",
  },
  textStyle1: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    height: 480,
    // width:370,
    marginTop: 15,
    backgroundColor: COLORS.BACK,
    // padding:10,
    alignSelf: "center",
  },
  textStyl: {
    borderColor: COLORS.BORD,
    backgroundColor: COLORS.BACK,
    borderWidth: 1,
    borderRadius: 5,
    height: 80,
    justifyContent:"center",
    padding:5,
    // width:370,
    marginTop: 10,
    flexDirection: "row",
    // alignSelf:"center",
    alignItems: "center",
    // marginLeft:30
  },
  textStyle2: {
    height: 90,
    //  width:370,
    alignSelf: "center",
    marginTop: 20,
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
    // fontFamily: FONT_FAMILIES.MEDIUM,
    // color: COLORS.WHITE_NORMAL,
    // fontSize: 20,
    // marginLeft: 10,
    flexDirection: "row",
    // borderRadius:5,
    // borderColor:COLORS.BORD,
    // borderWidth:1,
    width: 370,
    // alignItems:"center",
    alignSelf: "center",
    justifyContent: "space-between",

    // marginTop: 5,
  },
  flt: {
    padding: 10,
    // marginTop: 18,
    alignItem: "center",
    width: 400,
  },
  flt1: {
    fontSize: 25,
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    textAlign: "center",
    marginTop: 15,
    //  height:60
  },
  renderItem: {
    marginLeft: 20,
    flexDirection: "row",
    // justifyContent:"space-between",
    marginTop: "15%",
  },
  network: {
    fontSize: 28,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
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
    height: 230,
    width: 370,
    alignItems: "center",
    alignSelf: "center",
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
    fontSize: 20,
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.BOOK,
    marginLeft: 15,
    marginRight: 10,marginTop:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  home: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    height: 370,
    // width:370,
    marginTop: 20,
    backgroundColor: COLORS.BACK,
    // padding:10,
    // alignSelf:"center"
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
