import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TitleView from '@/components/Title';

type Props = PropsWithChildren<{
  onPressListItem: () => void;
}>;

export default function ConfirmItem({ onPressListItem }: Props) {
  return (
      <View style={styles.boxContainer}>
        <View style={styles.flexDirectionRow}>
          <TitleView text={'Confirm Listing'} />
          <View style={{ flex: 1 }} />
          <Text style={{ color: '#3FBFEF', textDecorationLine: 'underline' }}>
            {'Preview'}
          </Text>
        </View>
        <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={onPressListItem}>
          <View style={styles.listItemButton}>
            <Text style={styles.listItemFont}>List item</Text>
          </View>
        </TouchableOpacity>
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
  listItemButton: {
    backgroundColor: '#26BCF2',
    marginTop: 14,
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
});
