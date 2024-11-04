import React from 'react';

import { Image, Text, View } from 'react-native';
import { images } from '../constants';

const Logo = () => {
  return (
    <View className="flex items-center">
      <View className="relative mt-5 mb-5">
        <Text className="text-6xl text-primary font-bold text-center">Shoppe</Text>
        <Image
          source={images.path}
          className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Logo;
