import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const SampleView = () => {
    const [userInput, setUserInput] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter OTP</Text>
            <View style={styles.inputContainer}>
                <TextInput value={userInput} onChangeText={(t) => setUserInput(t)} style={styles.input} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 3
    },
    text: {
        fontSize: 24

    },
    input: {
        borderWidth: 3,
        borderRadius: 16,
    },
    inputContainer: {
        padding: 2
    }
})

export default SampleView;