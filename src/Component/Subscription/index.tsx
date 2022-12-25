import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import {
    COLORS,
    FONT_FAMILIES,
    FONT_SIZES,
    METRICS,
    START_COORDS,
    END_COORDS,
} from "../../Configration";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import NavHeader from '../../ReuableComponent/NavHeader';
import { Images } from "../../Assets";
import LinearGradient from "react-native-linear-gradient";
const { height, width } = Dimensions.get('screen');
import {SCREENS} from '../../Constant';


const { PAYMENT } = SCREENS
const Subscription = (props: any) => {
    const {navigation} = props
    const [position, setPosition] = useState([
        {
            name: "PLAN 1",
            title: "02-06-2021",
            position: " $200.47",
            image: Images.download,
        },
        {
            name: "PLAN 2",
            title: "02-06-2021",
            position: " $200.47",
            image: Images.download,
        },
        {
            name: "PLAN 3",
            title: "02-06-2021",
            position: " $200.47",
            image: Images.download,
        },
        {
            name: "PLAN 4",
            title: "02-06-2021",
            position: " $200.47",
            image: Images.download,
        },
        {
            name: "PLAN 5",
            title: "02-06-2021",
            position: " $200.47",
            image: Images.download,
        },
    ]);
    const ListHeader = () => {
        return (
            <View style={styles.headView}>
                <View style={styles.firstLine}>
                    <Text style={styles.textStyle}>PLAN DETAILS</Text>
                </View>
                <View style={styles.secondLine}>
                    <Text style={styles.textStyle1}>DATE OF PURCHASE</Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.textStyle2}>AMOUNT</Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.textStyle3}>INVOICE</Text>
                </View>

            </View>
            // <View
            //     style={{
            //         backgroundColor: COLORS.NO,
            //         flexDirection: "row",
            //         height: height / 25,
            //         marginTop: 15,
            //         // justifyContent: 'space-between'
            //     }}
            // >
            //     <Text style={styles.textStyle}>Plan Details</Text>
            //     <Text style={styles.textStyle1}>Date of Purchase</Text>
            //     <Text style={styles.textStyle2}>Amount</Text>
            //     <Text style={styles.textStyle3}>Invoice</Text>

            // </View>
        );
    };
    const renderItem2 = (item, index ) => {
        const { name, image, title, position, degree } = item;
        return (
            <View
                style={[
                    styles.view1,
                    { backgroundColor: index % 2 == 0 ? COLORS.NEW : "transparent" },
                ]}
            >
                <View style={styles.firstRow}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.secondLine}>
                    <Text style={styles.text1}>{title}</Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.text2}>{position}</Text>
                </View>
                <View style={styles.thirdLine}>
                    <Image source={image} style={{
                        // marginTop: 10,
                        // marginLeft: 10
                    }} />
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container} >
            <NavHeader title={'Oct 14th Thursday'} isRightAction={true} />
            <ScrollView style={{paddingHorizontal:10,marginTop:5}}>
            <LinearGradient
                style={{
                    borderRadius: 10,
                    // flex: 1,
                    height: 130,
                    // width: 390,
                    // alignSelf: "center",
                    marginTop: 10,
                }}
                start={START_COORDS}
                end={END_COORDS}
                // locations={[0.5,0.1,0.10]}
                colors={COLORS.GRAD}
            >
                <Text style={styles.buttonText1}>{`Your Personalized`}</Text>
                <Text style={styles.n}>Short and Long Transits In One Feed</Text>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.textt}>Get Started</Text>
                </TouchableOpacity>

                <View style={{  }}>
                    <Image source={Images.retro} style={styles.retro} />
                </View>
            </LinearGradient>

