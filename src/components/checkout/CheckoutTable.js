import React, {Component} from 'react';
import {Text, View, FlatList, Image, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../checkout/Footer';

function CartItemInfo({item}) {
    const {imageStyle, textStyle, priceStyle} = styles
    // console.log(item)
    return (
        <View>
            <Image source={{uri: item.image}} style={imageStyle}/>
            <View style={textStyle}>
                <Text style={{color: '#2e2f30'}}>{item.name}</Text>
                <View style={priceStyle}>
                    <Text style={{color: '#2e2f30', fontSize: 12}}>${item.price}</Text>
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
    }

    render() {
        const renderFooter = <Footer totalForFooter={this.props.totalForFooter} />
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
        width: 50,
        height: 50,
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