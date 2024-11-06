import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import {images} from "../constants";

interface Props {
  id: string;
  title: string;
  thumbnail: ImageSourcePropType;
}

const ProductCard = ({ id, title, thumbnail }: Props) => {
  return (
    <View className="flex flex-row px-2 w-1/2">
      <View className="h-72 border-[1px] border-gray-200 rounded-3xl my-2 shadow-md w-full bg-primary">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push(`/products/details/${id}`)}
          className="w-full h-full"
        >
          <View className="flex-col flex">
            <Image source={thumbnail} resizeMode="cover" defaultSource={images.shopify} className="w-full rounded-2xl h-[75%]" />
            <Text className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </Text>
            <TouchableOpacity activeOpacity={0.7} className="absolute top-0 right-0 m-2 mr-3">
              <AntDesign name="hearto" size={20} color="black" />
            </TouchableOpacity>
            <View className="px-5 h-[25%]">
              <Text className="text-2xs truncate text-white">{title}</Text>
              <View className="my-2 flex justify-between">
                <Text>
                  <Text className="text-4sm font-bold text-white">$449</Text>{' '}
                  <Text className="text-sm line-through text-white">$699</Text>
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
