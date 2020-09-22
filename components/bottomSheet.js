import React, { Component } from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import SampleView from './views/SampleView';
import SampleView3 from './views/SampleView3';
import SampleView2 from './views/SampleView2';

class Example extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, alignItems: "center" }}>
                <Button
                    title="OPEN BOTTOM SHEET"
                    onPress={() => {
                        console.log('trying to open')
                        this.RBSheet.open();
                    }}
                />
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    minClosingHeight={20}

                    duration={250}
                    customStyles={customStyles}
                    closeOnDragDown={true}
                    dragFromTopOnly={true}
                >
                    <ScrollView>
                        <SampleView2 />
                    </ScrollView>
                </RBSheet>
            </View>
        );
    }
}

const customStyles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(246, 241, 241)',
        borderTopEndRadius: 36,
        borderTopStartRadius: 36
    }
})

export default Example;