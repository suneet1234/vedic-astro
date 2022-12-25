import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Linking, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import {
    COLORS,
    FONT_FAMILIES,
    FONT_SIZES,
    METRICS,
    START_COORDS,
    END_COORDS,
} from "../../Configration";
import "./withConnect";
import NavHeader from '../../ReuableComponent/NavHeader';
// import Picker from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import SelectBox from 'react-native-multi-selectbox'
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import LinearGradient from "react-native-linear-gradient";
import DropDownPicker from 'react-native-dropdown-picker';
import { SCREENS, VALIDATE_FORM } from "../../Constant";
import { showMessage } from 'react-native-flash-message';
import _ from 'lodash';
import { Images } from "../../Assets";
const { height, width } = Dimensions.get('screen');
const Contact = () => {
    // const [email, setEmail] = useState(''); 
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Report for Incorrect Information', value: 'Report for Incorrect Information' },
        { label: 'Issue with Subscription/Purchase', value: 'Issue with Subscription/Purchase' },
        { label: 'Promote your service with us', value: 'Western Astrology' },
        { label: 'Suggest New Features', value: 'Suggest New Features' },
        { label: 'Other', value: 'Other' }
    ]);
    const [selectedLanguage, setSelectedLanguage] = useState();

    // const validation = () => {
    //     var message = ""
    //     if (_.isEmpty(email.trim())) {
    //         message = VALIDATE_FORM.EMAIL
    //     }
    //     if (!_.isEmpty(message)) {
    //         showMessage({ message: message, type: 'danger' })
    //         return false
    //     }
    //     return true
    // }

    const userLogin = async () => {
        if (validate()) {
               alert('Message send')
        }
    }
    {/************************Validation State's***************************/ }

    const [Email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [value, setValue] = useState(null);
    const [errorTopic, setErrorTopic] = useState(null);
    const _topicvalidate = tpc => {
        console.log(tpc);
        if (tpc === null) {
            setErrorTopic('Please choose one Topic');
        } else {
            setErrorTopic(null);
        }
    };
    const _emailvalidate = mail => {
        var emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (mail === '') {
            setErrorEmail('Please enter email');
        } else if (!emailRegex.test(mail)) {
            setErrorEmail('Please enter valid Email ID');
        } else {
            setErrorEmail(null);
        }
    };
    const _messagevalidate = msg => {
        var messageRegex =
            /^[a-zA-Z'\- \u00c0-\u017e]+$/;
        if (msg === '') {
            setErrorMessage('Please enter Message');
        } else if (!messageRegex.test(msg)) {
            setErrorMessage('Please enter valid Message');
        } else {
            setErrorMessage(null);
        }
    };

    const validate = () => {
        let flag = true;
        if (Email === '') {
            setErrorEmail('*Please enter email');
            flag = false;
        }
        if (message === '') {
            setErrorMessage('*Please enter Message');
            flag = false;
        }
        if (value === null) {
            setErrorTopic('*Please choose Topic');
            flag = false;
        }

        return flag;
    };
    {/************************Validation State's***************************/ }

    return (
        <View style={styles.container} >
            <NavHeader isBack simpleBack title={'Contact Us'} isRightAction={true} />
            <ScrollView style={{ zIndex:1,paddingHorizontal:10,marginTop:10 }}>
                <LinearGradient
                    style={{
                        borderRadius: 10,
                        // flex: 1,
                        // paddingHorizontal:10,
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

                    <View style={{}}>
                        <Image source={Images.retro} style={styles.retro} />
                    </View>
                </LinearGradient>
                <View style={styles.address}>
                    <View style={styles.addressFirst}>
                        <View style={styles.bookImage}>
                            {/* <Text>dvfdghfhgsdchc</Text> */}
                            <Image source={Images.BookOne}
                            // style={styles.Bookstyles}
                            />
                        </View>
                        <View style={styles.addressSecond}>
                            <Text style={styles.addressText}>Address</Text>
                            <Text style={styles.wholeAddress}>Unit No. 650, 6th Floor,
                                Tower A, Spaze iTechPark,
                                Sector-49, Sohna Road, Gurgaon.</Text>
                        </View>
                    </View>
                    <View style={styles.addressThird}>
                        <View style={styles.number}>
                            <Text onPress={() => { Linking.openURL(`tel:+91-800-00-000-00`) }} style={styles.numberText}>{`+91-800-00-000-00`}</Text>
                        </View>
                        <View style={styles.emailView}>
                            <Text onPress={() =>{Linking.openURL('mailto:info@unitastro.com?subject=SendMail&body=Description')}} style={styles.numberText}>{`info@unitastro.com`}</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.textOne}>
                    <Text style={styles.thnx}>{`Thanks For Contacting!`}</Text>
                    <Text style={styles.leave}>{`Leave A Message And We Will Get Back To`}</Text>
                    <Text style={styles.leaveOne}>{`You As Soon As Possible`}</Text>
                </View>

                {/* <View style={styles.big}> */}
                <View style={styles.topic}>
                    <Text style={styles.topicText}>Topic</Text>
                </View>
                <View style={styles.DropView}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        // setValue={setValue}
                        setValue={txt => {
                            _topicvalidate(txt), setValue(txt)
                        }}
                        showTickIcon={false}
                        setItems={setItems}
                        placeholder="-------------  Select Topic ------------------"
                        dropDownDirection='BOTTOM'
                        // showTickIcon={true}
                        // showArrowIcon={false}
                        ArrowUpIconComponent={({ style }) =>
                            <Image source={Images.down} />}
                        ArrowDownIconComponent={({ style }) =>
                            <Image source={Images.up} />}
                        iconContainerStyle={{
                            marginRight: 10,
                            backgroundColor: 'red'
                        }}
                        arrowIconStyle={{
                            width: 30,
                            height: 30,
                            // backgroundColor:'red',
                            // backgroundColor:'white',
                        }}
                        closeIconStyle={{
                            width: 30,
                            height: 30
                        }}
                        placeholderStyle={{
                            color: COLORS.WHITE_NORMAL,
                            fontSize: FONT_SIZES.H4,
                            fontFamily: FONT_FAMILIES.MEDIUM,
                        }}
                        style={{
                            // backgroundColor: "crimson",
                            height: 53,
                            backgroundColor:COLORS.BACK,
                            // borderRadius: 50,
                            borderColor: COLORS.BACK,
                            // borderBottomColor:COLORS.BORDER_COLOR,
                            // backgroundColor: 'green',
                            // width: width / 

                        }}
                        textStyle={{
                            color: COLORS.WHITE_NORMAL,
                            fontSize: FONT_SIZES.H4,
                            fontFamily: FONT_FAMILIES.MEDIUM,
                        }}
                        containerStyle={{
                            borderRadius: 5,
                            borderWidth: 0.1,
                            borderColor: COLORS.BACK2,
                            // borderBottColor: COLORS.BORDER_COLOR,
                        }}
                        dropDownContainerStyle={{
                            backgroundColor:COLORS.BACK2
                        }}
                    />
                </View>
                {errorTopic != null ? (
                            <View
                                style={{
                                    height: 20,
                                    width: 370,
                                    // backgroundColor:'green',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start',
                                    marginHorizontal: 20
                                }}>
                                <Text
                                    style={{
                                        color: 'red',
                                        fontSize: 13,
                                        marginLeft: 10
                                        // fontFamily: 'Roboto-Regular',
                                    }}>
                                    {errorTopic}
                                </Text>
                            </View>
                        ) : null}

                <View style={styles.topic1}>
                    <Text style={styles.topicText}>Email</Text>
                </View>
                <View style={styles.secureView}>
                    <TextInput
                        style={styles.secureInput}
                        placeholder={"Enter Your Email Address"}
                        placeholderTextColor={COLORS.WHITE_NORMAL}
                        maxLength={100}
                        keyboardType={'default'}
                        // onChangeText={setEmail}
                        onChangeText={txt => {
                            _emailvalidate(txt), setEmail(txt)
                        }}
                    />
                </View>
                {errorEmail != null ? (
                    <View
                        style={{
                            height: 20,
                            width: 370,
                            // backgroundColor:'green',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 13,
                                marginLeft: 10
                                // fontFamily: 'Roboto-Regular',
                            }}>
                            {errorEmail}
                        </Text>
                    </View>
                ) : null}
                {/* </View> */}
                <View style={styles.topic2}>
                    <Text style={styles.topicText}>Message</Text>
                </View>
                <View style={styles.secureOneView}>
                    <TextInput
                        style={styles.secureOneInput}
                        placeholder={"Add your Messege"}
                        placeholderTextColor={COLORS.WHITE_NORMAL}
                        multiline={true}
                        textAlignVertical={"top"}
                        maxLength={200}
                        keyboardType={'default'}

                        onChangeText={txt => {
                            _messagevalidate(txt), setMessage(txt)
                        }}
                    />
                </View>
                {errorMessage != null ? (
                    <View
                        style={{
                            height: 20,
                            width: 370,
                            // backgroundColor:'green',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            marginHorizontal: 20
                        }}>
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 13,
                                marginLeft: 10
                                // fontFamily: 'Roboto-Regular',
                            }}>
                            {errorMessage}
                        </Text>
                    </View>
                ) : null}

                <View style={styles.lastView}>
                    <LinearGradient
                        style={styles.buttonn}
                        useAngle={true}
                        angle={20}
                        locations={[0, .3, .8, 1]}
                        colors={COLORS.GRAD}>
                        <TouchableOpacity onPress={() => userLogin()}>
                            <Text style={styles.buttonText}>{`Send Messege`}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>


        </View>
    );
};

