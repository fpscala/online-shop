import React from 'react';

import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  additionalText?: string;
  additionalTextStyle?: string;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  additionalText,
  additionalTextStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-primary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
        {title}
        {additionalText && <Text className={additionalTextStyle}>{additionalText}</Text>}
      </Text>

      {isLoading && (
        <ActivityIndicator animating={isLoading} color="#000" size="small" className="ml-2" />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
