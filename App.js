import React from 'react';
import { StyleSheet, ScrollView, Text, Alert, Button, View } from 'react-native';

import withBottomSheet from './components/withBottomSheet';
import SampleView2 from './components/views/SampleView2';
import SampleView3 from './components/views/SampleView3';

// factor is the Height percentage we wish for our bottom sheet
const factor = '70';
const SubView = withBottomSheet(SampleView2, factor);

export default function App() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Raw Bottom Sheet Demo !</Text>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.  It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </Text>
          <Text />
          <Text style={styles.bottomContent}>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
          <Text />
          <Text style={styles.bottomContent}>
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
          <View style={styles.btnContainer}>
            <Button title='Click Me' onPress={() => Alert.alert('DevOps is exhausting!')} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <SubView />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    bottom: 0
  },
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: "bold"
  },
  paragraph: {
    padding: 16,
    fontStyle: "italic",
    fontSize: 21
  },
  content: {
    alignItems: "center",

  },
  btnContainer: {
    padding: 15,
    width: '70%',
    borderRadius: 10
  },
  bottomContent: {
    margin: 15
  }
});