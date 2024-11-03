import React from 'react';

import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

interface ISignIn {
  phone: string;
  password?: string;
}

const SignIn = () => {
  const [form, serForm] = React.useState<ISignIn | null>(null);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 100,
          }}
        >
          <View className="flex items-center">
            <View className="relative mt-5 mb-5">
              <Text className="text-6xl text-secondary-200 font-bold text-center">Shoppe</Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>
          </View>
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to eShop
          </Text>

          <FormField
            title="Phone"
            value={form?.phone}
            placeholder="Enter Phone Number"
            otherStyles="mt-7"
            keyboardType="phone-pad"
            handleChangeText={(text: string) => serForm({ ...form, phone: text })}
          />
          <CustomButton title="Send Code" containerStyles="mt-7" handlePress={() => {}} />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
