import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../style';

const Hailstone: React.FC = () => {
  const [n, setN] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generate = () => {
    let num = parseInt(n);
    if (num <= 0) return;

    const result: number[] = [];
    while (num !== 1) {
      result.push(num);
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
    result.push(1);
    setSequence(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hailstone Sequence</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter n > 0"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setN}
      />

      <Button title="Generate" onPress={generate} />

      <Text>{sequence.join(' → ')}</Text>
    </View>
  );
};

export default Hailstone;
