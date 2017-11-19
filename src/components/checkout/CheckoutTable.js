import React, {Component} from 'react';
import {Text, View, FlatList, Image, RefreshControl, AsyncStorage, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../checkout/Footer';
import Axios from 'axios';
import * as constants from '../../globalVar';


function CartItemInfo({item}) {
    const {imageStyle, textStyle, priceStyle} = styles
    return (
        <View style={{width: 100}}>
            <Image source={{uri: item.image}} style={imageStyle}/>
            <View style={textStyle}>
                <Text numberOfLines={1} style={{color: '#2e2f30'}}>{item.name}</Text>
                <View style={priceStyle}>
                    <Text style={{color: '#2e2f30', fontSize: 12}}>฿ {item.price}</Text>
                </View>
            </View>
        </View>
    )
}

function AmountChangeButton({iconName, onPress}) {
    return (<Icon.Button
        name={iconName}
        size={25}
        color='#fff'
        backgroundColor='#fff'
        style={{borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30}}
        iconStyle={{marginRight: 0}}
        onPress={onPress}
    />)
}

function CartItemAmount({item, onIncrease, onDecrease}) {
    const {counterStyle} = styles
    return (
        <View style={counterStyle}>
            <AmountChangeButton iconName="ios-remove" onPress={onDecrease}/>
            <Text>{item.amountTaken}</Text>
            <AmountChangeButton iconName="ios-add" onPress={onIncrease}/>
        </View>
    )
}

function CartItem({item, onIncrease, onDecrease}) {
    const {id, name, price, amountTaken, image} = item
    const {containerStyle, imageStyle} = styles

    return (
        <View style={containerStyle}>
            <CartItemInfo item={item}/>
            <CartItemAmount item={item} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </View>
    )
}


export default class CheckoutTable extends Component {
    constructor(props){
        super(props)
        this.state = {specialOrder: ''}
    }

    _purchase = async () => {
        const myState = await AsyncStorage.getItem('myState');
        console.log(this.state.specialOrder, "specialOrder")
        let responseJson = await Axios.post(constants.HTTP_URL + '/checkout', {
            'MyState': myState,
            'Order': this.props.data,
            'specialOrder': this.state.specialOrder
        })
        console.log(this.props.data)
        if (responseJson.data == true) {
            this.props.clearCart()
            Alert.alert("Order Sent")
        }
    }

    _orderInput = (specialOrder) => {
        this.setState({specialOrder})
    }

    render() {
        const renderFooter = <Footer totalForFooter={this.props.totalForFooter} _purchase={this._purchase}
                                     _orderInput={this._orderInput} clearCart={this.props.clearCart}/>
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={({item, index}) => (
                        <CartItem
                            item={item}
                            onIncrease={() => this.props.onChangeAmount(index, +1)}
                            onDecrease={() => this.props.onChangeAmount(index, -1)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={renderFooter}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 75,
        height: 75,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 40,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};