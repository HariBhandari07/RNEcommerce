import React from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

export function Loader() {
  return <ActivityIndicator size="large" color={theme.blue} />;
}
