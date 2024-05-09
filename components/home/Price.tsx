import { StyleSheet, Text, View } from 'react-native';
import TitleView from '@/components/Title';
import EntypoIcons from '@expo/vector-icons/Entypo';

export function Price() {
  return (
      <View style={styles.boxContainer}>
        <View style={styles.flexDirectionRow}>
          <TitleView text={'Price'} />
          <EntypoIcons
              size={18}
              name={'edit'}
              color={'#767879'}
              style={styles.pricePencial}
          />
        </View>
        <Text style={{ color: '#C5C5C5', fontSize: 17 }}>
          {'Tab here to add an asking price'}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    margin: 10,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
  },
  flexDirectionRow: { flexDirection: 'row' },
  pricePencial: { marginLeft: 10, marginTop: 5 },
});
