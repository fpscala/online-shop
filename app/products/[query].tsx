import React, { useEffect, useState } from 'react';

import { RefreshControl, SafeAreaView, Text, View, VirtualizedList } from 'react-native';
import SearchInput from '../../components/SearchInput';
import { useLocalSearchParams } from 'expo-router';
import ProductItem from '../../components/ProductItem';
import { IProduct } from '../../models/products.interface';
import Loader from '../../components/Loader';

const Products = () => {
  const { query } = useLocalSearchParams();

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products as IProduct[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <SafeAreaView className="bg-white py-6 h-full">
      <Loader isLoading={loading} />
      <View className="flex my-6 px-4 space-y-6">
        <SearchInput initialQuery={`${query}`} />
      </View>
      <VirtualizedList<IProduct>
        data={products}
        horizontal={false}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
        ListHeaderComponent={() => (
          <>
            {products.length !== 0 && (
              <View className="flex my-6 px-4 space-y-6">
                <Text className="text-lg font-pregular">Found {products.length} Products</Text>
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

export default Products;
