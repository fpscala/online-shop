import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

interface Props {
  id: string;
  title: string;
  thumbnail: ImageSourcePropType;
}

const ProductItem = ({ id, title, thumbnail }: Props) => {
  return (
    <View className="flex flex-row py-3 px-4 h-48">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push(`/products/${id}`)}
        className="w-1/3 h-full"
      >
        <View className="flex-col flex">
          <Image source={thumbnail} resizeMode="cover" className="w-full h-full rounded-2xl" />
          <Text className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </Text>
          <View className="absolute -bottom-3.5 inset-x-0 items-center">
            <Text className="w-16 rounded-full bg-secondary p-1 text-center text-sm font-medium text-white">
              <AntDesign name="star" size={20} color="white" />
              4.9
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} className="absolute top-0 right-0 m-2 mr-3">
            <AntDesign name="heart" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View className="flex flex-col h-full py-4 pl-4 pr-2 w-2/3">
        <View className="w-full h-[60%]">
          <Text className="text-xl font-psemibold">{title}</Text>
        </View>
        <View className="w-full h-[40%] flex flex-row justify-end">
          <View className="flex-1">
            <Text className="text-sm line-through">$699</Text>
            <Text className="text-xl font-psemibold">$449</Text>
          </View>
          <View className="my-1 flex-1 h-full items-end justify-center font-psemibold">
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-28 h-full p-2 -mt-2 text-center rounded-full justify-center items-center bg-primary-200 flex-row"
            >
              <AntDesign name="shoppingcart" size={22} color="black" />
              <Text className="text-xl font-pmedium text-black">{" "}Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
