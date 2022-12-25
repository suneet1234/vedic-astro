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
import { Divider } from "react-native-elements";
const { KEYPOINT, DASHBOARD,REMEDIES } = Constant.SCREENS;
const Retrograde = (props: any) => {
  const { navigation,isSelected } = props;

  const[planet, setPlanet] = useState("RETROGRADE")
  
  const [position, setPosition] = useState([
    {
      name: "ASCEDANTS",
   
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    
    },
    
    {
        name: "SUN",
     
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      
      },
      {
        name: "MOON",
     
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      
      },
      {
        name: "MARS",
     
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      
      },
      {
        name: "JUPITOR",
     
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      
      },
    
  ]);
  
  

  
  const renderItem2 = (item, index ) => {
    const { name, image, title, end,position, degree } = item;
    return (
      <View
        style={styles.view1 }
        
      >
        {/* <Text style={styles.text}>{name}</Text> */}
        <Text style={styles.text5}>{name}</Text>
        <View style={styles.renderItem}>
        <Text style={styles.text}>{title}</Text>
        </View>
      
      </View>
    );
  };

  

  return (
     
     
      <View style={styles.container}>
          {/* <NavHeader  isBack simpleBack title={"RETROGRADE PLANET DETAILS"} isRightAction={true} /> */}
        
   
      
        <ScrollView>

         
        

        {/* <View style={styles.home}> */}
         
        {/* <FlatList 
        // ListHeaderComponent={ListHeader}
        // style={styles.flt2}
          data={position}
          keyExtractor={(item) => item.name}
          renderItem={renderItem2}
        /> */}

        {position.map((item,index)=>{
             return renderItem2(item,index)
        })}
        {/* </View> */}

     

         
        </ScrollView>
      </View>
   
  );
};

export default Retrograde;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    paddingHorizontal:10
  },
  flt2:{
          // alignSelf:"center",
          // alignItems:"center",
          // flex:1,
          // marginLeft:10
  },
  retro2:{
        height:30,
        width:29,
        marginLeft:10
  },
  raw:{
    fontFamily:FONT_FAMILIES.MEDIUM,
    color:COLORS.WHITE_NORMAL,
    fontSize:12,
    marginLeft:5
  },
  cale:{
    fontSize:28,
    fontFamily:FONT_FAMILIES.MEDIUM,
    color:COLORS.WHITE_NORMAL,
    textAlign:"center",
    marginTop:10
  },
  node: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.BOL,
    // marginLeft: 10,
  },
  none: {
    flexDirection:"row",
    
  },
  posit: {
    marginLeft:5
  },
  south: {
   fontSize:20,
   fontFamily:FONT_FAMILIES.DEMI,
   color:  COLORS.DASHBOARD ,
   textAlign:"center",
   justifyContent:"center",
   marginTop:7

  },
  raw2:{
    fontFamily:FONT_FAMILIES.MEDIUM,
    color:COLORS.WHITE_NORMAL,
    fontSize:12,
    marginLeft:5
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
    
    alignSelf:"center",
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
    flex:1,
    marginLeft:20,
    // marginRight:0
  },
  textStyle6: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    textAlign:"center",
    padding:10,
    // marginLeft: 8,
    // marginTop: 5,
    // marginRight:50

    
  },
  textStyle7: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    flex:1,
  },
  view3:{
            // justifyContent:"space-between",
            alignSelf:"center",
            alignItems:"center",
            marginTop:10,
            // height:70,
            width:100,
            flex:1,
            marginLeft:13
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
    fontSize: 18,
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
    textAlign:"center",
    // backgroundColor:"green"
    
  },
  text5: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    padding:5,
    backgroundColor:COLORS.NO,
    // flex:0.5,
    // marginLeft:10
    
    textAlign:"center",
    // // backgroundColor:"green"
    
  },
  textraw:{
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    // padding:5,
    flex:0.5,
    // marginLeft:10

  },
  text2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
    //  textAlign:"right",
    flex:0.2
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
    backgroundColor:COLORS.BACK,
    borderColor: COLORS.BORD,
    height: 55,
    width:370,
    padding:5,
    marginTop:10,
    
    alignItems:"center"
    // justifyContent:""
  },
  view1: {
    // flex:0.5,
    flex:1,
    // height:30,
    // width:380,
    // padding:5,
    // marginLeft:10,
    // flexDirection:"row",
    // alignItems:"center",
    // alignSelf:"center",
    borderColor:COLORS.BORD,
    borderWidth:1,
    borderRadius:5,
    height:250,
    // width:370,
    marginTop:17,
    backgroundColor:COLORS.BACK,
  },
  flatlist: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 25,
  },
  textStyle: {
    
    alignContent:"center",
  
  },
  textStyle1: {

    borderColor:COLORS.BORD,
    borderWidth:1,
    borderRadius:5,
    height:480,
    width:370,
    marginTop:30,
    backgroundColor:COLORS.BACK,
    // padding:10,
    alignSelf:"center"
  },
  textStyl:{
    borderColor:COLORS.BORD,
    backgroundColor:COLORS.BACK,
    borderWidth:1,
    borderRadius:5,
    height:80,
    width:370,
    marginTop:30,
    flexDirection:"row",
    alignSelf:"center",
    alignItems:"center",
    // marginLeft:30
  },
  textStyle2: {
     height:90,
     width:370,
     alignSelf:"center",
     marginTop:20,
     flexDirection:"row"
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
    flexDirection:"row",
    // borderRadius:5,
    // borderColor:COLORS.BORD,
    // borderWidth:1,
    width:370,
    // alignItems:"center",
    alignSelf:"center",
    justifyContent:"space-between",
    
    // marginTop: 5,
  },
  flt: {
    padding: 10,
    // marginTop: 18,
    alignItem:"center",
    width: 400,
  },
  flt1: {
    fontSize:25,
    fontFamily:FONT_FAMILIES.BOLD,
    color:COLORS.BOL,
    textAlign:"center",
    marginTop:10
    //  height:60
  },
  renderItem: {
    //  width:350,
    //  alignSelf:"center",
     padding:12,
     marginTop:10
  },
  network: {
        fontSize:28,
        fontFamily:FONT_FAMILIES.MEDIUM,
        color:COLORS.WHITE_NORMAL
        // flex:0.5
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "1%",
  },
  touch: {
     height:55,
     width:55
  },
  textt: {
    fontFamily:FONT_FAMILIES.MEDIUM,
    fontSize:22,
    color:COLORS.WHITE_NORMAL,
    textAlign:"center"
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
    fontFamily:FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  heading4: {
    fontSize: 10,
    color: COLORS.WHITE_NORMAL,
    fontFamily:FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  home: {
    borderColor:COLORS.BORD,
    borderWidth:1,
    borderRadius:5,
    height:530,
    width:370,
    marginTop:10,
    backgroundColor:COLORS.BACK,
    // padding:10,
    alignSelf:"center"
    // backgroundColor: COLORS.DASHBOARD,
  },
  home2: {
    borderColor:COLORS.BORD,
    borderWidth:1,
    borderRadius:5,
    height:270,
    width:300,
    marginTop:10,
    backgroundColor:COLORS.BACK,
   
    alignSelf:"center"
    
  },
  buttonText1: {
    fontSize: responsiveFontSize(4),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_10,
    color: COLORS.HOME,
  },
  inputBox: {
   flexDirection:"row",
   padding:7
  },
});
