import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";


const { height } = Dimensions.get('window');

const withBottomSheet = (SheetViewComponent) => {
    const BottomSheetView = () => {
        const refRBSheet = useRef();
        return (
            <>
                <RBSheet
                    ref={refRBSheet}
                    height={height / 1.7}
                    minClosingHeight={0}

                    duration={250}
                    customStyles={customStyles}
                    closeOnDragDown={true}
                    dragFromTopOnly={true}
                    keyboardAvoidingViewEnabled={false}
                >
                    <SheetViewComponent />
                </RBSheet>

                <TouchableHighlight underlayColor="#DDDDDD" style={styles.slider} onPress={(e) => {
                    refRBSheet.current.open();
                }}>
                    <View style={styles.drag} />
                </TouchableHighlight>
            </>
        )
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
        bottom: 11,
        width: '100%',
    },
    drag: {
        flex: 1,
        borderBottomColor: '#404040',
        borderBottomWidth: 4,
        marginHorizontal: '40%',
        borderRadius: 12,
    }
})

export default withBottomSheet;