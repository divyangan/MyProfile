import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from './src/Screen';

const App = () => {
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;