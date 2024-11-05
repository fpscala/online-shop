import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { IProduct } from '../models/products.interface';

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  const discountPrice = () => {
    if (product.discountPercentage <= 0) return product.price;
    return (100 - product.discountPercentage) / 100 * product.price;
  };

  return (
    <View className="flex flex-row py-3 px-4 h-48">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push(`/products/${product.id}`)}
        className="w-1/3 h-full"
      >
        <View className="flex-col flex">
          <Image
            source={{ uri: product.thumbnail }}
            resizeMode="cover"
            className="w-full h-full rounded-2xl"
          />
          {product.discountPercentage > 0 && (
            <Text className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {product.discountPercentage}% OFF
            </Text>
          )}
          <View className="absolute -bottom-3.5 inset-x-0 items-center">
            <Text className="w-16 rounded-full bg-secondary p-1 text-center text-sm font-medium text-white">
              <AntDesign name="star" size={20} color="white" />
              {product.rating}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} className="absolute top-0 right-0 m-2 mr-3">
            <AntDesign name="hearto" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View className="flex flex-col h-full py-4 pl-4 pr-2 w-2/3">
        <View className="w-full h-[60%]">
          <Text className="text-xl font-psemibold">{product.title}</Text>
        </View>
        <View className="w-full h-[40%] flex flex-row justify-end">
          <View className="flex-1">
            {product.discountPercentage > 0 && (
              <Text className="text-sm line-through">${product.price}</Text>
            )}
            <Text className="text-xl font-psemibold">
              ${discountPrice().toFixed(2)}
            </Text>
          </View>
          <View className="my-1 flex-1 h-full items-end justify-center font-psemibold">
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-28 h-full p-2 -mt-2 text-center rounded-full justify-center items-center bg-primary-200 flex-row"
            >
              <AntDesign name="shoppingcart" size={22} color="black" />
              <Text className="text-xl font-pmedium text-black"> Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
