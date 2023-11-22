import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './components/Navigation/BottomTabs.navigator';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