{/* <LinearGradient
          style={{
            borderRadius: 10,
            // flex: 1,
            marginTop:10,
            height: 110,
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
        </LinearGradient> */}


            <View style={styles.firstView}>
                
                    <View style={styles.subscriptionView}>
                        <View style={styles.subscriptionTextView}>
                            <Text style={styles.subscriptionText}>Subscription Plan </Text>
                        </View>
                        <View style={styles.flatListView}>
                            <View style={styles.subView}>
                                <View style={styles.currentFirstView}>
                                    <ImageBackground source={Images.firstcircle}
                                        style={styles.image}
                                    >
                                        <View style={styles.subimageTwo}>
                                            <Text style={styles.current}>BIG NEW</Text>
                                            <Text style={styles.current}>PLAN</Text>
                                        </View>
                                    </ImageBackground>

                                    {/* <View style={styles.subimageOne}>
                                            <View style={styles.subimageTwo}>
                                                <Text style={styles.current}>BIG NEW</Text>
                                                <Text style={styles.current}>PLAN</Text>
                                            </View>
                                        </View> */}

                                    <View style={styles.month}>
                                        <Text style={styles.monthText}>200/12 Month</Text>
                                    </View>
                                    <LinearGradient
                                        style={styles.buybutton}
                                        useAngle={true}
                                        angle={20}
                                        locations={[0, .3, .8, 1]}
                                        colors={COLORS.GRAD}>
                                        <TouchableOpacity onPress={()=> navigation.navigate(PAYMENT) }>
                                            <Text style={styles.buttonText}>{`Buy Now`}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                                <View style={styles.currentSecondView}>
                                    <View style={styles.secureTwoView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Plan haircut, workout and
                                            travel within the moon cycles</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Get your dose of positive energy with our daily affirmations</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                    {/* <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Plan haircut, workout and
                                            travel within the moon cycles</Text>
                                    </View> */}
                                    {/* <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Get your dose of positive energy with our daily affirmations</Text>
                                    </View> */}
                                    {/* <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View> */}
                                </View>
                            </View>
                            <View style={styles.subFirstView}>
                                <View style={styles.currentFirstView}>
                                    <View style={styles.image}>
                                        <View style={styles.subimageOne}>
                                            <ImageBackground source={Images.secondcircle}
                                                style={styles.image}

                                            >
                                                <View style={styles.subimageTwo}>
                                                    <Text style={styles.current}>MONTHLY</Text>
                                                    <Text style={styles.current}>PLAN</Text>
                                                    <View style={styles.rstwo}>
                                                        <Text style={styles.rsTwoText}>₹ 460.00</Text>
                                                    </View>

                                                </View>
                                            </ImageBackground>
                                            {/* <View style={styles.subimageTwo}>
                                                <Text style={styles.current}>MONTHLY</Text>
                                                <Text style={styles.current}>PLAN</Text>
                                                <View style={styles.rstwo}>
                                                    <Text style={styles.rsTwoText}>₹ 460.00</Text>
                                                </View>

                                            </View> */}
                                        </View>
                                    </View>
                                    <LinearGradient
                                        style={styles.buybutton}
                                        useAngle={true}
                                        angle={20}
                                        locations={[0, .3, .8, 1]}
                                        colors={COLORS.GRAD}>
                                        <TouchableOpacity onPress={()=> navigation.navigate(PAYMENT) }>
                                            <Text style={styles.buttonText}>{`subscribe now`}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                                <View style={styles.currentSecondView}>
                                    <View style={styles.secureTwoView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Plan haircut, workout and
                                            travel within the moon cycles</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Get your dose of positive energy with our daily affirmations</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.subFirstView}>
                                <View style={styles.currentFirstView}>
                                    <View style={styles.image}>
                                        <View style={styles.subimageOne}>
                                            <ImageBackground source={Images.thirdcircle}
                                                style={styles.image}

                                            >
                                                <View style={styles.subimageTwo}>
                                                    <Text style={styles.current}>{`YEARLY`}</Text>
                                                    <Text style={styles.current}>PLAN</Text>
                                                    <View style={styles.rstwo}>
                                                        <Text style={styles.rsTwoText}>₹ 960.00</Text>
                                                    </View>

                                                </View>
                                            </ImageBackground>

                                        </View>
                                    </View>
                                    <LinearGradient
                                        style={styles.buybutton}
                                        useAngle={true}
                                        angle={20}
                                        locations={[0, .3, .8, 1]}
                                        colors={COLORS.GRAD}>
                                        <TouchableOpacity onPress={()=> navigation.navigate(PAYMENT) }>
                                            <Text style={styles.buttonText}>{`subscribe now`}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                                <View style={styles.currentSecondView}>
                                    <View style={styles.secureTwoView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Plan haircut, workout and
                                            travel within the moon cycles</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>Get your dose of positive energy with our daily affirmations</Text>
                                    </View>
                                    <View style={styles.secureThreeView}>
                                        <Text style={styles.textOne}>12 mln downloads</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.currentView}>
                        <View style={styles.currentTextView}>
                            <Text style={styles.currentText}>Current Plan </Text>
                        </View>
                        <View style={styles.currentPlanView}>
                            <View style={styles.currentFirstView}>
                                <View style={styles.image}>
                                    <View style={styles.imageOne}>
                                        <ImageBackground source={Images.fourthcurcle}
                                            style={styles.image}

                                        >
                                            <View style={styles.imageTwo}>
                                                <Text style={styles.current}>CURRENT</Text>
                                                <Text style={styles.current}>PLAN</Text>
                                                <View style={styles.rs}>
                                                    <Text style={styles.rsText}>₹ 460.00</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>

                                    </View>
                                </View>
                                <LinearGradient
                                    style={styles.button}
                                    useAngle={true}
                                    angle={20}
                                    locations={[0, .3, .8, 1]}
                                    colors={COLORS.GRAD}>
                                    <TouchableOpacity  onPress={()=> navigation.navigate(PAYMENT) }>
                                        <Text style={styles.buttonText}>{`Active`}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View style={styles.currentSecondView}>
                                <View style={styles.secureView}>
                                    <Text style={styles.textOne}>12 mln downloads</Text>
                                </View>
                                <View style={styles.secureOneView}>
                                    <Text style={styles.textOne}>Plan haircut, workout and
                                        travel within the moon cycles</Text>
                                </View>
                                <View style={styles.secureOneView}>
                                    <Text style={styles.textOne}>Get your dose of positive energy with our daily affirmations</Text>
                                </View>
                                <View style={styles.secureView}>
                                    <Text style={styles.textOne}>12 mln downloads</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.noActiveView}>
                        <View style={styles.noActiveFirstView}>
                            <View style={styles.ActivePlan}>
                                <Text style={styles.subscriptionText}>No Active Plan</Text>
                             </View>
                             <View style={styles.noImg}>
                                 <View style={styles.bigView}>
                                    <Image source={Images.jupiter} style={{ marginRight:20,height:90,width:90 }} />
                                 </View>
                                <View style={styles.smallView}>
                                     <Text style={styles.textOne2}>
                                         Please subscribe to enjoy seemless insightful
                                     </Text>
                                     <Text style={styles.textOne2}>
                                         Astrolgy experience
                                     </Text>
                                     <LinearGradient
                                     style={styles.renewbutton}
                                     useAngle={true}
                                     angle={20}
                                     locations={[0, .3, .8, 1]}
                                     colors={COLORS.GRAD}>
                                     <TouchableOpacity onPress={()=> navigation.navigate(PAYMENT)}>
                                         <Text style={styles.buttonText}>{`Renew Plan`}</Text>
                                     </TouchableOpacity>
                                 </LinearGradient>

                               </View>
                             </View>
                         </View>
                     </View>
                    {/* <View style={styles.flatListOneView}>
                        <View style={styles.historyView}>
                            <Text style={styles.historyText}>{`Subscription History`}</Text>
                        </View>
                        <FlatList
                            ListHeaderComponent={ListHeader}
                            style={styles.flt1}
                            data={position}
                            keyExtractor={(item) => item.name}
                            renderItem={renderItem2}
                        />
                        <View style={styles.flt1}>
                              {position.map((item,index)=>{
                                  return renderItem2(item,index)
                              })}
                        </View>
                    </View> */}
               
            </View>

            </ScrollView>
        </View>
    )
}

