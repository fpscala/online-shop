import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { images } from '../constants';
import Loader from '../components/Loader';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import Logo from '../components/Logo';

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
          <Image source={images.shopify} className="w-[130px] h-[130px]" resizeMode="contain" />

          <Logo />

          <Text className="text-sm font-pregular mt-7 text-center">
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
