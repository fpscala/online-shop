import React from 'react';

import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ITabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: ITabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <AntDesign name={icon} size={24} color={color} />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabList = [
  { name: 'Home', icon: 'home', showInTab: true },
  { name: 'Category', icon: 'search1', showInTab: true },
  { name: 'Wishlist', icon: 'hearto', showInTab: true },
  { name: 'Cart', icon: 'shoppingcart', showInTab: false },
  { name: 'Profile', icon: 'user', showInTab: true },
];

const TabsLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0F9565',
          tabBarInactiveTintColor: '#232533',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderTopColor: '#232533',
            height: 66,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.9, // Adjust for visibility
            shadowRadius: 20, // Higher radius for a softer look
            elevation: 20, // Higher value to make the shadow more visible
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        {TabList.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name.toLowerCase()}
            options={{
              title: tab.name,
              headerShown: false,
              tabBarButton: tab.showInTab ? undefined : () => null,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={tab.icon} color={color} name={tab.name} focused={focused} />
              ),
            }}
          />
        ))}
      </Tabs>
      <StatusBar backgroundColor="#FFFFFF" style="light" />
    </>
  );
};

export default TabsLayout;
