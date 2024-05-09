import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import TitleView from '@/components/Title';
import Slider from '@react-native-community/slider';

const Search = () => {
    const allTabs = ['New', 'Used', 'Not Specified'];

    const [selectedValue, setSelectedValue] = useState('Not Specified');
    const [sliderValue, setSliderValue] = useState(0.2);

    const [switches, setSwitches] = useState([
        { title: 'Allow Local Pickup', enabled: true },
        { title: 'Allow On All Categories', enabled: true },
    ]);

    const onChangeSwitch = (value: any, index?: any) => {
        switches[index].enabled = value;
        setSwitches([...switches]);
    };

    return (
        <View style={styles.boxView}>
            <TitleView text={'Searchability'} icon={null} />

            <View style={{ marginTop: 15 }}>
                {switches?.map((item, index) => {
                    return (
                        <View style={styles.switchBox} key={index}>
                            <Text style={styles.switchText}>{'Allow Local Pickup'}</Text>
                            <Switch
                                trackColor={{ true: '#9DDAF0' }}
                                thumbColor={item.enabled ? '#3FBFEF' : '#fff'}
                                ios_backgroundColor="#BFBFBF"
                                value={item.enabled}
                                onValueChange={value => onChangeSwitch(value, index)}
                            />
                        </View>
                    );
                })}

                <View style={[styles.switchBox, { marginTop: 10 }]}>
                    <Text style={styles.switchText}>{'Maximum Distance'}</Text>
                    <Text style={styles.totalText}>{`${parseInt(
                        String(sliderValue * 100),
                    )}mi.`}</Text>
                </View>

                <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    minimumTrackTintColor="#3FBFEF"
                    maximumTrackTintColor="#E8E8E8"
                    thumbTintColor={'#3FBFEF'}
                />

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.switchText}>{'Condition'}</Text>

                    <View style={styles.tabsContainer}>
                        {allTabs?.map(tab => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.tab,
                                        {
                                            backgroundColor:
                                                tab === selectedValue ? '#26BCF2' : '#DBDBDB',
                                        },
                                    ]}
                                    key={tab}
                                    onPress={() => {
                                        setSelectedValue(tab);
                                    }}
                                    activeOpacity={0.5}>
                                    <Text style={styles.tabText}>{tab}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxView: {
        margin: 10,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 15,
    },
    switchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    switchText: {
        color: '#42C1F0',
        fontSize: 19,
    },
    totalText: {
        color: '#949494',
        fontSize: 18,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    tab: {
        backgroundColor: '#DBDBDB',
        borderRadius: 20,
    },
    tabText: {
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
    },
});

export default Search;
