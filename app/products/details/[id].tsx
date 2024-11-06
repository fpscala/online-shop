import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { IProduct } from '../../../models/products.interface';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '../../../components/CustomButton';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [count, setCount] = useState(1);

  const handleChangeCount = (value: string | number) => {
    let count = typeof value === 'string' ? parseInt(value) : value;
    if (count < 1 || isNaN(count)) count = 1;
    if (count > 1000) count = 1000;
    setCount(count);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return null;

  const discountPrice = () => {
    if (product.discountPercentage <= 0) return product.price;
    return ((100 - product.discountPercentage) / 100) * product.price;
  };

  const totalPrice = count * discountPrice();

  return (
    <>
      <SafeAreaView className="flex flex-1 items-center justify-center bg-white">
        <View className="w-full h-1/3 bg-primary">
          <Image source={{ uri: product.thumbnail }} className="w-full h-full" resizeMode="contain" />
        </View>
        <View className="w-full h-2/3 -my-7 bg-white rounded-t-[30px]">
          <View className="flex flex-row">
            <View className="absolute -top-12 right-8 w-24 h-24 bg-secondary justify-center items-center rounded-full shadow-xl shadow-secondary">
              <Text className="text-white font-pbold text-3xl pt-2">{product.rating}</Text>
            </View>
          </View>
          <View className="flex flex-row justify-center pt-6">
            <View className="w-16 h-1.5 bg-gray-300 rounded-full" />
          </View>
          <View className="flex flex-col h-full px-6 mt-8">
            <Text className="text-2xl font-psemibold text-gray">{product.title}</Text>
            <Text className="flex-col text-xl font-pregular text-gray-400 mt-2">
              {product.description}
            </Text>
            <View className="flex flex-row mt-8 px-2 grow items-start">
              <View className="w-1/2 flex-row mt-4 py-2 items-center">
                <Text className="text-2sm mb-5 font-psemibold">$ </Text>
                <Text className="text-3xl font-pbold">{discountPrice().toFixed(2)} </Text>
                {product.discountPercentage > 0 && (
                  <Text className="text-xl line-through text-gray-500 font-pmedium">
                    ${product.price}
                  </Text>
                )}
              </View>
              <View className="w-1/2 flex-row mt-4 justify-end items-center">
                <TouchableOpacity
                  onPress={() => handleChangeCount(count - 1)}
                  activeOpacity={0.6}
                  className="border border-r-0 border-primary-300 rounded-l-3xl p-2 h-14 justify-center items-center"
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                  value={count.toString()}
                  keyboardType="number-pad"
                  onChangeText={handleChangeCount}
                  className="border-y border-primary-300 h-14 text-center font-psemibold min-w-20 text-xl block py-2.5"
                />
                <TouchableOpacity
                  onPress={() => handleChangeCount(count + 1)}
                  activeOpacity={0.6}
                  className="border border-l-0 border-primary-300 rounded-r-3xl p-2 h-14 justify-center items-center"
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-1 w-full justify-center">
              <CustomButton
                title="PLACE ORDER "
                containerStyles="px-6 !rounded-full"
                additionalText={`$${totalPrice.toFixed(2)}`}
                additionalTextStyle="text-primary-300"
                handlePress={() => {}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#0F9565" style="light" />
    </>
  );
};

export default ProductDetails;