export default Contact;
const styles = StyleSheet.create({
    lastView: {
        height: height / 8,
        flex: 1,
        marginTop: 20,
        marginBottom: 5,
        // padding:10,
        // alignSelf:"center"
        // backgroundColor:'green'
    },
    // scroolView: {
    //     height: height / 1.47,
    //     // flex:1,
    //     backgroundColor: 'green'
    // },
    Bookstyles: {
        height: '90%',
        width: '100%'
    },
    // big: {
    //     // marginTop:10
    //     backgroundColor:'orange',
    //     height: height / 3.2
    // },
    buttonn: {
        borderRadius: 10,
        // backgroundColor: COLORS.GRAY,
        // marginTop: METRICS.MAR_10,
        height: responsiveHeight(6.5),
        // marginLeft: 50,
        alignSelf: "center",
        width: 300,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonText: {
        fontSize: FONT_SIZES.H5,
        color: COLORS.BLACK_LOGIN,
        // textAlign: "center",

        fontFamily: FONT_FAMILIES.MEDIUM,
    },
    DropView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: METRICS.MAR_55,
        width: "90%",
        // marginTop: METRICS.MAR_10,
        alignSelf: "center",
        zIndex:10,
    },
    topic2: {
        // backgroundColor: 'pink',
        // height: "10%",
        // margin:5,
        // width: "42%",
        height: 30,
        marginHorizontal: METRICS.MAR_19,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 3
        // marginTop: 30
        // marginBottom:10,

    },
    secureOneInput: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        height: 80,
        flex: 1,
        marginLeft: 5,
        // backgroundColor: 'red'
    },
    secureOneView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: 80,
        width: "90%",
        // margin: 5,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:COLORS.BACK
        // alignSelf: "center",
        // backgroundColor:'pink'
    },
    secureView: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: COLORS.BORDER_COLOR,
        height: METRICS.MAR_55,
        width: "90%",
        // marginTop: METRICS.MAR_10,
        alignSelf: "center",
        backgroundColor:COLORS.BACK
    },

    secureInput: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        height: METRICS.MAR_55,
        flex: 1,
        marginLeft: 5
    },
    topicText: {
        color: COLORS.WHITE_NORMAL,
        fontSize: 19,
        fontFamily: FONT_FAMILIES.MEDIUM,
        // marginTop:10
    },
    topic: {
        // backgroundColor: 'pink',
        // height: "10%",
        // margin:5,
        // width: "42%",
        height: 30,
        marginHorizontal: METRICS.MAR_19,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // marginTop: 5
        // marginBottom:10,
    },
    topic1: {
        // backgroundColor: 'pink',
        height: 30,
        // margin:5,
        // width: "42%",
        marginHorizontal: METRICS.MAR_19,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 3
    },
    leaveOne: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.BOOK,
    },
    leave: {
        marginTop: 6,
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H3,
        fontFamily: FONT_FAMILIES.BOOK,
    },
    thnx: {
        color: COLORS.WHITE_NORMAL,
        fontSize: 21,
        fontFamily: FONT_FAMILIES.DEMI,
        marginTop: 20
    },
    textOne: {
        // backgroundColor:'orange',
        marginTop:10,
        height: height / 8,
        // width: "42%",
        marginHorizontal: METRICS.MAR_19,
    },
    numberText: {
        color: COLORS.WHITE_NORMAL,
        fontSize: FONT_SIZES.H4,
        fontFamily: FONT_FAMILIES.DEMI,
    },
    emailView: {
        backgroundColor: COLORS.DASHBOARD,
        height: 38,
        // marginTop: 20,
        width: 132,
        // flex:1,
        // marginHorizontal: METRICS.MAR_19,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        //  marginRight:10
        // marginTop: 20
    },
    number: {
        backgroundColor: COLORS.DASHBOARD,
        height: 38,
        // marginTop: 20,
        width: 132,
        // flex:1,
        // marginHorizontal: METRICS.MAR_19,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressThird: {
        // backgroundColor: 'pink',
        // height: 100,
        // width: "100%",
        flex: 0.75,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 30
        // marginTop: 10
    },
    wholeAddress: {
        fontSize: 12,
        fontFamily: FONT_FAMILIES.BOOK,
        marginHorizontal: METRICS.MAR_10,
        color: COLORS.HOME,
    },
    addressText: {
        fontSize: 20,
        fontFamily: FONT_FAMILIES.MEDIUM,
        marginHorizontal: METRICS.MAR_10,
        color: COLORS.HOME,
        marginTop: 10
    },
    addressSecond: {
        // backgroundColor: 'pink',
        marginTop: 5,
        flex: 1,
        height: "90%",
        width: "75%",
        // flexDirection: 'row'
    },
    email: {
        marginVertical: METRICS.MAR_18,
        marginHorizontal: METRICS.MAR_19,
        height: METRICS.MAR_19,
        width: METRICS.MAR_25,
        // backgroundColor:'red'
    },
    bookImage: {
        // backgroundColor: 'orange',
        height: 90,
        width: "25%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    addressFirst: {
        // backgroundColor: 'green',
        marginHorizontal: METRICS.MAR_19,
        height: 90,
        width: "90%",
        flexDirection: 'row'
        // marginTop: METRICS.MAR_20,
    },
    address: {
        backgroundColor: '#d8bb3c',
        marginHorizontal: METRICS.MAR_19,
        height: height / 5.2,
        // width: width,
        borderRadius: 5,
        marginTop: 40,
        // flexDirection: 'row'
    },
    retro: {
        // alignSelf: "flex-end",
        // marginRight: "1%",
        alignSelf: "flex-end",
        marginRight: "3%",
        height: 90,
        width: 103,
        marginTop: "-26%"
    },
    touch: {
        height: "25%",
        backgroundColor: COLORS.DASHBOARD,
        width: "33%",
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
    buttonText1: {
        fontSize: responsiveFontSize(4),
        fontFamily: FONT_FAMILIES.MEDIUM,
        marginHorizontal: METRICS.MAR_10,
        color: COLORS.HOME,
        marginTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.DASHBOARD,
    },
});
