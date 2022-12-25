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
import { Divider } from "react-native-elements";
import { LogBox } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
const { KEYPOINT, DASHBOARD } = Constant.SCREENS;
const Birthchart = (props: any) => {
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

  // const [chart, setChart] = useState([
  //   { image: Images.CHIRON, title: "CHIRON",image1:Images.retro },
  //   { image: Images.SUN, title: "SUN" ,image1:Images.retro},
  //   { image: Images.NEPTUNE, title: "NEPTUNE",image1:Images.retro },
  //   // { image: Images.PLUTO, title: "PLUTO" ,image1:Images.retro},
  //   // { image: Images.SATURN, title: "SATURN",image1:Images.retro },
  // ]);

  const [moon,setMoon] =useState([
        {
          item:[
                {
                  leftimage:Images.CHIRON,
                  title:"CHIRON",
                  rightimage:Images.chironcal
                },

                {
                  leftimage:Images.SUN,
                  title:"SUN",
                  rightimage:Images.suncal
                },

                {
                  leftimage:Images.NEPTUNE,
                  title:"NEPTUNE",
                  rightimage:Images.neptunecal
                },
                {
                  leftimage:Images.PLUTO,
                  title:"PLUTO",
                  rightimage:Images.plutocal
                },
                {
                  leftimage:Images.SATURN,
                  title:"SATURN",
                  rightimage:Images.saturncal
                },
          ]
        },


        {
          item:[
                {
                  leftimage:Images.WHITEMOON,
                  title:"BLACKMOON",
                  rightimage:Images.blackmooncal
                },

                {
                  leftimage:Images.MOON,
                  title:"MOON",
                  rightimage:Images.mooncal
                },

                {
                  leftimage:Images.VENUS,
                  title:"VENUS",
                  rightimage:Images.venuscal
                },
                {
                  leftimage:Images.MERCURY,
                  title:"MERCURY",
                  rightimage:Images.mercurycal
                },
                {
                  leftimage:Images.EARTH,
                  title:"EARTH",
                  rightimage:Images.earthcal
                },
          ]
        },
        {
          item:[
                {
                  leftimage:Images.WHITEMOON,
                  title:"WHITEMOON",
                  rightimage:Images.whitemooncal
                },

                {
                  leftimage:Images.URANUS,
                  title:"URANUS",
                  rightimage:Images.uranuscal
                },

                {
                  leftimage:Images.MARS,
                  title:"MARS",
                  rightimage:Images.marscal
                },
                {
                  leftimage:Images.JUPITOR,
                  title:"JUPITER",
                  rightimage:Images.jupitercal
                },
                {
                  leftimage:Images.PROSERPINE,
                  title:"PROSERPINE",
                  rightimage:Images.proscal
                },
          ]
        },

  ])
  useEffect(() => {
    tabTop();
  }, [filter]);

//   useEffect(() => {
//     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
// }, [])

  const renderItem = ({ item, index }: any) => {
    const { name, image, screen, isSelected } = item;
    return (
      <TouchableOpacity style={styles.none} onPress={() => setFilter(name)}>
        <LinearGradient
          style={{ height: 40, marginHorizontal: 1 }}
          start={START_COORDS}
          end={END_COORDS}
          colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
        >
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              source={image}
              style={{
                marginLeft: 10,
                tintColor: isSelected ? COLORS.BLACK : COLORS.WHITE,
              }}
            />
            <Text
              style={{
                color: isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.DEMI,
                marginLeft: 5,
              }}
            >
              {name}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ( item, index ) => {
    const { name, title,image1 } = item;
    return (
      <View
        style={[
          styles.view,
          { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
        ]}
      >
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text12}>{title}</Text>
      </View>
    );
  };

  const renderItem3 = ({ item, index }: any) => {
    // const { image, title,image1 } = item;
    
    const subitem = moon[index].item
    console.log("newwwwwww",subitem)
    return (


      <View style={{}}>
        
        {subitem.map((element) => {
          return(
            <View style={{flexDirection:"row",flex:1}}>
              <View style={{alignItems:"center",marginTop:20,flex:1,}}>
                    <Image source={element.leftimage}/>
                    <Text style={{fontSize:14,color:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.MEDIUM,marginTop:5}}>{element.title}</Text>
                    </View>
                    <View>
                    <Image source={element.rightimage} style={{marginTop:22,alignSelf:"center",marginLeft:5}}/>
                 </View>
              </View>
          )
        })}
      </View>


    
        
    );
  };
  const ListHeader = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.NO,
          flexDirection: "row",
          height: 30,
          flex:1,
          marginTop: 15,
        }}
      >
        <Text style={styles.textStyle}>PLANTS</Text>
        <Text style={styles.textStyle1}>SYMBOLS</Text>
        <Text style={styles.textStyle2}>DETAILS</Text>
        <Text style={styles.textStyle3}>POSITIONS</Text>
        <Text style={styles.textStyle4}>DEGREES</Text>
      </View>
    );
  };

  const tabTop = () => {
    if (filter === "BIRTH CHART") {
      return <DASHBOARD />;
    } else if (filter === "KEYPOINT") {
      return <KEYPOINT />;
    }
  };
  const renderItem2 = ( item, index ) => {
    const { name, image, title, position, degree } = item;
    return (
      <View
        style={[
          styles.view1,
          { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
        ]}
      >
        <Text style={styles.text}>{name}</Text>
        <Image source={image} style={{ marginLeft: 39, marginTop: 5 }} />
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text2}>{position}</Text>
        <Text style={styles.text3}>{degree}</Text>
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
        //  numColumns={2}
      /> */}
      <View  style={styles.flt}>
      {birthdata.map((item,index)=>{
          return  renderItem1(item,index)
        })}
</View>
      <View style={{ flexDirection: "row" ,marginTop:20}}>
        <View style={styles.new}>
          <Text
            style={{
              color: COLORS.LEFT,
              fontFamily: FONT_FAMILIES.BOLD,
              fontSize: responsiveFontSize(3.5),
            }}
          >
            THE CHART
          </Text>
          <Text style={styles.tex}>
            given shows the 12 Rasi and the position of planetary bodies in each
            rasi.
          </Text>

          <LinearGradient
            style={{
              borderRadius: 5,
              // flex: 1,
              height: 40,
              width: 170,
              // alignSelf: "center",
              // marginLeft: 10,
              marginTop: 10,
            }}
            start={START_COORDS}
            end={END_COORDS}
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONT_FAMILIES.MEDIUM,
                  fontSize: responsiveFontSize(2.5),
                  textAlign: "center",
                  padding: 7,
                  color:COLORS.GRADIENT
                }}
              >
                Explore
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.chkr}>
          <Image source={Images.CHAKR} style={styles.img1} />
        </View>
      </View>

      <View style={styles.error}>
        <View style={{ flexDirection: "row" ,alignSelf:"center",}}>
          <LinearGradient
            style={{
              borderRadius: 5,
              height: 50,
              width: 150,
// alignItems:"center",
              marginTop: 15,
              // marginLeft: 24,
            }}
            start={START_COORDS}
            end={END_COORDS}
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >
            <View
              style={{ flexDirection: "row",alignItems:"center",padding:12,alignSelf:"center" }}
            >
              <Image source={Images.SOUTH} style={styles.south} />
              <Text style={styles.node}>SOUTH NODE</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            style={{
              borderRadius: 5,
              height: 50,
              width: 150,
              
              flexDirection: "row",
              marginTop: 15,
              marginLeft: 20,
            }}
            start={START_COORDS}
            end={END_COORDS}
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >
            <View
              style={{ flexDirection: "row",alignSelf:"center",alignItems:"center",padding:10 }}
            >
              <Image source={Images.NORTH} style={styles.south} />
              <Text style={styles.node}>NORTH NODE</Text>
            </View>
          </LinearGradient>
        </View>

        <FlatList 
        style={{marginTop:10,alignSelf:"center",padding:15}}
           horizontal
           ItemSeparatorComponent={  () =><Divider orientation="vertical"   style={{marginLeft:5,marginRight:5,borderColor:COLORS.DIVIDER}}/>}
           data={[1,2,3]}

          //  keyExtractor={(item,image)}
           renderItem={renderItem3}

         />
         
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.posit}>THE POSITION OF PLANETS</Text>

        {/* <FlatList
          ListHeaderComponent={ListHeader}
          style={styles.flt1}
          data={position}
          keyExtractor={(item) => item.name}
          renderItem={renderItem2}
        /> */}

        <View  style={styles.flt1}>

        <View
        style={{
          backgroundColor: COLORS.NO,
          flexDirection: "row",
          height: 30,
          flex:1,
          marginTop: 15,
        }}
      >
        <Text style={styles.textStyle}>PLANTS</Text>
        <Text style={styles.textStyle1}>SYMBOLS</Text>
        <Text style={styles.textStyle2}>DETAILS</Text>
        <Text style={styles.textStyle3}>POSITIONS</Text>
        <Text style={styles.textStyle4}>DEGREES</Text>
      </View>
          {position.map((item,index)=>{
          return  renderItem2(item,index)

          
        })}
      </View>
      </View>
    </ScrollView>
  );
};

