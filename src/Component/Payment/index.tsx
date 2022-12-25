import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    COLORS,
    FONT_FAMILIES,
    FONT_SIZES,
    METRICS,
    START_COORDS,
    END_COORDS,
} from '../../Configration';
import { Images } from "../../Assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";
import NavHeader from '../../ReuableComponent/NavHeader';
const Payment = (props: any) => {
    const { navigation, loginAction, user, loading } = props;
    return (
        <View style={styles.mainContainer}>
            {/* <NavHeader isBack simpleBack title={'Payment'} /> */}
            <View style={styles.firstView}>
                <View style={styles.backArroeView}>
                    {/* <Text>h</Text> */}
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{justifyContent:"center",marginTop:50}}>
                        <Image source={Images.BackArrow} />
                    </TouchableOpacity>

                    {/* <Icon name="arrow-left" size={30} color="#900" /> */}
                </View>
                <View style={styles.paymentView}>
                    <Text style={styles.paymentText}>Payment</Text>
                </View>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.imgView}>
                    <View style={styles.imgTwoView}>
                        <Image source={Images.faCcPaypal}  />
                        <Image source={Images.Mastercard1} />
                        <Image source={Images.cibCcVisa} />
                        <Image source={Images.twemojiCreditCard} />
                    </View>
                </View>
                <View style={styles.amountView}>
                    <Text style={styles.amoutText}>Payment Amount</Text>
                    <Text style={styles.amouttText}>  ₹ 200</Text>
                </View>
                <View style={styles.topic}>
                    <Text style={styles.topicText}>Name on Card</Text>
                </View>
                <View style={styles.secureOneView}>
                    <TextInput
                        style={styles.secureOneInput}
                        // placeholder={"Add your Messege"}
                        // placeholderTextColor={COLORS.WHITE_NORMAL}
                        // multiline={true}
                        maxLength={200}
                        keyboardType={'default'}
                    // onChangeText={setEmail}
                    />
                </View>
                <View style={styles.topic}>
                    <Text style={styles.topicText}>Card Number</Text>
                </View>
                <View style={styles.secureOneView}>
                    <TextInput
                        style={styles.secureOneInput}
                        // placeholder={"Add your Messege"}
                        placeholderTextColor={COLORS.WHITE_NORMAL}
                        // multiline={true}
                        maxLength={200}
                        keyboardType={'default'}
                    // onChangeText={setEmail}
                    />
                </View>
                <View style={styles.twoView}>
                    <View style={styles.topicc}>
                        <Text style={styles.topicText}>Expiry Date</Text>
                        <View style={styles.secureTwoView}>
                            <TextInput
                                style={styles.secureOneInput}
                                // placeholder={"Add your Messege"}
                                placeholderTextColor={COLORS.WHITE_NORMAL}
                                // multiline={true}
                                maxLength={10}
                                keyboardType={'numeric'}
                            // onChangeText={setEmail}
                            />
                        </View>
                    </View>
                    <View style={styles.topiccc}>
                        <Text style={styles.topicText}>Security Code</Text>
                        <View style={styles.secureThreeView}>
                            <TextInput
                                style={styles.secureOneInput}
                                // placeholder={"Add your Messege"}
                                placeholderTextColor={COLORS.WHITE_NORMAL}
                                // multiline={true}
                                maxLength={10}
                                keyboardType={'numeric'}
                            // onChangeText={setEmail}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.topic5}>
                    <Text style={styles.topicText}>Zip/Postal Code</Text>
                </View>
                <View style={styles.secureOneView3}>
                    <TextInput
                        style={styles.secureOneInput}
                        // placeholder={"Add your Messege"}
                        placeholderTextColor={COLORS.WHITE_NORMAL}
                        // multiline={true}
                        maxLength={200}
                        keyboardType={'default'}
                    // onChangeText={setEmail}
                    />
                </View>
                <LinearGradient
                    style={styles.button}
                    useAngle={true}
                    angle={20}
                    locations={[0, .3, .8, 1]}
                    colors={COLORS.GRAD}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>{`Pay ₹ 200`}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAwareScrollView>
        </View>

    );
};

