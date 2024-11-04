import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { images } from '../constants';
import Loader from '../components/Loader';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      {/*<Loader isLoading={loading} />*/}

      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <View className="flex-row items-center rounded-full bg-gray-800 px-2 py-8">
            <Image source={images.logo2} className="w-[130px] h-[84px]" resizeMode="contain" />
          </View>

          <View className="relative mt-5">
            <Text className="text-6xl text-primary-200 font-bold text-center">Shoppe</Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            View your favourite products and shop with ease
          </Text>

          <CustomButton
            title="Continue with Phone"
            handlePress={() => router.push('/home')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0F9565" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
