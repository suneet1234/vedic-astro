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
import "./withConnect";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../Assets";
import NavHeader from "../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../Constant";
import Keypoint from "../Keypoint";
import Planetremedies from "../Retrograde/Remedies";
import Planetdetail from "../Fullmoon/Fullmooninformation";
// import Retrograde from '../RetrogradePlanet'
// import Remedies from '../Remedies'
// import Planet from '../Planet';
// import House from '../House';

const { DASHBOARD } = Constant.SCREENS;
const Dashboard = (props: any) => {
  const { navigation } = props;

  const [filter, setFilter] = useState("DETAILS");
const [isSelected,setSelected] = useState(true)
  const [birth, setBirth] = useState([
    { name: "DETAILS", isSelected: true },
    { name: "REMEDIES", isSelected: false },
  ]);

  const selectActionTab = (item) => {
    setFilter(item.name);
    const _birth = birth.map((element) => {
      return { ...element, isSelected: item.name === element.name };
    });
    setBirth(_birth);
    //  item.isSelected = true
  };

  const renderItem = ({ item, index }: any) => {
    const { name, image, screen, isSelected } = item;
    return (
      <TouchableOpacity
        style={styles.none}
        onPress={() => selectActionTab(item)}
      >
        <LinearGradient
          style={{
            height: 40,
            width: 180,
            marginHorizontal: 1,
            borderRadius: 5,
          }}
          start={START_COORDS}
          end={END_COORDS}
          colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
        >
          <View
            style={{ flexDirection: "row", marginTop: 10, alignSelf: "center" }}
          >
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

  const tabTop = () => {
    if (isSelected) {
      return <Planetdetail />;
    } else  {
      return <Planetremedies />;
    }
  };

  return (
    <View style={styles.container}>
      <NavHeader
        isBack
        simpleBack
        title={"FULL MOON INFORMATION"}
        isRightAction={true}
      />

      <ScrollView>
        <View style={styles.south}>
          {/* <FlatList
        extraData={birth}
        horizontal
        data={birth}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />  */}
          <TouchableOpacity
            style={styles.none}
            onPress={() =>  setSelected(true)}
          >
            <LinearGradient
              style={{
                height: 40,
                width: 180,
                marginHorizontal: 1,
                borderRadius: 5,
              }}
              start={START_COORDS}
              end={END_COORDS}
              colors={isSelected ? COLORS.GRAD : COLORS.GRAD1}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    color: isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.DEMI,
                    marginLeft: 5,
                  }}
                >
                  {`DETAILS`}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.none}
            onPress={() =>  setSelected(false)}
          >
            <LinearGradient
              style={{
                height: 40,
                width: 180,
                marginHorizontal: 1,
                borderRadius: 5,
              }}
              start={START_COORDS}
              end={END_COORDS}
              colors={!isSelected ? COLORS.GRAD : COLORS.GRAD1}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    color: !isSelected ? COLORS.GRADIENT : COLORS.WHITE_NORMAL,
                    fontFamily: FONT_FAMILIES.DEMI,
                    marginLeft: 5,
                  }}
                >
                  {`REMEDIES`}
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
    //  height:100,
    // alignSelf:"center",
    // width:370,
    padding: 3,
    justifyContent: "space-between",
    // alignItems:"center"
  },
  posit: {
    color: COLORS.MED,
    fontSize: responsiveFontSize(3.5),
    fontFamily: FONT_FAMILIES.DEMI,
    textAlign: "center",
    paddingTop: 10,
  },
  south: {
    height: 55,
    marginTop: 10,
    padding: 3,
    alignSelf: "center",
    flexDirection:"row"
    // justifyContent:"space-between",
    // marginLeft:15
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