export default Payment;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        // backgroundColor: COLORS.GRAY,
        marginTop: 15,
        height: 65,
        width: 250,
        justifyContent: "center",
        alignSelf: "center",
    },
    buttonText: {
        fontSize: FONT_SIZES.H5,
        color: COLORS.BLACK_LOGIN,
        textAlign: "center",
        fontFamily: FONT_FAMILIES.MEDIUM,
    },
    topicText: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H2,
        fontFamily: FONT_FAMILIES.MEDIUM,
        // marginTop:10
    },
    twoView: {
        height: 75,
        // backgroundColor: 'pink',
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 15
    },
    topiccc: {
        // backgroundColor: 'orange',
        height: 70,
        width: 185,
        marginLeft: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    topicc: {
        // backgroundColor: 'cyan',
        height: 70,
        width: 155,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    topic: {
        // backgroundColor: 'pink',
        height: 35,
        margin: 6,
        // width: "42%",
        marginHorizontal: METRICS.MAR_19,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: 2
    },
    topic5: {
        // backgroundColor: 'pink',
        height: 35,
        marginTop:10,
        // width: "42%",
        marginHorizontal: METRICS.MAR_19,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        // marginTop: 2
    },
    securetwoInput: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        width: 160,
        // height: 80,
        marginLeft: 5,
        backgroundColor: COLORS.BLACK
    },
    secureOneInput: {
        color: COLORS.WHITE_NORMAL,
        fontSize:17,
        // height: 80,
        
        // textAlign:"center",
        // alignSelf:"center",
        margin:20,
        // justifyContent:"center",
        // alignItems:"center",
        marginLeft: 5,
        // backgroundColor:'red'
    },
    secureThreeView: {
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BORDER_COLOR,
        height: 60,
        width: 165,
        marginTop: 5,
        //    marginHorizontal: 20,
        backgroundColor: COLORS.BLACK,
    },
    secureTwoView: {
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BORDER_COLOR,
        height: 60,
        width: 155,
        marginTop: 5,
        //    marginHorizontal: 20,
        backgroundColor: COLORS.BLACK,
    },
    secureOneView: {
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BORDER_COLOR,
        height: 60,
        // flex:1,
        width: "90%",
        marginHorizontal: 20,
        backgroundColor: COLORS.BLACK,
    },
    secureOneView3: {
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BORDER_COLOR,
        height: 60,
        // flex:1,
        width: "90%",
        marginTop:5,
        marginHorizontal: 20,
        backgroundColor: COLORS.BLACK,
    },
    paymentText: {
        fontSize: 18,
        color: COLORS.WHITE_NORMAL,
        fontFamily: FONT_FAMILIES.MEDIUM,
        textAlign:"center",
        marginRight: 80
    },
    amouttText: {
        fontSize: FONT_SIZES.H1,
        color: COLORS.BLACK,
        fontFamily: FONT_FAMILIES.MEDIUM,
    },
    amoutText: {
        fontSize: FONT_SIZES.H2,
        color: COLORS.BLACK,
        fontFamily: FONT_FAMILIES.MEDIUM,
    },
    amountView: {
        marginTop: 15,
        height: 55,
        backgroundColor: COLORS.BOL,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10
    },
    imgTwoView: {
        height: 75,
        backgroundColor: COLORS.BLACK,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imgView: {
        // height: 5,
        borderRadius:5,
        borderWidth:1,
        backgroundColor: COLORS.BLACK,
        marginHorizontal: 10,

    },
    paymentView: {
        // height: 70,
        // backgroundColor: 'pink',
        // width: 300,
        flex:1,
        justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf:"center"
    },
    backArroeView: {
        height: 70,
        // backgroundColor: 'red',
        width: 80,
        // marginTop:12,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:13
    },
    firstView: {
        // height: 70,
        marginTop:40,
        flex:1,
        alignSelf:"center",
        // marginHorizontal: 10,
        // backgroundColor: 'orange',
        flexDirection: 'row'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.BLACK_TRANS
    },
});
