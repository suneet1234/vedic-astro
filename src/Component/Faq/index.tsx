
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import NavHeader from '../../ReuableComponent/NavHeader';
import { Images } from "../../Assets";
import {
    COLORS,
    FONT_FAMILIES,
    FONT_SIZES,
    METRICS,
    START_COORDS,
    END_COORDS,
} from "../../Configration";
import "./withConnect";
const { width, height } = Dimensions.get('window');
let randomHex = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default class Faq extends Component {
    state = {
        touch: false,
        Category: [
            {
                title: "Q1 A list of questions and",
                // image: layer11Copy,
                id: 1,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q2 A list of questions and",
                // image: layer11Copy,
                id: 1,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q3 A list of questions and",
                // image: layer11Copy,
                id: 2,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q4 A list of questions and",
                // image: layer11Copy,
                id: 3,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q5 A list of questions and",
                // image: layer11Copy,
                id: 4,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q6 A list of questions and",
                // image: layer11Copy,
                id: 5,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
            {
                title: "Q7 A list of questions and",
                // image: layer11Copy,
                id: 0,
                status: false,
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s Lorem Ipsum',
            },
        ],
    };

    _renderItem = (item, index) => {

        return (
            <View >
                <View style={styles.qesView}>
                    <TouchableOpacity
                        onPress={() => this.toggleView(item, index)}
                        style={[
                            styles.touchableView,
                            { backgroundColor: item.status ? COLORS.NO : '#383737' },
                        ]}
                    >
                        <Text
                            style={styles.titleText}>{item.title}</Text>
                        <Image resizeMode='contain' source={item.status ? Images.minus : Images.add} style={styles.BookOne} />
                    </TouchableOpacity>
                    {item.status &&
                        <View style={styles.ansView}>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: FONT_FAMILIES.MEDIUM,
                                color: COLORS.DASHBOARD,
                                marginLeft: 10,
                                marginTop: 5,
                                textAlign: 'left',
                                //  textAlignVertical:'bottom'
                            }}>
                                {item.body}</Text>
                        </View>
                    }
                </View>
            </View>
        )
    }
    toggleView = (item, index) => {
        item.status = !item.status
        this.setState({ 'touch': !this.state.touch })
    }


    render() {
        return (
            // <SafeAreaView style={styles.container}  >
               
                    <View style={styles.container}>

                        <NavHeader isBack simpleBack title={'FAQ'} isRightAction={true} />
                        <ScrollView>
                        <View style={styles.first}>
                            <Text style={styles.text}>{'Frequently Asked Questions'}</Text>
                        </View>
                        <View style={{flex:1}}>
                            {/* <FlatList showsVerticalScrollIndicator={false}
                            style={{flex:1}}
                                data={this.state.Category}
                                extraData={this.state.touch}
                                keyExtractor={({ index }) => index}
                                renderItem={({ item, index }) => this._renderItem(item, index)} /> */}
                                {this.state.Category.map((item,index)=>{
                                return this._renderItem(item,index)  
                                }
                                )}
                        </View>
                        </ScrollView>
                    </View>
                

            // </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    ansView: {
        height: height / 7,
        // width: width / 1.11,
        backgroundColor: COLORS.BOL,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    qesView: {
        borderRadius: 5,
        borderWidth: 1,
        //  flexDirection: "row",
        // alignSelf:"center",
    
        flex:1,
        borderColor: COLORS.BORDER_COLOR,
        marginHorizontal: 15,
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        marginTop: 7
    },
    touchableView: {
        flexDirection: 'row',
        // marginVertical: (15),
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignSelf:"center",
        height: height / 14,
        // marginHorizontal: METRICS.MAR_10,
        // backgroundColor: COLORS.DASHBOARD,
        // width: width / 1
        // width:386,
        flex:1
    },
    titleText: {
        fontSize: 25,
        fontFamily: FONT_FAMILIES.MEDIUM,
        color: COLORS.WHITE_NORMAL,
        marginLeft: 10,
        textAlign:"center"
    },
    BookOne: {
        height: 50,
        width: 50,
        flex:0.5,
        marginRight:5,
        // backgroundColor:'green'
    },
    text: {
        color: COLORS.WHITE_NORMAL,
        fontSize: 22
    },
    first: {
        // marginHorizontal: METRICS.MAR_19,
        height: METRICS.MAR_50,
        // width: METRICS.MAR_25,
        marginTop:10,
        marginHorizontal: 15,
        // backgroundColor: 'red',
        justifyContent: 'center',
        // alignItems: 'flex-start'
    },
    retro: {
        alignSelf: "flex-end",
        marginRight: "1%",
    },
    container: {
        // height: height / 1,
        backgroundColor: COLORS.DASHBOARD,
        flex:1
        // justifyContent:'center',
        // // height: (465),
        // height:height/1,
        // alignSelf: 'center',
        // // backgroundColor: 'green',
        // // width: width - (20),
        // marginTop: (10),
        // // marginHorizontal: (15),
        // borderRadius: (10),
        // borderColor: '#d9d9d9',
        // borderWidth: (2),
        // // shadowOpacity: 0.4,
        // shadowRadius: 2,
        // elevation: 2,
        // shadowColor: "grey",
        // shadowOffset: {
        //     width: 3,
        //     height: 2,
        // },
    },
    dropDownItem: {
        borderBottomColor: '#e4e6e5',
        borderBottomWidth: (2),
        alignSelf: 'center',
        justifyContent: "space-between",
        marginVertical: (10)

    }

});





