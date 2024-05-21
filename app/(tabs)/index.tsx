import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcons from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LogoIcon from '@/assets/images/VendrLogo.svg';
import ListImage from '@/assets/images/PSP.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation();
    const boxWidth = Dimensions.get('window').width;
    const data = [
        {
            heading: 'PlayStation Remote Player',
            price: '$140',
            desc: 'or best offer',
            number: '6',
            title1: 'Open Chats',
            messageRequests: '18',
            title2: 'Message Requests',
            status: 'Active',
        },
        {
            heading: 'PlayStation Remote Player22',
            price: '$140',
            desc: 'or best offer',
            number: '6',
            title1: 'Open Chats',
            messageRequests: '18',
            title2: 'Message Requests',
            status: 'Active',
        },
        {
            heading: 'PlayStation 333',
            price: '$140',
            desc: 'or 333',
            number: '80',
            title1: 'Open Chats2',
            messageRequests: '60',
            title2: 'Message 2',
            status: 'Task',
        },
        {
            heading: 'PlayStation Remote Player',
            price: '$140',
            desc: 'or best offer',
            number: '6',
            title1: 'Open Chats',
            messageRequests: '6',
            title2: 'Message Requests',
            status: 'Task',
        },
        {
            heading: 'PlayStation Remote Player22',
            price: '$140',
            desc: 'or best offer2',
            number: '6',
            title1: 'Open Chats2',
            messageRequests: '6',
            title2: 'Message 55',
            status: 'Task',
        },
        {
            heading: 'Last Data',
            price: '$140',
            desc: 'or End',
            number: '80',
            title1: 'Open Chats2',
            messageRequests: '60',
            title2: 'Message 60',
            status: 'Task',
        },
        {
            heading: 'Last Data',
            price: '$120',
            desc: 'or End',
            number: '80',
            title1: 'Open Chats2',
            messageRequests: '60',
            title2: 'Message 60',
            status: 'Previous',
        },
    ];

    const filterArr = (status: string) => {
        return data.filter(obj => obj.status === status);
    };

    const manageTitle = (status: string) => {
        switch (status) {
            case 'Active':
                return 'Active Listings';
            case 'Task':
                return 'Task Listings';
            case 'Previous':
                return 'Previous Listings';
            default:
                return '';
        }
    };

    const ListItem = () => {
        navigation.navigate('add-item', {});
    };

    const Tab = createMaterialTopTabNavigator();

    const CustomTabBar = (props: any) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.tabContainer}>
                <Text style={styles.tabTextMain}>{props.count}</Text>
                <Text style={styles.tabTextName}>{props.title}</Text>
            </View>
        </View>
    );

    const ListingViews = (props: any) => (
        <View style={styles.activeContainer}>
            <View style={styles.activeHeader}>
                <Text style={styles.activeLabel}>{manageTitle(props.status)}</Text>
                <View style={{ flex: 1 }} />
                <View style={styles.filterContainer}>
                    <Text style={styles.filterText}>Filter</Text>
                </View>
            </View>

            {/* body Design for Active Listing */}

            <View style={styles.listingBody}>
                <FlatList
                    data={filterArr(props.status)}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    ListFooterComponent={<View style={{ height: 100 }} />}
                    ItemSeparatorComponent={() => (
                        <View style={styles.itemSeparatorComponent}>
                            <View style={styles.itemSeparatorComponentSub} />
                        </View>
                    )}
                />
            </View>
        </View>
    );

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.listBody} key={index}>
                <View>
                    <Image source={require('@/assets/images/PSP.png')} style={styles.listImages} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.listBodyHeading}>{item?.heading}</Text>
                    <Text style={styles.listBodyPrice}>
                        {item?.price}
                        <Text style={styles.listBodyDesc}> {item?.desc}</Text>
                    </Text>

                    <View style={styles.fullScreen} />
                    <View style={styles.openChatContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={styles.listBodyNumber}>{item?.number}</Text>
                            <Text>{item?.title1}</Text>
                        </View>

                        <View style={styles.numberContainer}>
                            <Text style={styles.listBodyNumber}>{item?.messageRequests}</Text>
                            <Text>{item?.title2}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1 }} />
                {/* //Edit Icon */}
                <FontAwesomeIcons
                    size={25}
                    name={'edit'}
                    color={'#46C0EF'}
                    style={styles.editIcon}
                />
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={['#26BCF2', '#82DAF9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradientHeader}>
                <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                    <LogoIcon style={{ width: 120, height: 50 }} />
                </View>
            </LinearGradient>
            {/* //List an Item Button */}
            <TouchableOpacity style={styles.touchableOpacity} onPress={ListItem}>
                <LinearGradient
                    colors={['#26BCF2', '#82DAF9']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradient}>
                    <View style={styles.listItemButton}>
                        <Text style={styles.listItemFont}>List an item</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            {/* Tab Design */}
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.tabView,
                }}
            >
                <Tab.Screen
                    name="Active"
                    options={{
                        tabBarLabel: () => (
                            <CustomTabBar count={filterArr('Active').length} title='Active' />
                        ),
                    }}
                >
                    {() => <ListingViews status='Active' />}
                </Tab.Screen>
                <Tab.Screen
                    name="Task"
                    options={{
                        tabBarLabel: () => (
                            <CustomTabBar count={filterArr('Task').length} title='Task' />
                        ),
                    }}
                >
                    {() => <ListingViews status='Task' />}
                </Tab.Screen>
                <Tab.Screen
                    name="Previous"
                    options={{
                        tabBarLabel: () => (
                            <CustomTabBar count={filterArr('Previous').length} title='Previous' />
                        ),
                    }}
                >
                    {() => <ListingViews status='Previous' />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: { flex: 1 },
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        marginTop: 0,
    },
    listItemButton: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemFont: {
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: 50,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    listItemSub: {
        alignItems: 'center',
    },
    tabView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 26,
        marginTop: 10,
    },
    tabContainer: {
        marginBottom: 18,
        alignItems: 'center',
    },
    tabTextMain: {
        fontSize: 37,
        color: '#2CBFF3',
        fontWeight: '700',
    },
    tabTextName: {
        fontSize: 16,
        color: '#5C5C5C',
        fontWeight: '600',
    },
    tabLine: {
        height: 2,
        width: 50,
        backgroundColor: '#2BBEF3',
        marginTop: 5,
    },
    activeContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 21,
        marginBottom: 5,
    },
    activeHeader: {
        flexDirection: 'row',
        marginHorizontal: 21,
        marginTop: 9,
    },
    activeLabel: {
        fontSize: 26,
        color: '#000000',
        fontWeight: '500',
    },
    filterText: {
        fontSize: 13,
        color: '#46C0EF',
        fontWeight: '400',
        paddingHorizontal: 20,
        paddingVertical: 7.5,
    },
    filterContainer: {
        borderRadius: 20,
        borderColor: '#46C0EF',
        borderWidth: 1.5,
    },
    listingBody: {
        marginTop: 15,
        marginHorizontal: 21,
    },
    listBodyHeading: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    listBodyPrice: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '600',
        paddingHorizontal: 10,
        marginTop: -10,
    },
    listBodyDesc: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '400',
        paddingHorizontal: 10,
        marginTop: -10,
    },
    listBodyNumber: {
        fontSize: 20,
        color: '#42BEED',
        fontWeight: '600',
        marginTop: -10,
    },
    editIcon: {
        height: 25,
        width: 25,
        marginTop: 8,
    },
    numberContainer: {
        marginTop: 16,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    listBody: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
    },
    listImages: {
        height: 115,
        width: 84,
        borderRadius: 14,
    },
    itemSeparatorComponent: {
        backgroundColor: '#FFFFFF',
        height: 2,
    },
    itemSeparatorComponentSub: {
        backgroundColor: '#E8E8E8',
        height: 2,
        marginHorizontal: 16,
    },
    openChatContainer: { flexDirection: 'row', marginBottom: 5 },
    touchableOpacity: {
        alignItems: 'center',
    },
    gradient: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 14,
    },
    gradientHeader: {
        paddingTop: 30,
        overflow: 'hidden',
    },
});
