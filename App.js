import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import withBottomSheet from './components/withBottomSheet';
import SampleView2 from './components/views/SampleView2';

const SubView = withBottomSheet(SampleView2);

export default function App() {
  return (
    <View style={styles.container}>
      <SubView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
