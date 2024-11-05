import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

import { Image, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { IProduct } from '../../models/products.interface';
import { products } from '../../constants/products';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return null;

  return (
    <>
      <SafeAreaView className="flex flex-1 items-center justify-center bg-white">
        <View className="w-full h-1/3 bg-primary">
          <Image source={{ uri: product.thumbnail }} className="w-full h-full" resizeMode="cover" />
        </View>
        <View className="w-full h-2/3 -my-7 bg-white rounded-t-[30px]">
          <View className="flex flex-row">
            <View className="absolute -top-10 right-8 w-20 h-20 bg-secondary justify-center items-center rounded-full">
              <Text className="text-white font-pbold text-3xl pt-2">{product.rating}</Text>
            </View>
          </View>
          <View className="flex flex-row justify-center pt-3">
            <View className="w-16 h-1.5 bg-gray-300 rounded-full" />
          </View>
          <View className="flex flex-col items-center h-auto border border-gray-300 px-6">
            <Text className="text-2xl font-psemibold text-gray">
              {product.title}
            </Text>
            <Text className="flex-col text-xl font-pregular text-gray-400 mt-2">
              {product.description}
            </Text>
            <Text className="flex-col text-2xl font-pbold text-gray ml-2 mt-4">
              {product.price} $
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#0F9565" style="light" />
    </>
  );
};

export default ProductDetails;
