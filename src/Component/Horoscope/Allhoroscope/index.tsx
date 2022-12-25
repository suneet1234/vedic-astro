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
// import PersonalHoroscope from '../../Personalhoroscope';
import Swiper from "react-native-swiper";


const { DASHBOARD } = Constant.SCREENS
const Dashboard = (props: any) => {
  const { navigation } = props

  const [filter,setFilter] = useState('PERSONAL HOROSCOPE');
  
  const [birth, setBirth] = useState([
    { name: "AQUARIUS", image:Images.aquarius,title:"(Jan1-Jan20)",isSelected: true },
    { name: "PRISCES", image:Images.prisces,title:"(Jan1-Jan20)", isSelected: false },
    { name: "ARIES", image:Images.aries,title:"(Jan1-Jan20)", isSelected: false },
    { name: "TAURUS", image:Images.taurus, title:"(Jan1-Jan20)",isSelected: false },
    { name: "GEMINI", image:Images.gemini,title:"(Jan1-Jan20)", isSelected: false },
    { name: "CANCER", image:Images.cancer, title:"(Jan1-Jan20)",isSelected: false },
    { name: "LEO", image:Images.leo,title:"(Jan1-Jan20)", isSelected: false },
    { name: "VIRGO", image:Images.virgo4,title:"(Jan1-Jan20)", isSelected: false },
    { name: "LIBRA", image:Images.libra2,title:"(Jan1-Jan20)", isSelected: false },
    { name: "SCORPIO", image:Images.scorpio,title:"(Jan1-Jan20)", isSelected: false },
    { name: "SAGITARUS", image:Images.sagitarius,title:"(Jan1-Jan20)", isSelected: false },
    { name: "CAPRICORN", image:Images.capricorn, title:"(Jan1-Jan20)",isSelected: false },
  ]);

 const selectActionTab = (item) =>{
       setFilter(item.name);
       const _birth = birth.map((element) =>{
         return{...element,isSelected:item.name === element.name}
       } )
       setBirth(_birth)
  
 }
 
  const renderItem = ({ item, index }: any) => {
    const { name, image,screen, title,isSelected } = item;
    return (
      <TouchableOpacity style={ styles.none}
      onPress={() => selectActionTab(item)} 
      >
          <View style={{backgroundColor:isSelected ? COLORS.BOL :COLORS.BACK,height:150,width:120,alignItems:"center",justifyContent:"center",borderRadius:5}}>
            <Image source={image} 
            style={{tintColor:isSelected ? COLORS.WHITE_NORMAL : COLORS.BOL}}
            />
            <Text style={{color:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.DEMI,textAlign:"center",fontSize:17,marginTop:30}}>{name}</Text>
            <Text style={styles.title1}>{title}</Text>
          </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
                   <Text style={styles.textStyle3}>All Horoscopes</Text>
        <View style={styles.south}>
   
        <FlatList
        showsHorizontalScrollIndicator={false}
        style={{}}
        extraData={birth}
        horizontal
        data={birth}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      /> 
        </View>  

        <View style={styles.north}>
           <Image source={Images.personalhoro} style={styles.img2}/>
          <View style={{marginLeft:20,}}>
           <Text style={styles.dull}>
               YOUR HOROSCOPE
           </Text>
           <Text style={styles.touch}>Today</Text>
           </View>
       </View>


       <Swiper style={styles.wrapper}  
 dot={<View style={{ backgroundColor: '#5a5353', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
 activeDot={<View style={{backgroundColor:COLORS.BOL, width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}></View>}
      >
        <View style={styles.view2}>
          <View style={styles.new2}>
            <View style={{ flex: 0.95, marginTop: 10 }}>
 
              <Text style={styles.textno}>CANCER TODAY</Text>
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
            <View style={{ flex: 0.95, marginTop: 10 }}>
              <Text style={styles.textno}>CANCER TODAY</Text>
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
            <View style={{ flex: 0.95, marginTop: 10 }}>
              <Text style={styles.textno}>CANCER TODAY</Text>
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
            <View style={{ flex: 0.95, marginTop: 10 }}>
              <Text style={styles.textno}>CANCER TODAY</Text>
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

      </Swiper>
       <View style={styles.view1}>
         <Text style={styles.textStyle4}>WEEKLY HOROSCOPE</Text>
         <Text style={styles.textStyle21}> (21-Oct-22-Oct)</Text>
         <Text style={styles.textStyle1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum</Text>
       </View>
      </View>
      </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    // backgroundColor: 'white',
    
    
  },
  img2:{
    height:40,
    width:50,
    marginTop:7
 },
 none2: {
  color: COLORS.BOL,
  fontSize: 17,
  fontFamily: FONT_FAMILIES.MEDIUM,
  textAlign:"center",
  marginTop:2
},
textno:{
  fontFamily: FONT_FAMILIES.BOLD,
  color: COLORS.BOL,
  fontSize: 22,
  marginLeft: 7,
  // marginTop: 5,
},
 dull:{
    fontFamily:FONT_FAMILIES.BOLD,
    color:COLORS.BOL,
    fontSize:23
},
new: {
  height: 70,
  width: 70,
  // marginTop: 10,
  // marginLeft: 15,
  // flex: 0,
},
wrapper: { height:400,},
  north:{
      // backgroundColor:"white",
    marginTop:25,
    // width:360,
    // alignSelf:"center",
    marginLeft:30,
    flexDirection:"row",
    // justifyContent:"center"
    // flex:1
  },
  title1:{
       fontFamily:FONT_FAMILIES.MEDIUM,
       color:COLORS.NONE,
       fontSize:14
  },
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
    marginLeft: 10,
  },
  none:{
    // marginTop: 15,
     marginLeft: 10,
    // margin:
    //  height:100,
    // justifyContent:"space-between"
    // flex:1
    // backgroundColor:"white"
    
  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    // height:45,
    marginTop:20,
    
    // flex:1,
    // alignSelf:"center",
    // backgroundColor:"white",
    // justifyContent:"center",
    height:150
  },
  new7: {
    color: COLORS.BOL,
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  new9: {
    color: COLORS.BOL,
    fontSize: 17,
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  new3: {
    color: COLORS.BOL,
    fontSize: 20,
    fontFamily: FONT_FAMILIES.DEMI,
  },
  new5: {
    color: COLORS.WHITE_NORMAL,
    fontSize: 19,
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginTop:5
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
  new2: {
    flexDirection: "row",
    height: 80,
    width: 370,
    alignSelf: "center",
    padding: 15,
  },
  textStyle2: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    marginLeft: 5,
    // marginTop: 5,
  },
  textStyle21: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 18,
    // marginLeft: 5,
    // marginTop: 5,
  },
  // textStyle3: {
  //   fontFamily: FONT_FAMILIES.BOLD,
  //   color: COLORS.BOL,
  //   fontSize: 23,
  //   // marginLeft: 25,
  //   marginTop: 5,
  // },
  view2: {
    borderRadius: 5,
    borderWidth: 1,
    height: 380,
    borderColor: COLORS.BORD,
    // width: 370,
    // alignSelf: "center",
    marginLeft:6,
    backgroundColor: COLORS.BACK,
    padding: 12,
    marginTop: 15,
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
  // new: {
  //   height: 150,

  //   width: 165,
  //   marginTop: 10,
  //   marginLeft: 15,
  //   flex: 1,
  // },
  view: {
    flexDirection: "row",

    height: 25,
  },
  view1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    height:200,
    // width:370,
    alignSelf:"center",
    backgroundColor:COLORS.BACK,
    padding:20,
    marginTop:20
  },
  flatlist: {
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:COLORS.WHITE_NORMAL,
    alignSelf:"center"
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
    marginTop:10,
    marginLeft:5
  },
  // textStyle2: {
  //   fontFamily: FONT_FAMILIES.MEDIUM,
  //   color: COLORS.WHITE_NORMAL,
  //   fontSize: 18,
  //   // marginLeft: 10,
  //   // marginTop: 5,
  // },
  textStyle3: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 25,
    textAlign:"center",
    // marginLeft: 25,
    marginTop: 18,
  },
  textStyle4: {
    fontFamily: FONT_FAMILIES.BOLD,
    color: COLORS.BOL,
    fontSize: 23,
    // marginLeft: 25,
    // marginTop: 5,
  },
  flt: {
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
    fontFamily:FONT_FAMILIES.MEDIUM,
    fontSize:20,
    color:COLORS.WHITE_NORMAL
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
