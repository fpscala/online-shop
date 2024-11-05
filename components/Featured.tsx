import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { CustomAnimation } from 'react-native-animatable';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { IProduct } from '../models/products.interface';
import type { ViewToken } from '@react-native/virtualized-lists';
import { PointProp } from 'react-native/Libraries/Components/ScrollView/ScrollView';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

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
    scale: 1.0,
  },
};

const zoomOut = {
  0: {
    scale: 1.0,
  },
  1: {
    scale: 0.9,
  },
};

const FeaturedItem = ({ activeItem, item }: FeaturedItemsProps) => {
  const isActive = activeItem === item.id.toString();
  return (
    <Animatable.View
      className="mr-2"
      animation={(isActive ? zoomIn : zoomOut) as CustomAnimation}
      duration={100}
    >
      <View className="relative flex justify-center items-center bg-white">
        <View className="w-56 h-72 rounded-[33px] my-5 overflow-hidden pb-8">
          <View className="flex-col flex">
            <Image
              source={{ uri: item.thumbnail }}
              resizeMode="cover"
              className="w-full rounded-[33px] h-[75%]"
            />
            <View className="px-5 h-[25%]">
              <Link href={`/products/${item.id}`}>
                <Text className="text-2xs text-white">{item.title}</Text>
              </Link>
              <View className="my-2 flex justify-between">
                <Text>
                  <Text className="text-4sm font-bold text-white">$449</Text>{' '}
                  <Text className="text-sm line-through text-white">$699</Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            className={`${isActive ? 'h-56' : 'h-48'} absolute bottom-4 left-2 w-52 -z-10 rounded-[33px] bg-primary shadow-md shadow-black`}
          ></View>
        </View>
      </View>
    </Animatable.View>
  );
};

const Featured = ({ products }: FeaturedProps) => {
  if (!products || products.length === 0) return null;
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
      renderItem={({ item }) => <FeaturedItem key={item.id} activeItem={activeItem} item={item} />}
      onViewableItemsChanged={(info) => viewableItemsChanged(info)}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 110,
      }}
      contentOffset={{ x: 170 } as PointProp}
    />
  );
};

export default Featured;
