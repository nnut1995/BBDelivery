import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';


export default class Preview extends Component {

    _cartItemInfo = (item) => (
        <View>
            <Image source={{uri: item.image}}
                   style={styles.imageStyle}/>
            <View style={styles.textStyle}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>Description</Text>
                <Text>{item.price} Baht</Text>
            </View>
        </View>
    )

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
            {this._cartItemInfo(this.props.item)}
            <View style={styles.rowStyle}>
                {this._renderButton('Close', () => this.props._onPressItem())}
                {this._renderButton('Add to cart', () => this.props.handleChildClick(this.props.item))}
            </View>
        </View>
    );

    render() {
        return (
            <Modal
                isVisible={this.props.visible === 1}
                onBackdropPress={() => this.props._onPressItem()}
            >
                {this._renderModalContent()}
            </Modal>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    imageStyle: {
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    textStyle: {
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
    }
});