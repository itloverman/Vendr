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

export default function HomeScreen() {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0);
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
            isStatus: 0,
        },
        {
            heading: 'PlayStation Remote Player22',
            price: '$140',
            desc: 'or best offer',
            number: '6',
            title1: 'Open Chats',
            messageRequests: '18',
            title2: 'Message Requests',
            isStatus: 0,
        },
        {
            heading: 'PlayStation 333',
            price: '$140',
            desc: 'or 333',
            number: '80',
            title1: 'Open Chats2',
            messageRequests: '60',
            title2: 'Message 2',
            isStatus: 1,
        },
        {
            heading: 'PlayStation Remote Player',
            price: '$140',
            desc: 'or best offer',
            number: '6',
            title1: 'Open Chats',
            messageRequests: '6',
            title2: 'Message Requests',
            isStatus: 1,
        },
        {
            heading: 'PlayStation Remote Player22',
            price: '$140',
            desc: 'or best offer2',
            number: '6',
            title1: 'Open Chats2',
            messageRequests: '6',
            title2: 'Message 55',
            isStatus: 1,
        },
        {
            heading: 'Last Data',
            price: '$140',
            desc: 'or End',
            number: '80',
            title1: 'Open Chats2',
            messageRequests: '60',
            title2: 'Message 60',
            isStatus: 2,
        },
    ];

    const filterArr = () => {
        return data.filter(obj => obj.isStatus === selectedTab);
    };

    const manageTitle = () => {
        switch (selectedTab) {
            case 0:
                return 'Active Listings';
            case 1:
                return 'Tasks Listings';
            case 2:
                return 'Previous Listings';
            default:
                return '';
        }
    };

    const ListItem = () => {
        navigation.navigate('add-item');
    };

    const renderItem = ({ item, index }) => {
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
                    <LogoIcon style={{width:120, height:50 }} />
                </View>
            </LinearGradient>
            {/* Button Design */}
            {/*<TouchableOpacity style={styles.listItemSub} onPress={ListItem}>*/}
            {/*    <View style={styles.listItemButton}>*/}
            {/*        <Text style={styles.listItemFont}>List an item</Text>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}

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

            <View style={styles.tabView}>
                <TouchableOpacity
                    style={styles.tabContainer}
                    onPress={() => setSelectedTab(0)}>
                    <Text style={styles.tabTextMain}>9</Text>
                    <Text style={styles.tabTextName}>Active</Text>
                    {selectedTab === 0 ? <View style={styles.tabLine} /> : null}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabContainer}
                    onPress={() => setSelectedTab(1)}>
                    <Text style={styles.tabTextMain}>9</Text>
                    <Text style={styles.tabTextName}>Tasks</Text>
                    {selectedTab === 1 ? <View style={styles.tabLine} /> : null}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabContainer}
                    onPress={() => setSelectedTab(2)}>
                    <Text style={styles.tabTextMain}>9</Text>
                    <Text style={styles.tabTextName}>Previous</Text>
                    {selectedTab === 2 ? <View style={styles.tabLine} /> : null}
                </TouchableOpacity>
            </View>

            {/* Heading Design for Active Listing */}
            <View style={styles.activeContainer}>
                <View style={styles.activeHeader}>
                    <Text style={styles.activeLabel}>{manageTitle()}</Text>
                    <View style={{ flex: 1 }} />
                    <View style={styles.filterContainer}>
                        <Text style={styles.filterText}>Filter</Text>
                    </View>
                </View>

                {/* body Design for Active Listing */}

                <View style={styles.listingBody}>
                    <FlatList
                        data={filterArr()}
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
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: { flex: 1 },
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        marginTop: 50,
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
        flexDirection: 'row',
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
