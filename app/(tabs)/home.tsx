import React, { useEffect, useState } from 'react';

import { RefreshControl, SafeAreaView, Text, View, VirtualizedList } from 'react-native';
import SearchInput from '../../components/SearchInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import Featured from '../../components/Featured';
import ProductItem from '../../components/ProductItem';
import { IProduct } from '../../models/products.interface';
import Loader from '../../components/Loader';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [featured, setFeaturedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products as IProduct[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=laptop')
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data.products as IProduct[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white py-6 h-full">
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
      </View>
      <Loader isLoading={loading} />

      <VirtualizedList<IProduct>
        data={products}
        horizontal={false}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
        ListHeaderComponent={() => (
          <>
            {featured.length !== 0 && (
              <View className="flex my-6 px-4">
                <View className="w-full">
                  <Text className="text-lg font-pregular">Featured.</Text>
                  <Featured products={featured} />
                </View>
                <Text className="text-lg font-pregular">All Products</Text>
              </View>
            )}
          </>
        )}
        ListFooterComponent={() => <View className="flex-1 pb-14" />}
        ListEmptyComponent={() => (
          <View className="flex my-6 px-4 space-y-6 text-center">
            <Text className="text-lg font-pregular">No Products Found</Text>
          </View>
        )}
        initialNumToRender={10}
        windowSize={10}
        maxToRenderPerBatch={30}
        refreshControl={<RefreshControl refreshing={refreshing} />}
      />
    </SafeAreaView>
  );
};

export default Home;
