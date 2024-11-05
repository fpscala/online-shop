import React, { useEffect, useState } from 'react';

import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import SearchInput from '../../components/SearchInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import Featured from '../../components/Featured';
import ProductItem from '../../components/ProductItem';
import { IProduct } from '../../models/products.interface';
import Loader from '../../components/Loader';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setIsLogged] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data.products as IProduct[]);
        } else {
          setIsLogged(false);
        }
      })
      .finally(() => {
        setIsLogged(false);
      });
  }, []);

  if (products.length === 0) return <Loader isLoading={loading} />;

  return (
    <SafeAreaView className="bg-white py-6">
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
      <FlatList
        data={products}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="w-full py-6">
              <Text className="text-lg font-pregular mb-3">Featured.</Text>
              {products && <Featured products={products.filter((item) => item.rating >= 4.5)} />}
            </View>
            <Text className="text-lg font-pregular">All Products</Text>
          </View>
        )}
        ListFooterComponent={() => <View className="flex-1 pb-14" />}
        ListEmptyComponent={() => <Text>No Products Found</Text>}
        initialNumToRender={10}
        windowSize={10}
        maxToRenderPerBatch={30}
        refreshControl={<RefreshControl refreshing={refreshing} />}
      />
    </SafeAreaView>
  );
};

export default Home;
