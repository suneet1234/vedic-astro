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
} from "../../Configration";
import { LogBox } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../Assets";
import NavHeader from "../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from '../../Constant';
import Keypoint from '../Dashboard/Keypoint';
import Birthchart from "../Dashboard/BirthChart";
import Ascedants from "../Dashboard/Ascedants";
import Planet from '../Dashboard/Planet';
import House from '../Dashboard/House';


const { DASHBOARD } = Constant.SCREENS
const Dashboard = (props: any) => {
  const { navigation } = props

  const [filter,setFilter] = useState('BIRTH CHART');
  
  const [birth, setBirth] = useState([
    { name: "BIRTH CHART", image: Images.birthchart,isSelected: true },
    { name: "ASCEDANTS", image: Images.ascedant, isSelected: false },
    { name: "KEYPOINT", image: Images.keypoint, isSelected: false },
    { name: "PLANET", image: Images.planet, isSelected: false },
    { name: "HOUSES",image: Images.home3, isSelected: false },
  ]);
// useEffect (() =>{
//     tabTop()           

// },[filter]) 
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
 const selectActionTab = (item) =>{
       setFilter(item.name);
       const _birth = birth.map((element) =>{
         return{...element,isSelected:item.name === element.name}
       } )
       setBirth(_birth)
  //  item.isSelected = true
 }
 
  const renderItem = ({ item, index }: any) => {
    const { name, image,screen, isSelected } = item;
    return (
      <TouchableOpacity style={ styles.none}
      onPress={() => selectActionTab(item)} 
      >
        <LinearGradient
          style={{  height:35,marginHorizontal: 1,borderRadius:5}}
          start={START_COORDS}
          end={END_COORDS}
          colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
        >
          <View style={{ flexDirection: "row", justifyContent:"center",alignItems:"center" ,padding:8}}>
            <Image source={image} style={{ tintColor: isSelected ? COLORS.BLACK : COLORS.WHITE,height:20 }} />
            <Text style={{color: isSelected ? COLORS.GRADIENT:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.DEMI,marginLeft:5}}>{name}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

 

 
  


  const tabTop = () =>{
    
    if(filter === 'BIRTH CHART'){
      return <Birthchart/>
    }else if(filter === 'ASCEDANTS'){
      return <Ascedants/>
    }else if(filter === 'KEYPOINT'){
      return <Keypoint/>
    }else if(filter === 'PLANET'){
      return <Planet/>
    }else if(filter === 'HOUSES'){
      return <House/>
    }
  }
  

  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <NavHeader title={"Oct 14th Thursday"} isRightAction={true} />
<ScrollView style={styles.container1}>
      { filter === "BIRTH CHART" && <LinearGradient
          style={{
            borderRadius: 10,
           
            marginTop:10,
            height: 130,
          
          }}
          start={START_COORDS}
          end={END_COORDS}
         
          colors={COLORS.GRAD}
        >
          <Text style={styles.buttonText1}>{`Your Personalized`}</Text>
          <Text style={styles.button}>Short and Long Transits In One Feed</Text>
         

          <View style={{}}>
            <Image source={Images.retro} style={styles.retro} />
          </View>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textt}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>}

        <SafeAreaView>
        <View style={styles.south}>
        <FlatList
        extraData={birth}
        horizontal
        data={birth}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      /> 
        </View>

        </SafeAreaView>
  { tabTop ()}
        

       

  </ScrollView>

         
        
      </View>
   
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
   
    // backgroundColor: 'white', 
  },
  container1:{
    paddingHorizontal:10 ,
    marginTop:5 
  },
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
    marginLeft: 10,
  },
  none:{
    // marginTop: 15,
    //  marginLeft: 15,
    //  height:100
     marginLeft:6
  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    height:45,
    marginTop:28,
    // marginHorizontal:5
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
    width: 370,
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
    height: 150,

    width: 165,
    marginTop: 10,
    marginLeft: 15,
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
    //  flex:1,
    padding: 10,
    // height:10,
    // backgroundColor: "white",
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
    marginTop: 10,
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
    fontSize: responsiveFontSize(1.5),
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    marginLeft: 10,
    //  backgroundColor:COLORS.GRAD
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "3%",
    height:90,
    width:103,
    marginTop:"-12.5%"
  },
  touch: {
    height: "25%",
    backgroundColor: COLORS.DASHBOARD,
    width: "35%",
    borderRadius: 5,
    marginLeft: "3%",
    justifyContent:"center",
    marginTop: "-8%",
  },
  textt: {
    color: COLORS.GET,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 16,
    // marginTop: "3.5%",
  },
  button: {
    color: COLORS.HOME,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 16,
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
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_10,
    color: COLORS.HOME,
    marginTop:10,
  },
  inputBox: {
    height: 50,
    backgroundColor: "white",
    // paddingHorizontal: METRICS.MARGIN,
    // marginVertical: METRICS.PADDING_COMMON
  },
});
