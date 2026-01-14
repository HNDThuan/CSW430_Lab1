import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Square from './Square';
import { Data } from './data';
import styles from './style';

const App = () => {
  return (
    <View style={styles.container}>
      {Data.map(item => (
        <Square key={item} id={item} />
      ))}
    </View>
  );
};

export default App;
