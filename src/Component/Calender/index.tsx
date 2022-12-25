import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// import { COLORS, FONT_SIZES, METRICS } from '../../Configration';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  METRICS,
  START_COORDS,
  END_COORDS,
} from "../../Configration";
import NavHeader from "../../ReuableComponent/NavHeader";
import { Images } from "../../Assets";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import * as Constant from "../../Constant";
import { Divider } from "react-native-elements";
const { LUNAR_CALENDER } = Constant.SCREENS;
import LinearGradient from "react-native-linear-gradient";
const Calender = (props: any) => {
  const { navigation } = props;
  const [date1, setDate1] = useState(moment().format("MMMM D , YYYY"));
  const [arrow, setArrow] = useState();
  const [data2, setData2] = useState();
  const [isDisabale, setDisable] = useState(false);
  const [data1, setData1] = useState(0);

  const [birth, setBirth] = useState([
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "NEW MOON",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    {
      name: "FIRST QUARTER",
      image: Images.notomoon,
      title: "September7",
      time: "00:51 UTC",
    },
    
  ]);
  const [calender ,setCalender] = useState([ 

    {
      image1: Images.moon1,
    },
    {
      image1: Images.moon3,
    },
    {
      image1: Images.moon4,
    },
    {
      image1: Images.moon5,
    },
    {
      image1: Images.moon6,
    },
    {
      image1: Images.moon7,
    },
    {
      image1: Images.moon1,
    },
    {
      image1: Images.moon8,
    },
    {
      image1: Images.moon1,
    },
    {
      image1: Images.moon9,
    },
    {
      image1: Images.moon10,
    },
    {
      image1: Images.moon11,
    },
    {
      image1: Images.moon12,
    },

  ]);
  useEffect(() => {
    // console.log("nonono", data1);
    // setDisable(birth.length<data1)
    console.log("yesyeysyes", birth.length, data1);
    // console.log("omrrrr",data1>birth.length || birth.length<data1)
  }, [data1]);
  //   useEffect(() => {
  //     console.log("isdiasable", isDisabale);
  //     // setDisable(birth.length<data1)
  //     // console.log("omrrrr",birth.length<data1)
  //   },[isDisabale])

  //    const new_date = () => {
  //       if()
  //       startdate = moment().subtract(1).format('MMMM D , YYYY');
  //        }
  const renderItem3 = ({ item, index }: any) => {
    const { name, image, title, time, end, position, degree } = item;
    if (index >= data1 && index < data1 + 3) {
      return (
        <View style={[styles.view3, { backgroundColor: COLORS.NEW }]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={image}
              style={{ height: 70, width: 70, marginTop: 10 }}
            />

            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textraw}>{moment().format("MMMMD")}</Text>
            <Text style={styles.tex}>{moment().format("HH:MM")} UTC</Text>
          </View>

          <Text style={styles.text2}>{end}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <NavHeader title={"Oct14th Thursday"} isRightAction={true} />
      <ScrollView style={{paddingHorizontal:10,marginTop:5}}>
        <View style={{ marginTop: 10 }}>
          <LinearGradient
            style={{
              borderRadius: 10,
              flex: 1,
              height: 130,
            }}
            start={START_COORDS}
            end={END_COORDS}
            // locations={[0.5,0.1,0.10]}
            colors={COLORS.GRAD}
          >
            <Text style={styles.buttonText1}>{`Your Personalized`}</Text>
            <Text style={styles.button}>
              Short and Long Transits In One Feed
            </Text>

            <View style={{}}>
              <Image source={Images.retro} style={styles.retro} />
            </View>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.textt}>Get Started</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.textStyl}>
          <TouchableOpacity
            onPress={() => setDate1(moment(date1).subtract(1, "days"))}

            
          >
            <Image source={Images.backpress} style={styles.retro2} />
          </TouchableOpacity>

          <View
            style={{
              height: 50,
              // width: 280,
              flex:1,
              backgroundColor: COLORS.DASHBOARD,
              alignSelf:"center",
              marginLeft: 9,
            }}
          >
            <View
              style={{
                marginTop: 12,
                // justifyContent:"center",
                // alignSelf:"center"
              }}
            >
              <Text
                style={{
                  fontFamily: FONT_FAMILIES.MEDIUM,
                  color: COLORS.WHITE_NORMAL,
                  fontSize: 17,
                  
                  marginLeft: 10,
                  // flex: 1,
                }}
              >
                {moment(date1).format("MMMM D , YYYY")}
              </Text>
              {/* <Image source={Images.calender} /> */}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setDate1(moment(date1).add(1, "days"))}

            style={{margin:5}}
          >
            <Image source={Images.forward} style={styles.retro3} />
          </TouchableOpacity>
        </View>
        <Text style={styles.calend}>Moon Calender</Text>

        <View style={styles.view4}>
          <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 17,
                // flex: 1,
                marginLeft: 5,
              }}
            >
             {moment().format("DD")}
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 17,
                textAlign: "center",
                flex: 1,
              }}
            >
              {moment().format("MMMM")}
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 17,
                flex: 0,
                marginRight: 10,
              }}
            >
              {moment().format("YYYY")}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.NO,
              flex: 1,
              width: 350,
              alignSelf: "center",
              height: 27,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
                marginLeft: 5,
              }}
            >
              Sun
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
              }}
            >
              Mon
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
              }}
            >
              Tue
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
              }}
            >
              Wed
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
              }}
            >
              Thu
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                flex: 1,
              }}
            >
              Fri
            </Text>
            <Text
              style={{
                color: COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.MEDIUM,
                fontSize: 15,
                marginRight: 5,
              }}
            >
              Sat
            </Text>
          </View>
          <View style={{}}>
            <Calendar
              style={{
                width: 350,
                alignSelf: "center",
                flex: 1,
                
                backgroundColor: "transparent",
                borderColor:COLORS.WHITE_NORMAL,
                height: 340,
              }}
              theme={{
                backgroundColor: COLORS.DASHBOARD,

                calendarBackground: "transparent",
                // textSectionTitleColor: '#b6c1cd',
                // textSectionTitleDisabledColor: '#d9e1e8',
                // selectedDayBackgroundColor: '#00adf5',
                // selectedDayTextColor: '#ffffff',
                // todayTextColor: '#00adf5',
                // dayTextColor: '#2d4150',
                // textDisabledColor: '#d9e1e8',
                // dotColor: '#00adf5',
                // selectedDotColor: '#ffffff',
                // arrowColor: 'orange',
                // disabledArrowColor: '#d9e1e8',
                // monthTextColor: 'blue',
                // indicatorColor: 'blue',
                // textDayFontFamily: 'monospace',
                // textMonthFontFamily: 'monospace',
                // textDayHeaderFontFamily: 'monospace',
                // textDayFontWeight: '300',
                // textMonthFontWeight: 'bold',
                // textDayHeaderFontWeight: '300',
                // textDayFontSize: 16,
                // textMonthFontSize: 16,
                // textDayHeaderFontSize: 16
              }}
              dayComponent={({ date }: any) => {
                return (
                  <View
                    style={{
                      height: 60,

                      width: 60,
                      borderWidth: 1,
                      marginTop: -12,
                      // padding:10,
                      // borderLeftWidth:8,
                      // borderRightWidth:8,
                      // borderBottomEndRadius:15,
                      // alignSelf:"center",
                      alignItems: "center",
                      flexDirection: "row",
                      borderColor: "white",
                      backgroundColor: "black",
                    }}
                  >
                    {console.log("mydateeee",moment(date1).format("MMMM D , YYYY"))}
                    {console.log("mydateeee11111111",date)}
                   { moment(date1).format("YYYY-MM") ==   moment(date.dateString).format("YYYY-MM") && <View style={{flexDirection:"row"}}>
                    
                  
                    <Text
                      style={{
                        color: COLORS.WHITE_NORMAL,
                        fontSize: 17,
                        fontFamily: FONT_FAMILIES.DEMI,
                        textAlign: "left",
                        // margin:5
                      }}
                    >{`${date.day}`}</Text>
                     
                    <Image  source={Images.moon1} style={{marginLeft:10,alignSelf:"center"}}/>
                    </View>}
                  </View>
                );
              }}
             

            
              // Handler which gets executed on day long press. Default = undefined
             
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              // monthFormat={"yyyy MM"}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              // onMonthChange={(month) => {
              //   console.log("month changed", month);
              // }}
              // Hide month navigation arrows. Default = false
              hideArrows={true}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              // renderArrow={(direction) => <Arrow />}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={false}
              // showWeekNumbers={true}
              // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              // disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
              // firstDay={1}
              // current={setDate1}

              // Hide day names. Default = false
              hideDayNames={true}
              // Show week numbers to the left. Default = false
              // showWeekNumbers={true}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              // onPressArrowLeft={(subtractMonth) => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              // onPressArrowRight={(addMonth) => addMonth()}
              // Disable left arrow. Default = false
              // disableArrowLeft={true}
              // Disable right arrow. Default = false
              // disableArrowRight={true}
              // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
              // disableAllTouchEventsForDisabledDays={true}
              // Replace default month and year title with custom one. the function receive a date as parameter
              renderHeader={(date) => {
                return (
                  <View style={{}}>
                   
                  </View>
                );
              }}
             
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" ,flex:1,alignSelf:"center",marginTop:-30}}>
          {
            <TouchableOpacity
              disabled={data1 == 0}
              style={styles.touch1}
              onPress={() => setData1(data1 - 3)}
            >
              <Ionicons name="chevron-back" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          }
          <View style={styles.home2}>
            <View style={styles.inputBox}>
              <Image source={Images.calender} style={styles.img3} />
              <View style={styles.posit}>
                <Text style={styles.heading}>{moment().format("MMMM")}</Text>
                <Text style={styles.heading4}>{moment().format("YYYY")}</Text>
              </View>
            </View>
            <Text style={styles.textt1}>Full Moon and New Moon </Text>

            <View style={{justifyContent:"center",}}>
              <FlatList
                scrollEnabled={false}
                horizontal
                data={birth}
                keyExtractor={(item, index) => item.name}
                renderItem={renderItem3}
              />
            </View>
          </View>

          {
            <TouchableOpacity
             
              disabled={!(data1 < birth.length && birth.length-data1 >3)}
             
              style={styles.touch1}
              onPress={() =>  setData1(data1 + 3) }
            >
          
              <Ionicons name="chevron-forward" size={30} color={COLORS.WHITE} />
            </TouchableOpacity>
          }
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(LUNAR_CALENDER)}>
          <Text style={styles.lunar}>Lunar Calender</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.GREEN,
    backgroundColor: COLORS.DASHBOARD,
  },
  touch1: {
    marginTop: 180,

    height: 24,
  },
  lunar: {
    fontFamily: FONT_FAMILIES.DEMI,
    fontSize: 18,
    color: COLORS.BOL,
    textAlign: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 13,
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  posit: {
    marginLeft: 5,
  },
  heading4: {
    fontSize: 10,
    color: COLORS.WHITE_NORMAL,
    fontFamily: FONT_FAMILIES.MEDIUM,
    // marginLeft:15,
    // marginRight:10
    // justifyContent:"center"
    // textAlign: "center",
  },
  textt1: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 22,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    padding: 5,
  },
  south: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.DEMI,
    color: COLORS.DASHBOARD,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  view3: {
    // justifyContent:"center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
    height: 150,
    width: 94,
    // flex:1,
    marginLeft: 7,
  },
  calend: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 25,
    color: COLORS.WHITE_NORMAL,
    textAlign: "center",
    padding: 10,
  },
  retro2: {
    height: 31,
    width: 30,
    // flex:1,
    marginLeft: 5,
  },
  retro3: {
    height: 32.5,
    width: 32,
    // flex:1,
    marginLeft: 5,
  },
  textStyl: {
    borderColor: COLORS.BORD,
    backgroundColor: COLORS.BACK,
    borderWidth: 1,
    borderRadius: 5,
    height: 80,
    flex: 1,
    justifyContent:"center",
    padding:5,
    // alignSelf:"center",
    // width: 370,

    marginTop: 15,
    flexDirection: "row",
    // alignSelf: "center",
    alignItems: "center",
  },
  buttonText1: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.MEDIUM,
    marginHorizontal: METRICS.MAR_10,
    color: COLORS.HOME,
    marginTop:10
  },
  textraw: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 15,
  },
  tex: {
    fontSize: 12,
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.NONE,
  },
  button: {
    color: COLORS.HOME,
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 16,
    marginLeft: "3%",
  },
  retro: {
    alignSelf: "flex-end",
    marginRight: "3%",
    height: 100,
    width:103,
    marginTop: "-13.5%",
  },
  touch: {
    height: "25%",
    backgroundColor: COLORS.DASHBOARD,
    width: "35%",
    justifyContent:"center",
    borderRadius: 5,
    marginLeft: "3%",
    marginTop: -35,
  },
  textt: {
    color: COLORS.GET,
    textAlign: "center",
    fontFamily: FONT_FAMILIES.MEDIUM,
    fontSize: 16,
    // marginTop: "3.5%",
  },
  text: {
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.WHITE_NORMAL,
    fontSize: 14,

    marginTop: 10,
  },

  home2: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    height: 260,
    // flex: 0.7,
    flex: 1,
    // width: 335,
    marginTop: 55,
    // padding:10,
    // padding:20,

    backgroundColor: COLORS.BACK,

    // alignSelf: "center",
  },
  view4: {
    borderColor: COLORS.BORD,
    borderWidth: 1,
    borderRadius: 5,
    // height: 400,
    flex: 1,
     
    // width: 370,
    // marginTop: 5,
    backgroundColor: COLORS.BACK,
    
    // alignSelf: "center",
  },
  inputBox: {
    flexDirection: "row",
    padding: 7,
  },
  img3: {
    height: 20,
    width: 20,
    // marginLeft: 25,

    alignSelf: "center",
    // marginTop: 20,
  },
});
