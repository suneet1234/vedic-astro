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
const House = (props: any) => {
  const { navigation } = props;

  const [birthdata, setBirthData] = useState([
    { name: "1st House", title:"14*23", vir: "Vir", earth:"Earth,Mutable" },
    { name: "1st House", title:"14*23",  vir: "Vir",earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23" , vir: "Vir",earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23", vir: "Vir" ,earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23",  vir: "Vir",earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23" , vir: "Vir",earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23", vir: "Vir" ,earth:"Earth,Mutable"},
    { name: "1st House", title:"14*23" , vir: "Vir",earth:"Earth,Mutable"},
  ]);

  const renderItem1 = ( item, index ) => {
    const { name, title,vir,earth } = item;
    return (
      <View
        style={styles.view}
      >
        <View style={styles.network}>
        <Text style={styles.text}>{name}</Text>
        </View>
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text3}>{vir}</Text>
        <Text style={styles.text2}>{earth}</Text>
      </View>
    );
  };

  return (
   
      <View style={styles.container}>
        {/* <FlatList
          style={styles.flt}
          data={birthdata}
          keyExtractor={(item) => item.name}
          renderItem={renderItem1}
         
        /> */}
        <View  style={styles.flt}>
   {birthdata.map((item,index)=> {
     return renderItem1(item,index)
   })}
        </View>

      </View>
   
  );
};

export default House;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    paddingHorizontal:5
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
  img1: {
    height: 120,
    width: 80,
    marginLeft: 35,
    marginTop: 20,
  },
  img3: {
    height: 120,
    width: 120,
    marginLeft: 25,
    marginTop: 20,
  },
  img2: {
    height: 120,
    width: 120,
    marginLeft: 25,
    marginTop: 20,
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
    color: COLORS.DASHBOARD,
    fontSize: 17,
    // flex:1,
    padding:5,
    // marginLeft: 5,
    textAlign:"center"
    
    // borderRadius:10,
    // height:30,
    // width:80,
    // flex:0.5
    // marginTop: 5,
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2.2),
    marginLeft:15,
    flex:0.5
    // alignSelf:"center",
    // marginTop: 5,
  },
  text2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 20,
    // flex:0.5
    // marginLeft: 30,
    // marginTop: 5,
  },
  text3: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 20,
    flex:0.45,
    textAlign:"center",
    marginLeft: -10,
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
    backgroundColor:COLORS.BACK,
    borderColor: COLORS.BORD,
    height: 75,
    padding:5,
    marginTop:10,
    alignItems:"center"
  },
  view1: {
    flexDirection: "row",
alignSelf:"center"
    // height: 30,
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
    flex:0.5
    // marginTop: 5,
  },
  textStyle1: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    flex:1
    // marginLeft: 8,
    // marginTop: 5,
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
    padding: 8,
    // marginTop: 18,
    // width: 400,
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
        height:35,
        width:90,
        backgroundColor:COLORS.BOL,
        borderRadius:5,
        justifyContent:"center",
        // padding:5
        marginLeft:10
        // flex:0.5
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
