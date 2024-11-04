import { useState } from 'react';
import { router, usePathname } from 'expo-router';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface Props {
  initialQuery?: string;
}

const SearchInput = ({ initialQuery }: Props) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');
  const [focused, setFocused] = useState(false);

  return (
    <View
      className={`flex flex-row items-center space-x-4 w-full h-16 px-4 ${focused ? 'border-primary' : 'border-gray-500'} rounded-3xl border-2`}
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search..."
        placeholderTextColor="#B5B5B5"
        onChangeText={(e) => setQuery(e)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === '')
            return Alert.alert(
              'Missing Query',
              'Please input something to search results across database'
            );

          if (pathname.startsWith('/search')) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <AntDesign name="search1" size={20} color="#202020" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
