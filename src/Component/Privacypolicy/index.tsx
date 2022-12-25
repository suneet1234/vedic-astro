import React, { useEffect, useState } from 'react';
import "./withConnect";
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity,ScrollView } from 'react-native';

import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS, FONT_FAMILIES, FONT_SIZES, METRICS } from '../../Configration';
import NavHeader from '../../ReuableComponent/NavHeader';
const History = () => {

    return (
        
        <View style={styles.container} >
            <NavHeader isBack simpleBack title={'Privacy Policy'}  isRightAction={true} />
           
            <View style={styles.horo}>
            <ScrollView>
                {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.BLACK }}>My History</Text> */}
                <Text style={styles.text}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
                
                <Text style={styles.text1}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}{`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150`}</Text>
                </ScrollView>
            </View>
            
        </View>
        
    )
}

export default (History);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.GREEN,
    },
    text:{
        color:COLORS.WHITE_NORMAL,
        paddingLeft:"5%",
        marginTop:15,
        flex:1,
        fontSize:responsiveFontSize(2.5),
        fontFamily:FONT_FAMILIES.BOOK
    },
    text1:{
        color:COLORS.WHITE_NORMAL,
        paddingLeft:"5%",
        marginVertical:METRICS.MAR_20,
        fontSize:responsiveFontSize(2.5),
        fontFamily:FONT_FAMILIES.BOOK
    },
    horo:{ 
            flex: 1,
           backgroundColor:COLORS.DASHBOARD,
           paddingHorizontal:7,
        //    marginTop:5
       
    },
    heading: {
        fontSize: FONT_SIZES.H1,
        color: COLORS.WHITE,
        textAlign: 'center',
    },

})
