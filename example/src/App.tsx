import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ProgressArrow from 'react-native-progress-arrow';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <ProgressArrow steps={5} step={2} color={'blue'} customLabelStyle={{color: 'red', fontWeight: 'bold', fontSize: 20}} customProgressStyle={{height: 60}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
