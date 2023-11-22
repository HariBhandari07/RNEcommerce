import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Products } from './screens/Products.screen';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Products />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
