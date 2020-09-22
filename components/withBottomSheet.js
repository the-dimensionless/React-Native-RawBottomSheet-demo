import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

const { height } = Dimensions.get('window');

const withBottomSheet = (SheetViewComponent) => {
    class BottomSheetView extends Component {
        componentDidMount = () => {
        }
        render = () => {
            return (
                <>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={height / 1.5}
                        minClosingHeight={20}

                        duration={250}
                        customStyles={customStyles}
                        closeOnDragDown={true}
                        dragFromTopOnly={true}
                    >
                        <ScrollView>
                            <SheetViewComponent />
                        </ScrollView>
                    </RBSheet>
                    <TouchableHighlight style={styles.slider} onPress={(e) => {
                        this.RBSheet.open();
                    }}>
                        <View style={styles.drag} />
                    </TouchableHighlight>
                </>
            )
        }
    }
    return BottomSheetView
};

const customStyles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(246, 241, 241)',
        borderTopEndRadius: 36,
        borderTopStartRadius: 36
    }
})
const styles = StyleSheet.create({
    slider: {
        position: 'absolute',
        bottom: 5,
    },
    drag: {
        borderBottomColor: '#404040',
        borderBottomWidth: 4,
        marginHorizontal: '36%',
        marginTop: 5,
        marginLeft: '50%',
        borderRadius: 12
    }
})

export default withBottomSheet;