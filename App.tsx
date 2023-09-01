/* eslint-disable no-use-before-define */
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

const App = (): React.ReactNode => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
