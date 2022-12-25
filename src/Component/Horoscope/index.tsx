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
import * as Constant from "../../Constant";
import PersonalHoroscope from "../Horoscope/Personalhoroscope";
import AllHoroscope from "../Horoscope/Allhoroscope";

const { DASHBOARD } = Constant.SCREENS;
const Dashboard = (props: any) => {
  const { navigation } = props;

  const [filter, setFilter] = useState("PERSONAL HOROSCOPE");
const [isSelected,setSelected] = useState(true)
  const [birth, setBirth] = useState([
    { name: "PERSONAL HOROSCOPE", isSelected: true },
    { name: "ALL", isSelected: false },
  ]);

  const selectActionTab = (item) => {
    setFilter(item.name);
    const _birth = birth.map((element) => {
      return { ...element, isSelected: item.name === element.name };
    });
    setBirth(_birth);
  };

  const renderItem = ({ item, index }: any) => {
    const { name, image, screen, isSelected } = item;
    return (
      <TouchableOpacity
        style={{ flex: 1, marginHorizontal: 5 }}
        onPress={() => selectActionTab(item)}
      >
        <LinearGradient
          style={{
            height: 40,

            // marginHorizontal: 1,
            borderRadius: 5,
            // marginLeft:10,
            flex: 1,

            alignItems: "center",
          }}
          start={START_COORDS}
          end={END_COORDS}
          colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text
              style={{
                color: isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                fontFamily: FONT_FAMILIES.DEMI,
                textAlign: "center",
                textAlignVertical: "center",
                // flex:1
                // marginTop: 12,
              }}
            >
              {name}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const tabTop = () => {
    if (isSelected) {
      return <PersonalHoroscope />;
    } else  {
      return <AllHoroscope />;
    }
  };

  return (
    <View style={styles.container}>
      <NavHeader title={"Oct 14th Thursday"} isRightAction={true} />
      <ScrollView style={{ paddingHorizontal: 10,marginTop:15 }}>
        <LinearGradient
          style={{
            borderRadius: 10,
            // flex: 1,
            height: 130,
            // width: 370,
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

          <View style={{}}>
            <Image source={Images.retro} style={styles.retro} />
          </View>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textt}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.south}>
          {/* <FlatList
            // style={{backgroundColor:"white"}}
            // contentContainerStyle={{flexGrow:1}}
            extraData={birth}
            // horizontal
            numColumns={2}
            data={birth}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
          /> */}
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: 5 }}
            onPress={() => setSelected(true)}
          >
            <LinearGradient
              style={{
                height: 40,

                // marginHorizontal: 1,
                borderRadius: 5,
                // marginLeft:10,
                flex: 1,

                alignItems: "center",
              }}
              start={START_COORDS}
              end={END_COORDS}
              colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.DEMI,
                    textAlign: "center",
                    textAlignVertical: "center",
                    // flex:1
                    // marginTop: 12,
                  }}
                >
                  {`PERSONAL HOROSCOPE`}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: 5 }}
            onPress={() => setSelected(false)}
          >
            <LinearGradient
              style={{
                height: 40,

                // marginHorizontal: 1,
                borderRadius: 5,
                // marginLeft:10,
                flex: 1,

                alignItems: "center",
              }}
              start={START_COORDS}
              end={END_COORDS}
              colors={!isSelected ? COLORS.GRAD : COLORS.GRAD1}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: !isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.DEMI,
                    textAlign: "center",
                    textAlignVertical: "center",
                    // flex:1
                    // marginTop: 12,
                  }}
                >
                  {`ALL`}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {tabTop()}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DASHBOARD,
    // paddingHorizontal:10
    // backgroundColor: 'white',
  },
  node: {
    fontSize: responsiveFontSize(2),
    fontFamily: FONT_FAMILIES.MEDIUM,
    color: COLORS.GRADIENT,
    marginLeft: 10,
  },
  none: {
    // marginTop: 15,
    //  marginLeft: 15,
    //  height:100
    // margin: 1,
    // alignSelf:"center",
    // justifyContent:"space-between",
    // flex: 1,
  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    height: 46,
    marginTop: 18,
    flex: 1,
    // backgroundColor:"white"
    // margin:5,
    flexDirection: "row",
    // justifyContent: "space-between",
    // marginLeft:15
    // alignSelf: "center",
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
    height: 100,
    width: 105,
    marginTop: "-13.5%",
  },
  touch: {
    height: "25%",
    backgroundColor: COLORS.DASHBOARD,
    width: "35%",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: "3%",
    marginTop: "-10%",
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
    marginTop: 10,
  },
  inputBox: {
    height: 50,
    backgroundColor: "white",
    // paddingHorizontal: METRICS.MARGIN,
    // marginVertical: METRICS.PADDING_COMMON
  },
});
