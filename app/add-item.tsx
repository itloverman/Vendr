import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EntypoIcons from '@expo/vector-icons/Entypo';
import TitleView from '@/components/Title';
import { useState } from 'react';
import { Price } from '@/components/home/Price';
import ConfirmItem from '@/components/home/ConfirmItem';
import TitleNew from '@/components/home/TitleNew';
import Description from '@/components/home/Description';
import Search from '@/components/home/Search';
import * as ImagePicker from 'expo-image-picker';

export default function AddItemScreen() {
  const navigation = useNavigation();
  const [arrPhoto, setArrPhoto] = useState([]);
  const [, setPriceChange] = useState('');

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressListItem = () => {
    navigation.goBack();
  };

  const pickImage = async index => {
    if (index === arrPhoto.length) {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setArrPhoto([...arrPhoto, result.assets[0].uri]);
      }
    }
  };

  const renderCamera = () => {
    const boxWidth = Dimensions.get('window').width - 110;

    return (
        <View style={styles.boxContainer}>
          <TitleView text={'Photos'} />

          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {[...arrPhoto, ''].map((res: any, index: number) => {
              console.log(res);
              return (
                  <TouchableOpacity
                      onPress={() => pickImage(index)}
                      key={index}
                      style={[
                        res !== '' ? styles.photosSelected : styles.photos,
                        {
                          width: boxWidth / 3,
                          height: (boxWidth / 3) * 1.2,
                          marginRight: (index + 1) % 3 === 0 ? 0 : 25,
                        },
                      ]}>
                    {(res !== '' && (
                        <Image
                            source={{ uri: res }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    )) || (
                        <EntypoIcons
                            size={25}
                            name={'circle-with-plus'}
                            color={'#46C0EF'}
                            style={styles.plusImage}
                        />
                    )}
                  </TouchableOpacity>
              );
            })}
          </View>
        </View>
    );
  };

  const renderCategory = () => {
    return (
        <View style={styles.boxContainer}>
          <TitleView text={'Category'} />

          <View style={styles.textInput}>
            <TextInput
                style={{ flex: 1 }}
                placeholder={'Search category filters'}
                onChangeText={setPriceChange}
            />
          </View>
        </View>
    );
  };

  return (
      <>
        <ScrollView style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
          <View style={styles.headerContainer}>
            <View style={styles.headerListTitle}>
              <Text style={{ fontSize: 25, fontWeight: '500' }}>
                {'List an Item'}
              </Text>
            </View>
            <TouchableOpacity onPress={onPressGoBack}>
              <Ionicons size={50} name={'close'} color={'#46C0EF'} />
            </TouchableOpacity>
            <View style={styles.headerLine} />
          </View>

          {renderCamera()}
          <TitleNew />
          <Description />
          <Search />
          {renderCategory()}
          <Price />
          <ConfirmItem onPressListItem={onPressListItem} />
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  flexDirectionRow: { flexDirection: 'row' },
  boxContainer: {
    margin: 10,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  photos: {
    backgroundColor: '#EBF9FF',
    marginTop: 20,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderWidth: 3,
    borderColor: '#A3E6FF',
  },
  photosSelected: {
    backgroundColor: '#EBF9FF',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  plusImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 22,
    width: 22,
  },
  headerListTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 36,
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  headerLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    backgroundColor: '#46C0EF',
  },
});
