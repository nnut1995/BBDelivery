import React from 'react';
import {View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import TotalComp from './TotalComponent';

export default function Footer({totalForFooter,_purchase, _orderInput, clearCart}) {
    const {
        containerStyle,
        buttonContainerStyle,
        closeButtonStyle,
        checkoutButtonStyle
    } = styles;

    return (
        <KeyboardAvoidingView behavior={'padding' +
        ''} style={containerStyle}>
            <TotalComp totalForFooter={totalForFooter}/>
            <TextInput
                style={styles.input}
                placeholder="Special Request"
                multiline={true}
                onChangeText={(specialOrder) => _orderInput(specialOrder)}
            />
            <View style={buttonContainerStyle}>
                <TouchableOpacity onPress={() => clearCart()}>
                    <View style={styles.button}>
                        <Text>Clear Cart</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _purchase()}>
                    <View style={styles.button}>
                        <Text>Check out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderColor: '#e2e2e2',
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        margin: 20,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    input: {
        height: 60,
        width: 340,
        backgroundColor: 'white',
        marginTop: 10,
        color: 'black',
        paddingHorizontal: 10,
        paddingTop: 10,
        borderRadius: 5

    }
};
