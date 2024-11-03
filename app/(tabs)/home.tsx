import React, { useState } from 'react';

import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import SearchInput from '../../components/SearchInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import ProductCard from '../../components/ProductCard';
import { products } from '../../constants/products';
import { images } from '../../constants';
import Featured from '../../components/Featured';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView className="bg-primary py-6">
      <FlatList
        data={products}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard title={item.title} thumbnail={images.thumbnail} />}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100"> Hello,</Text>
                <Text className="text-2xl font-psemibold text-white">Prince</Text>
              </View>
              <View className="flex -right-1 px-4 py-2 items-center">
                <Link href="/cart">
                  <AntDesign name="shoppingcart" size={28} color="#CDCDE0" />
                </Link>
              </View>
            </View>

            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">Featured.</Text>
              <Featured products={products ?? []} />
            </View>
            <Text className="text-lg font-pregular text-gray-100">All Products</Text>
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