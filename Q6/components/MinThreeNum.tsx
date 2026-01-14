import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../style';

const MinThreeNumbers: React.FC = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [min, setMin] = useState<number | null>(null);

  const findMin = () => {
    setMin(Math.min(Number(a), Number(b), Number(c)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minimum of 3 Numbers</Text>

      <TextInput
        style={styles.input}
        placeholder="A"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="B"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="C"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setC}
      />

      <Button title="Find Min" onPress={findMin} />

      {min !== null && <Text style={styles.result}>Min: {min}</Text>}
    </View>
  );
};

export default MinThreeNumbers;
