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
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
// import Swiper from "react-native-web-swiper";
import Swiper from "react-native-swiper";
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
const { KEYPOINT, DASHBOARD } = Constant.SCREENS;
const Personalhoroscope = (props: any) => {
  const { navigation } = props;

  const [filter, setFilter] = useState("BIRTH CHART");

  const [birth, setBirth] = useState([
    {
      name: "BIRTH CHART",
      image: Images.birthchart,
      screen: DASHBOARD,
      isSelected: true,
    },
    { name: "ASCEDANTS", image: Images.ascedant, isSelected: false },
    {
      name: "KEYPOINT",
      image: Images.keypoint,
      screen: KEYPOINT,
      isSelected: false,
    },
    { name: "PLANET", image: Images.planet, isSelected: false },
    { name: "HOUSE", isSelected: false },
  ]);

  const [birthdata, setBirthData] = useState([
    { name: "Name", title: "July12 1989" },
    { name: "Gender", title: "1:21 AM IST(+5:30)" },
    { name: "Birth Date", title: "EAST DELHI,DELHI" },
    { name: "Birth Time", title: "LAHIRI" },
    { name: "Birth Place", title: "IST(+5:30)" },
  ]);

  const [position, setPosition] = useState([
    {
      name: "SUN",
      image: Images.SYMBOL,
      title: "2270 58",
      position: "17058'",
      degree: "17058'",
    },
    {
      name: "SUN",
      image: Images.SYMBOL,
      title: "2270 58",
      position: "17058'",
      degree: "17058'",
    },
    {
      name: "SUN",
      image: Images.SYMBOL,
      title: "2270 58",
      position: "17058'",
      degree: "17058'",
    },
    {
      name: "SUN",
      image: Images.SYMBOL,
      title: "2270 58",
      position: "17058'",
      degree: "17058'",
    },
    {
      name: "SUN",
      image: Images.SYMBOL,
      title: "2270 58",
      position: "17058'",
      degree: "17058'",
    },
  ]);

  const renderItem1 = (item, index) => {
    const { name, title } = item;
    return (
      <View
        style={[
          styles.view,
          { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
        ]}
      >
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text1}>{title}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.new1}>
      {/* <FlatList
        style={styles.flt}
        data={birthdata}
        keyExtractor={(item) => item.name}
        renderItem={renderItem1}
      /> */}

      <View style={styles.flt}>
        {birthdata.map((item, index) => {
          return renderItem1(item, index)
        })}
      </View>
      <View style={styles.south}>
        <Image source={Images.personalhoro} style={styles.img2} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.dull}>YOUR HOROSCOPE</Text>
          <Text style={styles.touch}>Today</Text>
        </View>
      </View>


      <Swiper style={styles.wrapper}
        dot={<View style={{ backgroundColor: '#5a5353', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
        activeDot={<View style={{backgroundColor:COLORS.BOL, width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}></View>}
      >
        <View style={styles.view2}>
          <View style={styles.new2}>
            <View style={{ marginTop: 10,flex:1 ,marginLeft:5}}>
              <Text style={styles.textStyle3}>CANCER TODAY</Text>
              <Text style={styles.textStyle2}> Cancer (21-june-22-june)</Text>
            </View>
            <Image source={Images.cancer} style={styles.new} />
          </View>

          <View style={{ padding: 5, marginTop: 5 }}>
          <View style={{marginLeft:10,marginRight:5}}>
            <Text style={styles.new3}>Career</Text>
            <Text style={styles.new5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum
            </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}
            >
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new6}>29%</Text>
                <Text style={styles.new7}>Luck Score</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new8}>3 8</Text>
                <Text style={styles.new9}>Luck Number</Text>
              </View>
              <View style={{ flex: 0.4 }}>
                <View style={styles.flatlist}></View>
                <Text style={styles.none2}>Luck Colour</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.new2}>
            <View style={{ flex:1, marginTop: 10 }}>
              <Text style={styles.textStyle3}>CANCER TODAY</Text>
              <Text style={styles.textStyle2}> Cancer (21-june-22-june)</Text>
            </View>
            <Image source={Images.cancer} style={styles.new} />
          </View>

          <View style={{ padding: 5, marginTop: 5 }}>
          <View style={{marginLeft:10,marginRight:5}}>
            <Text style={styles.new3}>Career</Text>
            <Text style={styles.new5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum
            </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}
            >
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new6}>29%</Text>
                <Text style={styles.new7}>Luck Score</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new8}>3 8</Text>
                <Text style={styles.new9}>Luck Number</Text>
              </View>
              <View style={{ flex: 0.4 }}>
                <View style={styles.flatlist}></View>
                <Text style={styles.none2}>Luck Colour</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.new2}>
            <View style={{  marginTop: 10,flex:1 }}>
              <Text style={styles.textStyle3}>CANCER TODAY</Text>
              <Text style={styles.textStyle2}> Cancer (21-june-22-june)</Text>
            </View>
            <Image source={Images.cancer} style={styles.new} />
          </View>
          <View style={{ padding: 5, marginTop: 5 }}>
            <View style={{marginLeft:10,marginRight:5}}>
            <Text style={styles.new3}>Career</Text>
            <Text style={styles.new5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum
            </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}
            >
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new6}>29%</Text>
                <Text style={styles.new7}>Luck Score</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.new8}>3 8</Text>
                <Text style={styles.new9}>Luck Number</Text>
              </View>
              <View style={{ flex: 0.4 }}>
                <View style={styles.flatlist}></View>
                <Text style={styles.none2}>Luck Colour</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.new2}>
            <View style={{  marginTop: 10 ,flex:1}}>
              <Text style={styles.textStyle3}>CANCER TODAY</Text>
              <Text style={styles.textStyle2}> Cancer (21-june-22-june)</Text>
            </View>
            <Image source={Images.cancer} style={styles.new} />
          </View>

          <View style={{ padding: 5, marginTop: 5 }}>
            <View style={{marginLeft:10,marginRight:5}}>
            <Text style={styles.new3}>Career</Text>
            <Text style={styles.new5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum
            </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.new6}>29%</Text>
                <Text style={styles.new7}>Luck Score</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.new8}>3 8</Text>
                <Text style={styles.new9}>Luck Number</Text>
              </View>
              <View style={{  }}>
                <View style={styles.flatlist}></View>
                <Text style={styles.none2}>Luck Colour</Text>
              </View>
            </View>
          </View>
        </View>
      </Swiper>
      {/* </View> */}
      <View style={styles.view1}>
        <Text style={styles.textStyle31}>WEEKLY HOROSCOPE</Text>
        <Text style={styles.textStyle2}> (21-Oct-22-Oct)</Text>
        <Text style={styles.textStyle1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum
        </Text>
      </View>
    </ScrollView>
  );
};

