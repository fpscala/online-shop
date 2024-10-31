import React from "react";

import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { icons } from "../constants";

interface Props {
  title: string;
  value: string | undefined;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;

  [key: string]: any;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-pmedium text-gray-100">{title}</Text>
      <View
        className={`w-full h-16 border-2 bg-black-100 ${focused ? "border-secondary" : "border-black-200"} px-4 py-2 rounded-2xl flex flex-row items-center`}
      >
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          className="flex-1 text-white font-psemibold text-base"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
