import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';

const Square = ({ id }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{id}</Text>
      <Button title="Click" onPress={() => alert(`Square ${id} pressed!`)} />
    </View>
  );
};

export default Square;
