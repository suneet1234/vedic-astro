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
const { KEYPOINT, DASHBOARD } = Constant.SCREENS;
const Planet = (props: any) => {
  const { navigation } = props;

  const [birthdata, setBirthData] = useState([
    { name: "Name", title: "      July12 1989" },
    { name: "Gender", title: "   1:21 AM IST(+5:30)" },
    { name: "Birth Date", title: "EAST DELHI,DELHI" },
    { name: "Birth Time", title: "LAHIRI" },
    { name: "Birth Place", title: "IST(+5:30)" },
  ]);

  //   const renderItem1 = ({ item, index }: any) => {
  //     const { name, title } = item;
  //     return (
  //       <View
  //         style={[
  //           styles.view,
  //           { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
  //         ]}
  //       >
  //         <Text style={styles.text}>{name}</Text>
  //         <Text style={styles.text1}>{title}</Text>
  //       </View>
  //     );
  //   };

  return (
    <ScrollView style={{paddingHorizontal:8}}>
      <View style={styles.home1}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.SUNEMOJ} style={styles.img6} />
          </View>
          <View style={styles.node}>
            <Text style={styles.flatlist}>IDENTITY & PURPOSE</Text>
            <Text style={styles.flatlist1}>Sun In Scorpio</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.MOONEMOJ} style={styles.img2} />
          </View>
          <View style={styles.retro}>
            <Text style={styles.flatlist}>EMOTIONS & FEELINGS</Text>
            <Text style={styles.flatlist1}>Moon in Sagittarius</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.CIRCLE} style={styles.img2} />
          </View>
          <View style={styles.retro}>
            <Text style={styles.flatlist}>DESIRES & VALUES</Text>
            <Text style={styles.flatlist1}>Venus in Libra</Text>
          </View>
        </View>
      </View>

      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.SUNEMOJ} style={styles.img6} />
          </View>
          <View style={styles.node}>
            <Text style={styles.flatlist}>IDENTITY & PURPOSE</Text>
            <Text style={styles.flatlist1}>Sun In Scorpio</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.MOONEMOJ} style={styles.img2} />
          </View>
          <View style={styles.retro}>
          <Text style={styles.flatlist}>EMOTIONS & FEELINGS</Text>
            <Text style={styles.flatlist1}>Moon in Sagittarius</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.CIRCLE} style={styles.img2} />
          </View>
          <View style={styles.retro}>
          <Text style={styles.flatlist}>DESIRES & VALUES</Text>
            <Text style={styles.flatlist1}>Venus in Libra</Text>
          </View>
        </View>
      </View>

      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.SUNEMOJ} style={styles.img6} />
          </View>
          <View style={styles.node}>
            <Text style={styles.flatlist}>IDENTITY & PURPOSE</Text>
            <Text style={styles.flatlist1}>Sun In Scorpio</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.MOONEMOJ} style={styles.img2} />
          </View>
          <View style={styles.retro}>
          <Text style={styles.flatlist}>EMOTIONS & FEELINGS</Text>
            <Text style={styles.flatlist1}>Moon in Sagittarius</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={Images.CIRCLE} style={styles.img2} />
          </View>
          <View style={styles.retro}>
          <Text style={styles.flatlist}>DESIRES & VALUES</Text>
            <Text style={styles.flatlist1}>Venus in Libra</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Planet;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLORS.DASHBOARD,
  },
  node: {
    marginLeft: 15,
    marginTop: 10,
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
    height: 26,
    width: 21,
  },
  img1: {
    height: 120,
    width: 80,
    marginLeft: 35,
    marginTop: 20,
  },
  img6: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 15,
  },
  img2: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 15,
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
    fontSize: responsiveFontSize(2),
    marginLeft: 5,
    marginTop: 5,
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    marginLeft: 50,
    marginTop: 5,
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
    marginTop: 10,

    flex: 1,
  },
  view: {
    flexDirection: "row",

    height: 25,
  },
  view1: {
    flexDirection: "row",

    height: 30,
  },
  flatlist: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 23,
  },
  flatlist2: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 26,
  },
  flatlist1: {
    color: COLORS.BOL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 20,
  },
  textStyle: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginTop: 5,
  },
  textStyle1: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 8,
    marginTop: 5,
  },
  textStyle2: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 10,
    marginTop: 5,
  },
  textStyle3: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 25,
    marginTop: 5,
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
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    marginTop: 18,
    width: 370,
    marginLeft: 15,
    //  height:60
  },
  flt1: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    marginLeft: 20,
    marginTop: 10,
  },
  renderItem: {
    marginLeft: 20,
    flexDirection: "row",
    // justifyContent:"space-between",
    marginTop: "15%",
  },
  network: {
    flexDirection: "row",
    borderRadius: 5,
    borderColor: COLORS.NEW1,
    borderWidth: 1,
    width: 370,
    marginLeft: 15,
    marginTop: 20,
  },
  retro: {
    marginLeft: 23,
    marginTop: 10,
  },
  touch: {
    height: "25%",
    backgroundColor: COLORS.DASHBOARD,
    width: "35%",
    borderRadius: 5,
    marginLeft: "3%",
    marginTop: "5%",
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
    backgroundColor: COLORS.BACK1,
    height: 80,
    // width: 360,
    // marginLeft: 15,
    marginTop: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.MED2,
  },
  home1: {
    backgroundColor: COLORS.BACK1,
    height: 80,
    // width: 360,
    // marginLeft: 15,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.MED2,
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
