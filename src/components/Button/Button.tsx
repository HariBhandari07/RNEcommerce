import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Text from '../Text/CustomFontText';
import { theme } from '../../theme';

type Color = 'primary' | 'warning';
type Variant = 'contained' | 'outlined' | 'text';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: Color;
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  color = 'primary',
  variant = 'contained',
}) => {
  const getButtonStyle = (): ViewStyle => {
    let buttonStyle: ViewStyle = {};

    switch (variant) {
      case 'contained':
        buttonStyle.backgroundColor =
          color === 'primary' ? theme.blue : theme.yellow;
        break;
      case 'outlined':
        buttonStyle.borderColor =
          color === 'primary' ? theme.blue : theme.yellow;
        buttonStyle.borderWidth = 1;
        break;
      case 'text':
        break; // No additional styling for text variant
      default:
        break;
    }

    return buttonStyle;
  };

  const getTextStyle = (): TextStyle => {
    let textStyle: TextStyle = {};

    switch (variant) {
      case 'contained':
        textStyle.color = theme.white;
        break;
      case 'outlined':
        textStyle.color = color === 'primary' ? theme.blue : theme.yellow;
        break;
      case 'text':
        textStyle.color = color === 'primary' ? theme.blue : theme.yellow;
        break;
      default:
        break;
    }

    return textStyle;
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Button;
