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
import * as Constant from '../../../Constant';
// import Keypoint from '../Keypoint';
// import Birthchart from "../BirthChart";
// import Ascedants from "../Ascedants";
// import Planet from '../Planet';
// import House from '../House';


const { DASHBOARD } = Constant.SCREENS
const Planetplacement = (props: any) => {
  const { navigation } = props

  const [filter,setFilter] = useState('BIRTH CHART');
  
  const [birth, setBirth] = useState([
    { name: "D1 - RASHI", image: Images.birthchart,isSelected: true },
    { name: "D3 - DREKKANA", image: Images.ascedant, isSelected: false },
    { name: "D4 - DREKKANA", image: Images.keypoint, isSelected: false },
    { name: "D5 - NAVAMSHA", image: Images.planet, isSelected: false },
    { name: "D6 - DASHMSHA",image: Images.home2, isSelected: false },
  ]);
  const [position, setPosition] = useState([
    {
      name: "ASCENDANT",
      Sign:"Leo",
      House:"1",
      Relationship:"None",
      Karaka:"None",
      GrahaPlanetAspects:"Jupitor",
      RashiSignAspects:"Libra(su), Capricorn(Ke) ",
      PlanetinSamesign:"None"

    },
    
    {
        name: "SUN",
        Sign:"Leo",
      House:"1",
      Relationship:"None",
      Karaka:"None",
      GrahaPlanetAspects:"Jupitor",
      RashiSignAspects:"Libra(su), Capricorn(Ke) ",
      PlanetinSamesign:"None"
      },
      {
        name: "MOON",
        Sign:"Leo",
      House:"1",
      Relationship:"None",
      Karaka:"None",
      GrahaPlanetAspects:"Jupitor",
      RashiSignAspects:"Libra(su), Capricorn(Ke) ",
      PlanetinSamesign:"None"
      },
      {
        name: "MARS",
        Sign:"Leo",
      House:"1",
      Relationship:"None",
      Karaka:"None",
      GrahaPlanetAspects:"Jupitor",
      RashiSignAspects:"Libra(su), Capricorn(Ke) ",
      PlanetinSamesign:"None"
      },
      {
        name: "JUPITER",  
        Sign:"Leo",
        House:"1",
        Relationship:"None",
        Karaka:"None",
        GrahaPlanetAspects:"Jupitor",
        RashiSignAspects:"Libra(su), Capricorn(Ke) ",
        PlanetinSamesign:"None"
      },
      {
        name: "SATURN",  
        Sign:"Leo",
        House:"1",
        Relationship:"None",
        Karaka:"None",
        GrahaPlanetAspects:"Jupitor",
        RashiSignAspects:"Libra(su), Capricorn(Ke) ",
        PlanetinSamesign:"None"
      },
      {
        name: "RAHU",  
        Sign:"Leo",
      House:"1",
      Relationship:"None",
      Karaka:"None",
      GrahaPlanetAspects:"Jupitor",
      RashiSignAspects:"Libra(su), Capricorn(Ke) ",
      PlanetinSamesign:"None"
      },
    
  ]);

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
          style={{  height:40,width:135,marginHorizontal: 1,borderRadius:5,padding:10,marginTop:5}}
          start={START_COORDS}
          end={END_COORDS}
          colors={isSelected ? COLORS.GRAD2 : COLORS.GRAD1}
        >
       
            <Text style={{color: isSelected ? COLORS.DASHBOARD:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.DEMI,textAlign:"center",fontSize:13}}>{name}</Text>
        
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const renderItem2 = (item, index ) => {
    const { name } = item;
    return (
      <View
        style={styles.view1}  
      > 
        <Text style={styles.text5}>{name}</Text>
        <View style={{}}>
        {  Object.keys(item)
    .map ((key:any,index) => { 
      return  key !== "name" ? <View style={[styles.text3,{backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent"   }]}>
          <Text style={styles.inputBox}>{key}</Text>
          <Text style={styles.retro}>{item[key]}</Text>
        </View> : null
      
    })}
       </View>
        </View>
    );
  };
  return (
    
      <View style={styles.container}>
        <View style={styles.south}>
        <FlatList
        extraData={birth}
        horizontal
        data={birth}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      /> 
        </View>  
        <View style={{marginTop:-15}}>
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
        </View>
      </View>
   
  );
};

export default Planetplacement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    paddingHorizontal:10
    // backgroundColor: 'white',
    
    
  },
  text5:{
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
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
    marginLeft: 10,
  },
  none:{
   padding:3

  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    height:55,
    // marginTop:5,
    // marginLeft:10
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
   flexDirection:"row",
   padding:6
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
    // flexDirection: "row",

    // height: 30,
    // alignSelf:"center",
    flex:1,
    borderColor:COLORS.BORD,
    borderWidth:1,
    borderRadius:5,
    // height:530,
    // width:370,
    marginTop:20,
    backgroundColor:COLORS.BACK,
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
    flexDirection:"row",
    // flex:1,
    padding:10,
    
  },
  network2: {
    flexDirection:"row",
    // flex:1,
    padding:10,
    // alignSelf:"center",
  justifyContent:"center"
  },
  retro: {
   color:COLORS.WHITE_NORMAL,
   fontFamily:FONT_FAMILIES.DEMI,
   fontSize:15,
   flex:1,
  //  backgroundColor:COLORS.NEW
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
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 15,
    
    // flex:1s
    // marginTop:"3.5%",
  },
  button: {
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 15,
    flex:1
  },
  button2: {
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 15,
    flex:1
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
   color:COLORS.WHITE_NORMAL,
   fontFamily:FONT_FAMILIES.MEDIUM,
   flex:1,
   fontSize:15,
   marginLeft:8
    // paddingHorizontal: METRICS.MARGIN,
    // marginVertical: METRICS.PADDING_COMMON
  },
});
