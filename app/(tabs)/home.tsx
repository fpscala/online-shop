import React, { useState } from 'react';

import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import SearchInput from '../../components/SearchInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { products } from '../../constants/products';
import { images } from '../../constants';
import Featured from '../../components/Featured';
import ProductItem from "../../components/ProductItem";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView className="bg-white py-6">
      <FlatList
        data={products}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem id={item.id} title={item.title} thumbnail={images.thumbnail} />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm"> Hello,</Text>
                <Text className="text-2xl font-psemibold">Prince</Text>
              </View>
              <View className="flex -right-1 px-4 py-2 items-center">
                <Link href="/cart">
                  <AntDesign name="shoppingcart" size={28} color="black" />
                </Link>
              </View>
            </View>

            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular mb-3">Featured.</Text>
              <Featured products={products ?? []} />
            </View>
            <Text className="text-lg font-pregular">All Products</Text>
          </View>
        )}
        ListFooterComponent={() => <View className="flex-1 pb-14" />}
        ListEmptyComponent={() => <Text>No Products Found</Text>}
        refreshControl={<RefreshControl refreshing={refreshing} />}
      />
    </SafeAreaView>
  );
};

export default Home;
