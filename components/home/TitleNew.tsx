import React, { useRef } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import TitleView from '@/components/Title';

const TitleNew = () => {
    const textRef = useRef<any>(null);

    return (
        <>
            <View style={styles.boxView}>
                <TouchableOpacity onPress={() => textRef.current.focus()}>
                    <TitleView text={'Title'} icon={'pen'} />
                </TouchableOpacity>
                <TextInput
                    ref={textRef}
                    style={styles.input}
                    placeholder={'Tap here to add a title'}
                    placeholderTextColor={'#8D8D8D'}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    boxView: {
        margin: 10,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 15,
    },
    input: {
        fontSize: 17,
        marginTop: 5,
    },
});

export default TitleNew;
