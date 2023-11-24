import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export function Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Category</Text>
      <Text style={styles.pageDescription}>Nothing to see here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    color: theme.black100,
  },
  pageDescription: {
    color: theme.black90,
  },
});
