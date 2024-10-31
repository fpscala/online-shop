import React from "react";

import { Text, View } from "react-native";
import { Link } from "expo-router";

const MyComponent = () => {
  return (
    <View className={"flex-1 items-center justify-center"}>
      <Text>Profile Page</Text>
      <Link href="/(auth)/sign-in">
        <Text>Go to Sign In</Text>
      </Link>
    </View>
  );
};

export default MyComponent;
