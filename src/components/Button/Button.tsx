import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

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
        buttonStyle.backgroundColor = color === 'primary' ? 'blue' : 'yellow';
        break;
      case 'outlined':
        buttonStyle.borderColor = color === 'primary' ? 'blue' : 'yellow';
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
        textStyle.color = 'white';
        break;
      case 'outlined':
        textStyle.color = color === 'primary' ? 'blue' : 'yellow';
        break;
      case 'text':
        textStyle.color = color === 'primary' ? 'blue' : 'yellow';
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
