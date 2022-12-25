import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    useReducer,
} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Avatar, Divider, Icon, Image, ListItem } from 'react-native-elements';
import { COLORS, FONT_FAMILIES, METRICS } from "../../Configration";
import { Images } from '../../Assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constant from '../../Constant';
import { showMessage } from 'react-native-flash-message';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
const {
    MAIN,
    LOGIN,
    FAQ,
    MY_PROFILE,
    CONTACT,
    FULLMOON,PRIVACY_POLICY
} = Constant.SCREENS;

const menuArray = [
    {
        name: 'My Profile',
        image: Images.arrow,
        isActive: true,
        screen:  MY_PROFILE,
    },
    {
        name: `Contact Us`,
        image: Images.arrow,
        isActive: true,
        screen: CONTACT,
    },
    {
        name: 'FAQ',
        image: Images.arrow,
        isActive: true,
        screen: FAQ,
    },
    {
        name: 'Privacy policy',
        image: Images.arrow,
        isActive: true,
        screen: PRIVACY_POLICY,
    },
    // {
    //     name: 'Logout',
    //     image: Images.logout,
    //     isActive: true,
    //     screen: LOGIN,
    // },

];

const LeftMenu = (props: any) => {
    const { navigation, setRouteValues, logout } = props;
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        // const unsubscribe = navigation.addListener('focus', () => {
        //     //@ts-ignore`
        //     let userData = SharedManager.getInstance().getUserDetails()
        //     setUserImage(userData.image)
        //     setUserName(userData.first_name + " " + userData.last_name)
        // });

    }, []);

    const logoutApi = () => {
        AsyncStorage.removeItem("user")
        navigation.navigate(LOGIN)
    }

    const onSelectMenu = (data: any) => {
        
        navigation.closeDrawer();
        //============ Logout ===============//
        if (data === 'Logout') {
            const actions = [
                {
                    text: 'No', onPress: () =>
                        console.log('cancel Pressed')
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        logoutApi()
                    }
                }
            ];
            Alert.alert('Logout', Constant.VALIDATE_FORM.LOGOUT, actions, { cancelable: false });
       
        } else {
            const { screen, name } = data;
            navigation.navigate(screen);
        }

    };

    const renderProfile = () => {
        return (<View
            style={styles.profile}
        // onPress={() => [navigation.closeDrawer(), navigation.navigate(SCREENS.EDIT_PROFILE, { showBack: true })]}>
        >

            <Image source={Images.dummy} style={styles.profileImage} />
            {/* <ListItem.Content> */}
            <Text style={styles.title}>{"Joey"}</Text>
            <Text style={{color:COLORS.WHITE_NORMAL,marginLeft:"-10%"}}>{"+91 9876546543"}</Text>

            {/* </ListItem.Content> */}

        </View>)
    }

    const renderMenu = (item: any) => {
        const { image, name } = item.item;
        return (
            <TouchableOpacity
                key={name}
                onPress={() => onSelectMenu(item.item)}
                style={styles.menuItem}>
                <ListItem containerStyle={{ backgroundColor: 'transparent' }}>
                    <Image source={image} style={styles.menuIcon} />
                    <ListItem.Title style={{ color: COLORS.WHITE_NORMAL, fontSize: responsiveFontSize(2.5),fontFamily:FONT_FAMILIES.BOOK }}> {name}</ListItem.Title>
                </ListItem>

                {/* <Text style={{color:"white"}}>helo</Text> */}
                {/* <ListItem.Chevron color={'white'} style={{ right: 0 }} /> */}

            </TouchableOpacity>
        );
    };

    const renderSeprator = () => {
        return <Divider style={styles.divider} orientation={'horizontal'} color={'#000000'} />
    }
    return (
        <View style={styles.container}>
            {renderProfile()}
            
            <FlatList
                style={styles.list}
                data={menuArray} renderItem={renderMenu}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={renderProfile}
                // ItemSeparatorComponent={renderSeprator}
            />
            {/* ListHeaderComponent={renderProfile} */}
            {/* {isLoading && <QLoader />} */}
            <TouchableOpacity style={{marginBottom:"20%",marginLeft:"8%",flexDirection:"row"}}   onPress={() => onSelectMenu('Logout')}>
                <Image source={Images.logout} style={styles.log}/>
                <Text style={{color:COLORS.WHITE_NORMAL,fontFamily:FONT_FAMILIES.BOOK,fontSize:responsiveFontSize(2.6),marginHorizontal:METRICS.MAR_20,}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};
export default LeftMenu;
//==========================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 16,
        backgroundColor: COLORS.DASHBOARD,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8,
        // paddingLeft:5
    },
    menuIcon: {
        height: 15,
        width: 20,
    },
    log:{
           height:20,
           width:17,
           marginVertical:METRICS.MAR_5
           
    },
    profileImage: {
        height: 80,
        borderRadius: 80,
        borderColor: COLORS.WHITE_NORMAL,
        borderWidth: 1,
        // marginRight:20,
        width: 80,
        resizeMode: 'cover',
    },
    title: {
        marginTop: METRICS.MAR_10,
        color: COLORS.WHITE_NORMAL,
        fontSize: responsiveFontSize(4),
        fontFamily:FONT_FAMILIES.BOOK,
        marginHorizontal:METRICS.MAR_13
    },
    subtitle: {
        color: COLORS.WHITE,
    },
    list: {
        // marginTop: responsiveHeight(5)
        flex:1
    },
    divider: {backgroundColor:COLORS.DASHBOARD},
    profile: {
        // backgroundColor: COLORS.DASHBOARD,
        marginHorizontal: METRICS.MAR_35,
        // alignItems: 'center',
        paddingTop: METRICS.MAR_50,
        paddingBottom: METRICS.MAR_20,
        
    }
});
