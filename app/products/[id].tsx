import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { Image, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <SafeAreaView className="flex flex-1 items-center justify-center bg-white">
        <View className="w-full h-1/3 bg-primary">
          <Image source={images.thumbnail} className="w-full h-full" resizeMode="cover" />
        </View>
        <View className="w-full h-2/3 -my-7 bg-white rounded-t-[30px]">
          <View className="flex flex-row justify-center pt-3">
            <View className="w-16 h-1 bg-gray-400 rounded-full" />
          </View>
          <Text className="text-5xl font-semibold my-3 text-white font-psemibold">
            Product Id :{id}
          </Text>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#0F9565" style="light" />
    </>
  );
};

export default ProductDetails;
