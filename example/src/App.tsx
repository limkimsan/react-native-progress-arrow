import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ProgressArrow from 'react-native-progress-arrow';

export default function App() {
  return (
    <View style={styles.container}>
      <ProgressArrow steps={5} step={2} color={'blue'} customLabelStyle={{fontWeight: 'bold'}} customContainerStyle={{height: 40, alignItems: 'center'}} customProgressStyle={{marginTop: 8}} />
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
