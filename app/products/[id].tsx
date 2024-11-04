import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { Image, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <SafeAreaView className="flex flex-1 items-center justify-center bg-white">
        <View className="w-full h-1/3 bg-transparent border-2 border-red-200">
          <Image source={images.thumbnail} className="w-full h-full" resizeMode="cover" />
        </View>
        <View className="w-full h-2/3 -my-7 bg-black-200 rounded-t-[30px]">
          <Text className="text-5xl font-semibold my-3 text-white font-psemibold">Product Id :{id}</Text>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default ProductDetails;
