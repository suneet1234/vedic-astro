import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  METRICS,
} from "../../../Configration";
import "./withConnect";
import moment from "moment";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Images } from "../../../Assets";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { colors } from "react-native-elements";
const LunarCalender = () => {
  const [moon, setMoon] = useState([
    {
      name: "20 - January - 2021",
      image: Images.lunarcalender,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
      name: "20 - January - 2021",
      //   image: Images.notomoon,
      image1: Images.mon1,
      title: "Capricorn",
      title1: "New Moon",
      time: "05:00 am",
    },
    {
        name: "20 - January - 2021",
        //   image: Images.notomoon,
        image1: Images.mon1,
        title: "Capricorn",
        title1: "New Moon",
        time: "05:00 am",
      },
      {
        name: "20 - January - 2021",
        //   image: Images.notomoon,
        image1: Images.mon1,
        title: "Capricorn",
        title1: "New Moon",
        time: "05:00 am",
      },
      {
        name: "20 - January - 2021",
        //   image: Images.notomoon,
        image1: Images.mon1,
        title: "Capricorn",
        title1: "New Moon",
        time: "05:00 am",
      },
      {
        name: "20 - January - 2021",
        //   image: Images.notomoon,
        image1: Images.mon1,
        title: "Capricorn",
        title1: "New Moon",
        time: "05:00 am",
      },
  ]);

  const renderItem = ({ item, index }: any) => {
    console.log("renderitem", item);
    const { name, image, title, image1, title1, time } = item;

    return (
      <View style={{ margin:10}}>
        <Text
          style={{
            color: COLORS.WHITE_NORMAL,
            fontSize: 10,
            padding: 5,
            // marginTop:5,
            fontFamily: FONT_FAMILIES.BOLD,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            padding: 8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.BORD,
            alignSelf: "center",
            width: 90,
            height: 80,
            alignItems: "center",
          }}
        >
          <Image source={image1} style={{ height: 50, width: 50 }} />
          <Text
            style={{
              color: COLORS.WHITE_NORMAL,
              fontSize: 13,
              fontFamily: FONT_FAMILIES.MEDIUM,
            }}
          >
            {title}
          </Text>
        </View>
      <View style={{alignItems:"center",margin:3}}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: FONT_FAMILIES.MEDIUM,
            color: COLORS.WHITE_NORMAL,
            
          }}
        >
          {title1}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONT_FAMILIES.MEDIUM,
            color: COLORS.BOL,
            
          }}
        >
          {time}
        </Text>
        </View>
      </View>
    );
  };
  const ListHeader = () => {
    return (
      <View>
        <View
          style={{
            //   backgroundColor: COLORS.NO,
            flexDirection: "row",
            //   height: 30,
            margin:10,
            paddingTop:15,
            //   alignSelf:"center",
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <Text style={styles.text1}>NEW MOON</Text>
          <Text style={styles.text2}>FIRST QUARTER</Text>
          <Text style={styles.text3}>FULL MOON</Text>
          <Text style={styles.text4}>LAST QUARTER</Text>
        </View>
        <View style={{position:"absolute",marginTop:50,alignSelf:"center"}}>
        <Image  source={Images.lunarcalender} style={styles.img} />
        </View>
        <Text style={{color:COLORS.WHITE_NORMAL,marginTop:110,fontFamily:FONT_FAMILIES.DEMI,fontSize:26,textAlign:"center"}}>Lunar Calendar</Text>
        <Text style={{color:COLORS.BOL,textAlign:"center",fontSize:23,fontFamily:FONT_FAMILIES.DEMI}}>  {moment().format("YYYY")}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavHeader
        isBack
        simpleBack
        title={"Oct 14th Thursady"}
        isRightAction={true}
      />
     
      <View style={styles.sub}>
        <Text style={styles.text}>Moon Calender</Text>

        {/* <View style={styles.view1}> */}

        {/* <Text>ffffff</Text> */}

{/* 
        <Calendar
              
           
             
             

           
   
             
            /> */}


        {/* </View> */}
        <FlatList
          // scrollEnabled={false}
          style={{ borderWidth: 1, borderRadius: 5, borderColor: COLORS.BORD ,padding:1,marginTop:15,backgroundColor:COLORS.BACK1}}
          ListHeaderComponent={ListHeader}
          numColumns={3}
          data={moon}
          // keyExtractor={(item, index) => item.name}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default LunarCalender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.GREEN,
  },
  text1: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 13,
    flex: 0.9,
  },
  view3: {
    padding: 150,
    backgroundColor: "orange",
    margin: 10,
    flex: 1,
  },
  img: {
    width: 360,
    alignSelf: "center",
    height:180,
    // position:"relative",
    // flex:1
  },
  text2: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 13,
    flex: 1,
  },
  text3: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 13,
    flex: 0.9,
  },
  text4: {
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 13,
  },
  heading: {
    fontSize: FONT_SIZES.H1,
    color: COLORS.WHITE,
    textAlign: "center",
  },
  view1: {
    borderColor: COLORS.BORD,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.BACK,
    //   width:370,
    //   padding:15,
    //   height:800,
    flex: 1,
    //   alignSelf:"center"
  },
  text: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 25,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    marginTop: 20,
  },
  sub: {
    flex: 1,
    paddingHorizontal:10,
    backgroundColor: COLORS.DASHBOARD,
  },
});
