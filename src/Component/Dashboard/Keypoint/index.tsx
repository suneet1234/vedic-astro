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
const Keypoint = (props: any) => {
  const { navigation } = props;

  return (
    <ScrollView >
      <View style={styles.new1}>
        <View style={styles.network}>
          <View style={styles.chkr}>
            <Image source={Images.VIRGO} style={styles.img1} />
          </View>
          <View style={styles.new}>
            <Text
              style={{
                color: COLORS.BOL,
                fontFamily: FONT_FAMILIES.BOLD,
                fontSize: responsiveFontSize(3),
                marginTop:10
              }}
            >
              VIRGO
            </Text>
            <Text style={styles.flatlist}>Your Ascedants</Text>
            <Text style={styles.tex}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </Text>
          </View>
        </View>
        <View style={styles.network1}>
          <View style={styles.chkr}>
            <Image source={Images.MER} style={styles.img2} />
          </View>
          <View style={styles.new}>
            <Text
              style={{
                color: COLORS.BOL,
                fontFamily: FONT_FAMILIES.BOLD,
                fontSize: responsiveFontSize(3),
                marginTop:10
              }}
            >
              MERCURY
            </Text>
            <Text style={styles.flatlist}>Your Ascedants</Text>
            <Text style={styles.tex}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </Text>
          </View>
        </View>
        <View style={styles.network1}>
          <View style={styles.chkr}>
            <Image source={Images.unit} style={styles.img3} />
          </View>
          <View style={styles.new}>
            <Text
              style={{
                color: COLORS.BOL,
                fontFamily: FONT_FAMILIES.BOLD,
                fontSize: responsiveFontSize(3),
                marginTop:10
              }}
            >
              VIRGO
            </Text>
            <Text style={styles.flatlist}>Your Ascedants</Text>
            <Text style={styles.tex}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Keypoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    
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
    height: 26,
    width: 21,
  },
  new1: {
    // marginTop:-10
    paddingHorizontal:8
  },
  img1: {
    height: 140,
    width: 100,
    justifyContent:"center",
    alignSelf:"center"
  },
  img3: {
    height: 140,
    width: 140,
    justifyContent:"center",
    alignSelf:"center"
  },
  img2: {
    height: 140,
    width: 141,
    justifyContent:"center",
    alignSelf:"center"
  },
  chkr: {
    flex: 1,
    alignSelf:"center"
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
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    marginTop:10
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
    margin:10,
    // marginTop:10,

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
    fontSize: 25,
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
    backgroundColor: COLORS.BACK,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    marginTop: 10,
    width: 370,
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
    flexDirection: "row",
    borderRadius: 5,
    borderColor: COLORS.NEW1,
    backgroundColor:COLORS.BACK,
    borderWidth: 1,
    height:230,
    // width: 370,
    // marginLeft: 15,
    // alignSelf:"center",
    flex:1,
    marginTop: 20,
  },
  network1: {
    flexDirection: "row",
    borderRadius: 5,
    borderColor: COLORS.NEW1,
    backgroundColor:COLORS.BACK,
    borderWidth: 1,
    height:230,
    // width: 370,
    // marginLeft: 15,
    // alignSelf:"center",
    flex:1,
    marginTop: 10,
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "1%",
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