export default Birthchart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
  },
  new1: {
    marginTop: 10,
    // paddingHorizontal:10
  },
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
  // margin:6
    // textAlign:"center"
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
    height: 180,
    width: 180,
    
  },
  chkr: {
    padding: 10,
    //  marginLeft:25,
    // flex: 1,
    marginTop: 8,
  },
  error: {
    borderRadius: 5,
    borderWidth: 1,
    // height: 500,
    borderColor: COLORS.BORD,
    // width: 370,
    marginTop:59,
    flex:1,
    // marginLeft: 15,
    // marginRight: 0,
    backgroundColor:COLORS.BACK
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
    flex:0.5,
    // textAlign:"center",
    alignSelf:"center"
    // justifyContent:"center"
    // marginTop: 5,
  },
  text1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    flex:1,
    // textAlign:"center",
    marginLeft: 40,
    // marginTop: 5,
  },
  text12: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(2),
    flex:1,
    // textAlign:"center",
    // justifyContent:"center"
    // marginLeft: 40,
    // marginTop: 5,
  },
  view4:{
     flex:1,
    // marginLeft:10
    // margin:5,
  
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

    // width: 370,
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
  },
  view: {
    flexDirection: "row",
 alignItems:"center",
 padding:8
    // height: 25,
    // flex:1
  },
  view1: {
    flexDirection: "row",
padding:5,
    height: 35,
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
    flex:0.4,
    marginLeft:5
  },
  textStyle1: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    // marginLeft: 8,
    flex:0.5,
    marginTop: 5,
  },
  textStyle2: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    // marginLeft: 10,
    flex:0.5,
    marginTop: 5,
  },
  textStyle3: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    // marginLeft: 25,
    marginTop: 5,
  },
  textStyle4: {
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.WHITE_NORMAL,
    fontSize: responsiveFontSize(1.8),
    marginLeft: 10,
    marginRight:5,
    marginTop: 5,
  },
  flt: {
    backgroundColor: COLORS.BACK,
    padding: 19,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BORD,
    marginTop: 10,
    // width: 370,
    flex:1,
    // marginLeft: 15,
    // alignSelf:"center"
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
    // marginLeft: 15,
    // alignSelf:"center"
    //  height:300
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
