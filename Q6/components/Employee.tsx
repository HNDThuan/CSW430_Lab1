import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from '../style';

type Props = {
  title: string;
};

const EmployeeForm: React.FC<Props> = ({ title }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const handleUpdate = () => {
    Alert.alert(
      'Success',
      'Update successful' +
        '\n' +
        `Name: ${name}\nAge: ${age}\nOccupation: ${job}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor="#999"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Occupation"
        placeholderTextColor="#999"
        onChangeText={setJob}
      />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default EmployeeForm;
