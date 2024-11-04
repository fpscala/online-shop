import React from 'react';

import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import Logo from '../../components/Logo';

interface ISignIn {
  phone: string;
  password?: string;
}

const SignIn = () => {
  const [form, serForm] = React.useState<ISignIn | null>(null);

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 100,
          }}
        >
          <Logo />
          <Text className="text-2xl font-semibold mt-10 font-psemibold">Log in to Shoppe</Text>

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
            <Text className="text-lg font-pregular">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-primary">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
