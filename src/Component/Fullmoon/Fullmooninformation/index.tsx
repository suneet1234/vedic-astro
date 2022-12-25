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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements";
const { KEYPOINT, DASHBOARD, REMEDIES } = Constant.SCREENS;
const Retrograde = (props: any) => {
  const { navigation, isSelected } = props;

  const [planet, setPlanet] = useState("RETROGRADE");
  const [data1, setData1] = useState(0);
  const [position, setPosition] = useState([
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
    {
      name: "Jan28, 2021 19:16 UTC",
      image: Images.notomoon,
      title: "January",
    },
    {
      name: "Feb27, 2021 05:00 UTC",
      image: Images.notomoon,
      title: "February ",
    },
  ]);
  const [birth, setBirth] = useState([
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
  ]);

  // const ListHeader = () => {
  //   return (
  //     <View
  //       style={{
  //         backgroundColor: COLORS.NO,
  //         flexDirection: "row",
  //         height: 50,
  //         marginTop: 15,
  //         alignItems:"center",
  //       }}
  //     >
  //       <Text style={styles.textStyle5}>2021</Text>
  //       <Text style={styles.textStyle6}>FULLMOON</Text>
  //       <Text style={styles.textStyle7}>NEWMOON</Text>

  //     </View>
  //   );
  // };

  const renderItem2 = (item, index) => {
    const { name, image, title, end, position, degree } = item;
    return (
      <View
        style={[
          styles.view1,
          { backgroundColor: index % 2 == 0 ? "transparent" : COLORS.NEW },
        ]}
      >
        {/* <Text style={styles.text}>{name}</Text> */}
        <Text style={styles.text5}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 0.4,
            alignItems: "center",
            height: 50,
          }}
        >
          <Image
            source={image}
            style={{ height: 30, width: 30, marginLeft: 17 }}
          />
          <Text style={styles.raw}>{name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 0.4,
            marginLeft: 85,
          }}
        >
          <Image
            source={image}
            style={{ height: 30, width: 30, }}
          />
          <Text style={styles.raw2}>{name}</Text>
        </View>

        <Text style={styles.text2}>{end}</Text>
      </View>
    );
  };

  // const renderItem3 = ({ item, index }: any) => {
  //   const { name, image, title,time,end,position, degree } = item;
  //     if (index >= data1 && index < data1 + 3){
  //   return (
  //     <View
  //       style={[
  //         styles.view3,
  //         { backgroundColor:  COLORS.NEW},
  //       ]}
  //     >

  //       {/* <Text style={styles.text5}>{title}</Text> */}
  //       <View style={{alignItems:"center"}}>
  //       <Image source={image} style={{ height:70,width:70 ,marginTop:10}} />

  //         <Text style={styles.text}>{name}</Text>
  //         <Text style={styles.textraw}>{title}</Text>
  //         <Text style={styles.tex}>{time}</Text>

  //         </View>
  //        {/* <Text  style={{fontFamily:FONT_FAMILIES.MEDIUM,color:COLORS.WHITE_NORMAL,fontSize:12,marginLeft:5}}>{name}</Text> */}

  //        {/* <View style={{flexDirection:"row",alignItems:"center",flex:0.5,marginLeft:55}}>
  //       <Image source={image} style={{ height:20,width:20 ,}} />
  //        <Text  style={{fontFamily:FONT_FAMILIES.MEDIUM,color:COLORS.WHITE_NORMAL,fontSize:12,marginLeft:5}}>{name}</Text>
  //        </View> */}

  //       <Text style={styles.text2}>{end}</Text>

  //     </View>
  //   );
  //       }
  // };

  const renderItem3 = ({ item, index }: any) => {
    const { name, image, title, time, end, position, degree } = item;
    if (index >= data1 && index < data1 + 3) {
      return (
        <View style={[styles.view3, { backgroundColor: COLORS.NEW }]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={image}
              style={{ height: 70, width: 70, marginTop: 10 }}
            />

            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textraw}>{moment().format("MMMMD")}</Text>
            <Text style={styles.tex}>{moment().format("HH:MM UTC")}</Text>
          </View>

          <Text style={styles.text2}>{end}</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <NavHeader  isBack simpleBack title={"RETROGRADE PLANET DETAILS"} isRightAction={true} /> */}

        <View style={styles.home}>
          {/*          
        <FlatList 
        ListHeaderComponent={ListHeader}
        style={styles.flt2}
          data={position}
          keyExtractor={(item) => item.name}
          renderItem={renderItem2}
        /> */}
          <View
            style={{
              backgroundColor: COLORS.NO,
              flexDirection: "row",
              height: 50,
              // marginTop: 15,
              alignItems: "center",
            }}
          >
            <Text style={styles.textStyle5}>2021</Text>
            <Text style={styles.textStyle6}>FULLMOON</Text>
            <Text style={styles.textStyle7}>NEWMOON</Text>
          </View>
          {/* <View style={styles.flt2}> */}
          {position.map((item, index) => {
            return renderItem2(item, index);
          })}
          {/* </View> */}
        </View>
        {/* <View style={{ flexDirection: "row",flex:1 }}> */}
        {/* {
            <TouchableOpacity
              disabled={data1 == 0}
              style={styles.touch1}
              onPress={() => setData1(data1 - 3)}
            >
              <Ionicons name="chevron-back" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          } */}
        <View style={{ flexDirection: "row",marginTop:-25 }}>
          {
            <TouchableOpacity
              disabled={data1 == 0}
              style={styles.touch1}
              onPress={() => setData1(data1 - 3)}
            >
              <Ionicons name="chevron-back" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          }
          <View style={styles.home2}>
            <View style={styles.inputBox}>
              <Image source={Images.calender} style={styles.img3} />
              <View style={styles.posit}>
                <Text style={styles.heading}>{moment().format("MMMM")}</Text>
                <Text style={styles.heading4}>{moment().format("YYYY")}</Text>
              </View>
            </View>
            <Text style={styles.textt1}>Full Moon and New Moon </Text>
            {/* <View style={styles.inputBox}>
              <Image source={Images.calender} style={styles.img3} />
              <View style={styles.posit}>
                <Text style={styles.heading}>September</Text>
                <Text style={styles.heading4}>2021</Text>
              </View>
            </View> */}
            {/* <Text style={styles.textt1}>Full Moon and New Moon </Text> */}

            {/* <View>
              <FlatList
                scrollEnabled={false}
                horizontal
                data={birth}
                keyExtractor={(item, index) => item.name}
                renderItem={renderItem3}
              />
            </View> */}
            {/* </View> */}

            {/* {
            <TouchableOpacity
              disabled={!(data1 < birth.length && birth.length-data1 >3)}
              
              style={styles.touch1}
              onPress={() => setData1(data1 + 3)}
            >
             
              <Ionicons name="chevron-forward" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          } */}

            <View>
              <FlatList
                scrollEnabled={false}
                horizontal
                data={birth}
                keyExtractor={(item, index) => item.name}
                renderItem={renderItem3}
              />
            </View>
          </View>
          {
            <TouchableOpacity
              disabled={!(data1 < birth.length && birth.length - data1 > 3)}
              style={styles.touch1}
              onPress={() => setData1(data1 + 3)}
            >
              {/* console.log("heelooo",data1) */}
              <Ionicons name="chevron-forward" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default Retrograde;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    paddingHorizontal:10
  },
  flt2: {
    // alignSelf:"center",
    // alignItems:"center",
    // flex:1,
    // marginLeft:10
  },
  retro2: {
    height: 30,
    width: 29,
    marginLeft: 10,
  },
  textt1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 22,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    padding: 5,
  },
  raw: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 12,
    marginLeft: 5,
  },
  cale: {
    fontSize: 28,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 10,
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
    marginLeft: 5,
  },
  south: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.DASHBOARD,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  raw2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 12,
    marginLeft: 5,
  },
  img1: {
    height: 120,
    width: 80,
    marginLeft: 35,
    marginTop: 20,
  },
  img3: {
    height: 20,
    width: 20,
    // marginLeft: 25,

    alignSelf: "center",
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
  textStyle5: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    // marginTop: 5,
    flex: 1,
    marginLeft: 20,
    // marginRight:0
  },
  textStyle6: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    // marginLeft: 8,
    // marginTop: 5,
    marginRight: 65,
  },
  textStyle7: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    flex: 1,
  },
  view3: {
    // justifyContent:"space-between",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
    height: 150,
    // padding:4,
    width: 92,
    // flex:1,
    marginLeft: 8,
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
    fontSize: 12,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.NONE,
  },
  text: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 14,
    // flex:1,
    // padding:5,
    // marginLeft: 5,
    // textAlign:"center"
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    // flex:1,
    textAlign: "center",
    // backgroundColor:"green"
  },
  touch1: {
    marginTop: 180,

    height: 24,
  },
  text5: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    // padding:5,
    flex: 0.5,
    marginLeft: 10,

    // textAlign:"center",
    // // backgroundColor:"green"
  },
  textraw: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    // padding:5,
    // flex:0.5,
    // marginLeft:10
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
    // flex:0.5,
    // flex:1,
    // height:350,
    // width:350,
    // marginLeft:10,
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
    width: 370,
    marginTop: 30,
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
    width: 370,
    marginTop: 30,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    // marginLeft:30
  },
  textStyle2: {
    height: 90,
    width: 370,
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
    marginTop: 10,
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
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 22,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
  },
  button: {
    color: COLORS.HOME,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2.3),
    marginLeft: "3%",
  },
  heading: {
    fontSize: 13,
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  heading4: {
    fontSize: 10,
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  home: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    // height:530,
    // width:370,
    marginTop: 10,
    flex: 1,
    backgroundColor: COLORS.BACK,
    // padding:10,
    // alignSelf:"center"
    // backgroundColor: COLORS.DASHBOARD,
  },
  home2: {
    // borderColor:COLORS.BORD,
    // borderWidth:1,
    // borderRadius:5,
    // height:270,
    // // width:300,
    // marginTop:20,
    // padding:5,
    // backgroundColor:COLORS.BACK,
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    height: 260,
    // flex: 0.7,
    flex: 1,
    // width: 335,
    marginTop: 55,
    // padding:10,
    // padding:20,

    // alignSelf:"center"
  },
  buttonText1: {
    fontSize: responsiveFontSize(4),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_10,
    color: COLORS.HOME,
  },
  inputBox: {
    flexDirection: "row",
    padding: 7,
  },
});
