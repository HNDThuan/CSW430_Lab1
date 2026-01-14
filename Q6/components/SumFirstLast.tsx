import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../style';

const SumFirstLast: React.FC = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (number.length === 0) return;
    setResult(parseInt(number[0]) + parseInt(number[number.length - 1]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum First & Last Digit</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number"
        placeholderTextColor="#999"
        onChangeText={setNumber}
      />

      <Button title="Calculate" onPress={calculate} />

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

export default SumFirstLast;
