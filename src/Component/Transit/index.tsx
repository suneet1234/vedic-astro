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
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../Assets";
import NavHeader from "../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from '../../Constant';


import Transitinform from '../Transit/TransitInformation';
import { Colors } from "react-native/Libraries/NewAppScreen";


const { DASHBOARD ,TRANSITINFORMATION,RETROGRADE,FULLMOON,PLANET_PLACEMENT,HOUSE_PLACEMENT} = Constant.SCREENS
const Transit = (props: any) => {
  const { navigation } = props

  const [birth, setBirth] = useState([
    {  image: Images.TRANSIT,name: "TRANSIT INFORMATION",isSelected: true,image1:Images.ARROW ,screen:TRANSITINFORMATION},
    {  image: Images.retro3, name: "RETROGRADE PLANET DETAILS ",isSelected: false ,image1:Images.ARROW,screen:RETROGRADE},
    {  image: Images.HOUSE, name: "FULL MOON IONFRMATION",isSelected: false,image1:Images.ARROW,screen:FULLMOON },
    {  image: Images.HOUSE,name: "PLANET PLACEMENT DETAILS", isSelected: false ,image1:Images.ARROW,screen:PLANET_PLACEMENT},
    { image: Images.PLANETINFORM, name: "HOUSE PLACEMENT DETAILS",isSelected: false,image1:Images.ARROW,screen:HOUSE_PLACEMENT },
  ]);

  const renderItem = (item, index) => {
    const { name, image,screen,image1, isSelected } = item;
    return (
      <TouchableOpacity style={ styles.none}
      onPress={() => navigation.navigate(screen)} 
      >
       
          <View   style={styles.posit}>
            <Image source={image} style={{ height:60,width:60 }} />
            <Text style={styles.textStyle1}>{name}</Text>
            <Image source={image1} style={{}} />
          </View>
      
      </TouchableOpacity>
    );
  };

  return (
    
      <View style={styles.container}>
        <NavHeader title={"Oct 14th Thursday"} isRightAction={true} />
<ScrollView style={{paddingHorizontal:10,marginTop:5}}>
       <LinearGradient
          style={{
            borderRadius: 10,
            // flex: 1,
            height: 130,
            // width: 370,
            marginTop:10,
            // alignSelf: "center",
            // marginLeft: 10,
          }}
          start={START_COORDS}
          end={END_COORDS}
          // locations={[0.5,0.1,0.10]}
          colors={COLORS.GRAD}
        >
          <Text style={styles.buttonText1}>{`Your Personalized`}</Text>
          <Text style={styles.button}>Short and Long Transits In One Feed</Text>
          

          <View style={{  }}>
            <Image source={Images.retro} style={styles.retro} />
          </View>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textt}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
        
        {/* <FlatList
        extraData={birth}
       style={styles.south}
        data={birth}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />  */}
      <View style={styles.south}>
    {birth.map((item,index) =>{
      return renderItem(item,index)
    })}
      </View>

</ScrollView>
      </View>
   
  );
};

export default Transit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    // backgroundColor: 'white',
    
    
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

  },
  posit: {
   padding:10,
    flexDirection:"row",
    borderRadius:8,
    borderWidth:1,
    marginTop:10,
    alignItems:"center",
    backgroundColor:COLORS.BACK,
    borderColor:COLORS.BORD
  },
  south: {
      // width:370,
      flex:1,
  
      // marginLeft:15,
      // alignSelf:"center",
      marginTop:15
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
    padding: 10,
  },
  textStyle: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginTop: 5,
  },
  textStyle1: {
    color: COLORS.WHITE_NORMAL,
    fontFamily:FONT_FAMILIES.MEDIUM,
    flex:1,
    fontSize:18,
    padding:20
    // textAlign:"center"
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
    height:100,
    width:105,
    marginTop:"-13.5%"
  },
  touch: {
    height: "25%",
    backgroundColor: COLORS.DASHBOARD,
    width: "35%",
    borderRadius: 5,
    marginLeft: "3%",
    marginTop: "-10%",
    alignItems:"center",
    justifyContent:"center",
    // alignSelf:"center"
    
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
    marginTop:10
  },
  inputBox: {
    height: 50,
    backgroundColor: "white",
    // paddingHorizontal: METRICS.MARGIN,
    // marginVertical: METRICS.PADDING_COMMON
  },
});
