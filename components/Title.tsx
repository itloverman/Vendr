import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type Props = PropsWithChildren<{
    text: string;
    icon?: string | null;
}>;

export default function TitleView({ text, icon }: Props) {
    return (
        <View style={styles.mainView}>
            <Text style={{ fontWeight: '600', fontSize: 26 }}>{text}</Text>
            {(icon && <FontAwesome5 name={icon} size={18} color="black" />) || null}
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
