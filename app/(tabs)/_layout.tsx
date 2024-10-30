import React from "react";

import { Tabs, Redirect } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

interface ITabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: ITabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`{${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabList = [
  { name: "Home", icon: icons.home },
  { name: "Search", icon: icons.search },
  { name: "Wishlist", icon: icons.heart },
  { name: "Cart", icon: icons.cart },
  { name: "Profile", icon: icons.profile },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 0,
          borderTopColor: "#232333",
          height: 84,
        },
      }}
    >
      {TabList.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name === "Home" ? "index" : tab.name.toLowerCase()}
          options={{
            title: tab.name,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                color={color}
                name={tab.name}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
