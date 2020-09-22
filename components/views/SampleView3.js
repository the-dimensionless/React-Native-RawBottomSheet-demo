import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const SampleView3 = () => {

    const [chosen, setChosen] = useState(false);

    const [input, setInput] = useState('');

    if (chosen) {
        return (
            <View style={styles.chosenContainer}>
                <Text style={styles.header}>Enter Email</Text>
                <TextInput style={styles.input} value={input} onChangeText={(t) => setInput(t)}></TextInput>
                <View style={styles.btn}>
                    <Button title='Get OTP' />
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.main}>
                <View style={styles.btn}>
                    <Button title='Enter Email' onPress={() => setChosen(true)} />
                </View>

                <View style={styles.btn}>
                    <Button title='Enter Phone' />
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        margin: 20,
        flexDirection: "row"
    },
    btn: {
        borderRadius: 24,
        padding: 30
    },
    header: {
        fontSize: 24,
        padding: 4
    },
    input: {
        paddingTop: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 9
    },
    chosenContainer: {
        margin: 15
    }
})

export default SampleView3;