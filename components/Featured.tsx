import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { CustomAnimation } from 'react-native-animatable';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { IProduct } from '../models/products.interface';
import type { ViewToken } from '@react-native/virtualized-lists';
import { PointProp } from 'react-native/Libraries/Components/ScrollView/ScrollView';
import AntDesign from '@expo/vector-icons/AntDesign';

interface FeaturedItemsProps {
  activeItem: string;
  item: IProduct;
}

interface FeaturedProps {
  products: IProduct[];
}

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1.1,
  },
  1: {
    scale: 0.9,
  },
};

const FeaturedItem = ({ activeItem, item }: FeaturedItemsProps) => {
  return (
    <Animatable.View
      className="mr-2"
      animation={(activeItem === item.id.toString() ? zoomIn : zoomOut) as CustomAnimation}
      duration={100}
    >
      <TouchableOpacity className="relative flex justify-center items-center" activeOpacity={0.7}>
        <View className="w-56 h-80 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40 border-2 border-gray-200 bg-primary">
          <View className="flex-col flex">
            <Image
              source={{ uri: item.thumbnail }}
              resizeMode="cover"
              className="w-full rounded-[33px] h-[75%]"
            />
            <Text className="absolute top-0 left-2 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </Text>
            <TouchableOpacity activeOpacity={0.7} className="absolute top-0 right-0 m-2 mr-3">
              <AntDesign name="heart" size={20} color="#CDCDE0" />
            </TouchableOpacity>
            <View className="px-5 h-[25%]">
              <Text className="text-2xs truncate text-white">{item.title}</Text>
              <View className="my-2 flex justify-between">
                <Text>
                  <Text className="text-4sm font-bold text-white">$449</Text>{' '}
                  <Text className="text-sm line-through text-white">$699</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const Featured = ({ products }: FeaturedProps) => {
  if (!products) return null;
  const [activeItem, setActiveItem] = useState(products[0].id.toString());

  function viewableItemsChanged(info: {
    viewableItems: Array<ViewToken<IProduct>>;
    changed: Array<ViewToken<IProduct>>;
  }) {
    if (info.viewableItems.length > 0) {
      setActiveItem(info.viewableItems[0].key);
    }
  }

  return (
    <FlatList
      data={products}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FeaturedItem activeItem={activeItem} item={item} />}
      onViewableItemsChanged={(info) => viewableItemsChanged(info)}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 110,
      }}
      contentOffset={{ x: 170 } as PointProp}
    />
  );
};

export default Featured;
