// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import PhotosIcon from '@/assets/svg/home';
import BuyingIcon from '@/assets/svg/buying';
import SellingIcon from '@/assets/svg/selling';
import MessageIcon from '@/assets/svg/message';

export function TabBarIcon({
                             style,
                             ...rest
                           }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  if (rest.name === 'Home') {
    return <PhotosIcon color={rest.focus ? '#42BEED' : '#B3B4B5'} />;
  } else if (rest.name === 'Buying') {
    return <BuyingIcon color={rest.focus ? '#42BEED' : '#B3B4B5'} />;
  } else if (rest.name === 'Selling') {
    return <SellingIcon color={rest.focus ? '#42BEED' : '#B3B4B5'} />;
  } else if (rest.name === 'message') {
    return <MessageIcon color={rest.focus ? '#42BEED' : '#B3B4B5'} />;
  }
  return null;
}