export default (Subscription);

const styles = StyleSheet.create({
        renewbutton:{
        borderRadius: 10,
        // backgroundColor: COLORS.GRAY,
        marginTop: METRICS.MAR_10,
        height: 40,
        width: width / 2.7,
        justifyContent: "center",
        alignItems:'center',
        marginHorizontal: 10,
        // alignSelf: "center",
    },
        smallView: {
        // height: 110,
        // width: 235,
        flex:1,
        justifyContent: 'center',
        // alignItems: 'flex-start'
        // backgroundColor: 'cyan',
    },
    bigView: {
        height: 110,
        width: 130,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // flex:1
        marginTop:10
    },
    noImg: {
        // height: 110,
        flex:0.9,
        backgroundColor: '#604e03',
        borderRadius:5,
        //    justifyContent:'center',
        //    alignItems:'center',
        marginHorizontal: 20,
        flexDirection: 'row'
    },
        ActivePlan: {
        height: 40,
        // backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noActiveFirstView: {
        marginTop: 25,
        height: 190,
        // flex:1,
        backgroundColor: COLORS.BACK,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.BORD,
    },
    noActiveView: {
        height: 290,
        // flex:1
        // backgroundColor:'green'
    },
    thirdLine: {
        height: height / 20,
        width: width / 5,
        
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondLine: {
        height: height / 20,
        width: width / 3.5,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
    },
    firstRow: {
        height: height / 20,
        width: width / 5.5,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstLine: {
        height: height / 20,
        width: width / 5.5,
        // backgroundColor: 'orange',
        flex:0.5,
        justifyContent: 'center',
        marginLeft:5
        // alignItems: 'flex-end'
    },
    headView: {
        height: height / 20,
        flexDirection: 'row',
        backgroundColor: COLORS.NO
    },
    historyText: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        fontSize: FONT_SIZES.H5,
        color: COLORS.WHITE_NORMAL
    },
    historyView: {
        height: height / 18,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'green'
    },
    flatListOneView: {
        // height: height / 2.7,
        // marginHorizontal: 20,
        backgroundColor: COLORS.BACK2,
        marginTop: 15,
        borderRadius: 10,
        padding:10,
        borderWidth: 1,
        borderColor: COLORS.BORD,
    },
    flt1: {
        backgroundColor: COLORS.BACK,
        marginHorizontal: 10,
        // padding: 10,
        // marginTop: 10,
        // width: ,
        // marginLeft: 15,
        //  height:60
    },
    text: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,

    },
    text1: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
   
    },
    text2: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
   
    },
    text3: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
    },
    view1: {
        flexDirection: "row",
        height: 35,
        // backgroundColor:'green',
        // justifyContent: 'space-between'
    },
    flatlist: {
         flex:1,
        padding: 10,
        // height:10,
        // backgroundColor: "white",
    },
    textStyle: {
        fontFamily: FONT_FAMILIES.DEMI,
        color: COLORS.WHITE_NORMAL,
        fontSize: 11,
    },
    textOne2:{
        fontSize:13,
        fontFamily:FONT_FAMILIES.MEDIUM,
        color:COLORS.WHITE_NORMAL,
        // marginLeft:10
    },
    textStyle1: {
        fontFamily: FONT_FAMILIES.DEMI,
        color: COLORS.WHITE_NORMAL,
        fontSize: 11,
    },
    textStyle2: {
        fontFamily: FONT_FAMILIES.DEMI,
        color: COLORS.WHITE_NORMAL,
        fontSize: 11,
    },
    textStyle3: {
        fontFamily: FONT_FAMILIES.DEMI,
        color: COLORS.WHITE_NORMAL,
        fontSize: 11,
    },
    secureThreeView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: height / 18,
        width: "90%",
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.DASHBOARD
    },
    textOne: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        fontFamily: FONT_FAMILIES.MEDIUM,
        marginLeft: 10
    },
    secureTwoView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: height / 25,
        width: "90%",
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.DASHBOARD
    },
    buybutton: {
        borderRadius: 10,
        // backgroundColor: COLORS.GRAY,
        marginTop: METRICS.MAR_12,
        // height: height / 20,
        height:35,
        // width: width/3.5,
        justifyContent: "center",
        marginHorizontal: 10
        // alignSelf: "center",
    },
    monthText: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.HEAVY,

    },
    retro: {
        alignSelf: "flex-end",
        marginRight: "3%",
        height:100,
        width:103,
        marginTop:"-26%",
        
      },
    //   touch: {
    //     height: "28%",
    //     backgroundColor: COLORS.DASHBOARD,
    //     width: "35%",
    //     borderRadius: 5,
    //     marginLeft: "3%",
    //     marginTop: "-8%",
    //   },
    //   textt: {
    //     color: COLORS.GET,
    //     textAlign: "center",
    //     fontFamily: FONT_FAMILIES.MEDIUM,
    //     fontSize: responsiveFontSize(2.3),
    //     marginTop: "3.5%",
    //   },
    button: {
        color: COLORS.HOME,
        fontFamily: FONT_FAMILIES.MEDIUM,
        fontSize: 17,
        marginLeft: "3%",
      },
    buttonText1: {
        fontSize: responsiveFontSize(3.5),
        fontFamily: FONT_FAMILIES.MEDIUM,
        marginHorizontal: METRICS.MAR_10,
        color: COLORS.HOME,
        marginTop:10
      },
    month: {
        height: height / 30,
        width: width / 3.2,
        backgroundColor: COLORS.DASHBOARD,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 10
    },
    subimageOne: {
        // marginHorizontal:10,
        // height: height / 6.1,
        // width: width / 3.1,
        // backgroundColor: COLORS.DASHBOARD,
        borderRadius: 100,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    subimageTwo: {
        // marginHorizontal:10,
        height: height / 6.7,
        width: width / 3.5,
        //   backgroundColor: COLORS.WHITE_NORMAL,
        //   backgroundColor: 'green',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subFirstView: {
        marginTop: 10,
        // marginHorizontal: 20,
        // height: height / 3.3,
        height:240,
        width:350,
        // width: width / 1.2,
        backgroundColor: '#604e03',
        flexDirection: 'row',
        borderRadius: 10,
    },
    subView: {
        // marginHorizontal: 20,
        // height: height / 2.3,
        // width: width / 1.2,
        width:350,
        flex:1,
        height:300,
        backgroundColor: '#604e03',
        flexDirection: 'row',
        borderRadius: 10
    },
    rsTwoText: {
        color: COLORS.DASHBOARD,
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.MEDIUM,

    },
    rstwo: {
        height: height / 30,
        width: width / 5.5,
        backgroundColor: COLORS.BOL,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 5
    },
    rsText: {
        color: '#bf9030',
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.MEDIUM,

    },
    rs: {
        height: height / 30,
        width: width / 5.5,
        backgroundColor: COLORS.WHITE_NORMAL,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 5
    },
    current: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.BOLD,
        marginTop: 1
    },
    secureOneView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: height / 18,
        width: "90%",
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.BACK2
    },
    textOne: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        fontFamily: FONT_FAMILIES.MEDIUM,
        marginLeft: 10
    },
    secureView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: height / 25,
        width: "90%",
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.BACK2
    },
    currentSecondView: {
        height: height / 3.9,
        width: width / 2.11,
        alignSelf:"center"
        // backgroundColor: 'orange',
    },
    imageTwo: {
        // marginHorizontal:10,
        height: height / 6.7,
        width: width / 3.5,
        // backgroundColor: COLORS.WHITE_NORMAL,
        // backgroundColor: 'green',
        // borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageOne: {
        // marginHorizontal:10,
        marginLeft:10,
        height: height / 6.1,
        width: width / 3.1,
        backgroundColor: '#bf9030',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        // height: height / 5.14,
        // width: width / 2.9,
        // backgroundColor:'green',
        // borderRadius: 100,
        marginTop:10,
        height:150,width:150,
        // marginLeft:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 10,
        // backgroundColor: COLORS.GRAY,
        marginTop: METRICS.MAR_10,
        height: 40,
        width: width/2.7,
        justifyContent: "center",
        marginHorizontal: 10,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 16,
        color: COLORS.BLACK_LOGIN,
        textAlign: "center",
        fontFamily: FONT_FAMILIES.MEDIUM,
    },


    currentFirstView: {
        // height: height / 2.5,
        // width: width / 2.8,
        // backgroundColor: 'cyan',
        // marginTop: 4,
        // height:300
        alignSelf:"center",
        marginLeft: 5
    },
    currentPlanView: {
        // marginHorizontal: 20,
        height: height / 3,
        width: width / 1.1,
        alignSelf:"center",
        backgroundColor: COLORS.DASHBOARD,
        flexDirection: 'row'

    },
    currentText: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        fontSize: FONT_SIZES.H5,
        color: COLORS.WHITE_NORMAL
    },
    currentTextView: {
        height: height / 17,
        // backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    currentView: {
        marginTop: 20,
        // borderColor: COLORS.BORDER_COLOR,
        // borderRadius: 5,
        // borderWidth: 1,
        backgroundColor: COLORS.NO,
        height: height / 2.4,
        // marginHorizontal: 20,
        // justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10
    },
    flatListView: {
        // height: height / 0.903,
        backgroundColor: COLORS.BACK,
        alignItems: 'center',
        // width:370
    },
    subscriptionText: {
        fontFamily: FONT_FAMILIES.MEDIUM,
        fontSize: 22,
        color: COLORS.WHITE_NORMAL
    },
    subscriptionTextView: {
        height: height / 15,
        backgroundColor: COLORS.BACK,
        justifyContent: 'center',
        alignItems: 'center'
    },

    subscriptionView: {
        borderColor: COLORS.BORDER_COLOR,
        borderRadius: 5,
        borderWidth: 1,
        // height: 950,
        // margin:5,
        // padding:5,
marginBottom:10,
        // marginHorizontal: 20,
        backgroundColor: COLORS.DASHBOARD,
    },
    firstView: {
        // borderColor: COLORS.BORDER_COLOR,
        // borderRadius: 5,
        // borderWidth: 1,
        // height: height / 1.79,
        // marginHorizontal: 20,
        // backgroundColor: 'green',
        marginTop: 30,
        flex:1
    },
    // retro: {
    //     alignSelf: "flex-end",
    //     marginRight: "1%",
    // },
    touch: {
        height: "25%",
        backgroundColor: COLORS.DASHBOARD,
        width: "35%",
        borderRadius: 5,
        marginLeft: "3%",
        marginTop: "4%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textt: {
        color: COLORS.GET,
        // textAlign: "center",
        fontSize: 16,
        fontFamily: FONT_FAMILIES.MEDIUM,
        // marginTop: "3.5%",
    },
    n: {
        color: COLORS.HOME,
        fontFamily: FONT_FAMILIES.MEDIUM,
        fontSize: 16,
        marginLeft: "3%",
    },
    // buttonText1: {
    //     fontSize: FONT_SIZES.H6,
    //     fontFamily: FONT_FAMILIES.MEDIUM,
    //     marginHorizontal: METRICS.MAR_10,
    //     color: COLORS.HOME,
    //     marginTop: 16
    // },
    container: {
        // height: height / 1,
        flex:1,
        backgroundColor: COLORS.DASHBOARD,
        
    },
})