export default Personalhoroscope;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
  },
  new3: {
    color: COLORS.BOL,
    fontSize: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  none1: {
    color: COLORS.BOL,
    fontSize: 25,
    fontFamily: FONT_FAMILIES.BOLD,
    marginLeft: 10,
  },
  wrapper: { height: 400, },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  tttt2: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  new9: {
    color: COLORS.BOL,
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  none2: {
    color: COLORS.BOL,
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
    textAlign: "center",
    marginTop: 2
  },
  new8: {
    color: COLORS.BOL,
    fontSize: 25,
    fontFamily: FONT_FAMILIES.BOLD,
    marginLeft: 20,
  },
  new6: {
    color: COLORS.BOL,
    fontSize: 25,
    fontFamily: FONT_FAMILIES.BOLD,
    marginLeft: 10,
    // textAlign:"center"
  },
  new5: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginTop:5
  },
  new1: {
    marginTop: 10,
  },
  new7: {
    color: COLORS.BOL,
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  img2: {
    height: 40,
    width: 50,
    marginTop: 7,
  },
  new2: {
    flexDirection: "row",
    height: 80,
    // width: 370,
    // alignSelf: "center",
    padding: 10,
  },
  dull: {
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    fontSize: 20,
  },
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
    marginLeft: 10,
  },
  none: {
    marginTop: 15,
    marginLeft: 15,
  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    // backgroundColor:"white",
    marginTop: 15,
    // width: 360,
    // alignSelf: "center",
    marginLeft: 30,
    flexDirection: "row",
    // justifyContent:"center"
    // flex:1
  },
  img1: {
    height: 186,
    width: 185,
  },
  chkr: {
    padding: 10,
    //  marginLeft:25,
    flex: 1,
    marginTop: 8,
  },
  error: {
    borderRadius: 5,
    borderWidth: 1,
    height: 500,
    borderColor: COLORS.BORD,
    // width: 370,s
    marginLeft: 15,
    marginRight: 0,
  },
  tex: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
  },
  text: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    marginLeft: 5,
    flex: 0.5,
    // marginTop: 5,
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    flex: 1,
    marginLeft: 50,
    // marginTop: 5,
  },
  text2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    marginLeft: 30,
    marginTop: 5,
  },
  text3: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    marginLeft: 30,
    marginTop: 5,
  },
  new: {
    height: 70,

    width: 70,
    // marginTop: 10,
    // marginLeft: 15,
    // flex: 0,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
  },
  view1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    height:200,
    // width: 370,
    alignSelf: "center",
    backgroundColor: COLORS.BACK,
    padding: 20,
    marginTop: 15,
  },
  view2: {
    borderRadius: 5,
    borderWidth: 1,
    height: 380,
    borderColor: COLORS.BORD,
    width: 380,
    alignSelf: "center",
    backgroundColor: COLORS.BACK,
    padding: 10,
    marginTop: 15,
  },
  flatlist: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE_NORMAL,
    alignSelf: "center"
  },
  textStyle: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginTop: 5,
  },
  textStyle1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 17,
    marginTop: 13,
    // marginLeft: 8,
    // marginTop: 5,
  },
  textStyle2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    // marginLeft: 10,
    // marginTop: 5,
  },
  textStyle3: {
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    fontSize: 25,
    marginLeft: 4,
    // marginTop: 5,
  },
  textStyle31: {
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    fontSize: 25,
    // marginLeft: 4,
    // marginTop: 5,
  },
  textStyle4: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 10,
    marginTop: 5,
  },
  flt: {
    backgroundColor: COLORS.BACK,
    padding: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    marginTop: 10,
    // width: 370,
    flex: 1,
    // alignSelf: "center",
    // marginLeft: 15,
    //  height:60
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
    fontSize: responsiveFontSize(1.5),
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    marginLeft: 10,
    //  backgroundColor:COLORS.GRAD
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "1%",
  },
  touch: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 20,
    color: COLORS.WHITE_NORMAL,
  },
  textt: {
    color: COLORS.GET,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: responsiveFontSize(2.3),
    marginTop: "3.5%",
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
