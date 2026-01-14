import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EmployeeForm from './components/Employee';
import SumFirstLast from './components/SumFirstLast';
import MinThreeNumbers from './components/MinThreeNum';
import Hailstone from './components/Hailstone';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <EmployeeForm title="Employee Information" />
      <SumFirstLast />
      <MinThreeNumbers />
      <Hailstone />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
