import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SampleView2 = () => {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Please enter the OTP</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input} onChangeText={(e) => setInput(e)} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input2} onChangeText={(e) => setInput2(e)} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input3} onChangeText={(e) => setInput3(e)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input4} onChangeText={(e) => setInput4(e)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input5} onChangeText={(e) => setInput5(e)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input6} onChangeText={(e) => setInput6(e)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={input7} onChangeText={(e) => setInput7(e)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 14,
        padding: 23,
        alignSelf: "center"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold"
    },
    input: {
        paddingTop: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 9
    },
    inputContainer: {
        padding: 11
    }
});

export default SampleView2;