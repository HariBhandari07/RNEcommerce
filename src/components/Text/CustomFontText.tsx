import React from 'react';
import { Text, TextProps } from 'react-native';

interface CustomFontTextProps extends TextProps {
  children: React.ReactNode;
}

const CustomFontText: React.FC<CustomFontTextProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Text style={{ fontFamily: 'Manrope', color: '#1E222B' }} {...restProps}>
      {children}
    </Text>
  );
};

export default CustomFontText;
