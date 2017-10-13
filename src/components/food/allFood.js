import React, {Component} from 'react';
import {Text, View, FlatList, Image, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckoutTable from "../checkout/CheckoutTable";

const image1 = require('../../images/orange.jpg');
const image2 = require('../../images/tomato.jpg');
const image3 = require('../../images/salmon.jpg');
const image4 = require('../../images/greens.jpg');
const image5 = require('../../images/rye-bread.jpg');

const checkoutData = [
    {
        id: 1,
        image: image1,
        name: 'Orange',
        price: 10,
        amountTaken: 1,
    }, {
        id: 2,
        image: image2,
        name: 'Tomato',
        price: 5,
        amountTaken: 1,
    }, {
        id: 3,
        image: image3,
        name: 'Salmon fillet',
        price: 16,
        amountTaken: 1,
    }, {
        id: 4,
        image: image4,
        name: 'Greens',
        price: 3,
        amountTaken: 1,
    }, {
        id: 5,
        image: image3,
        name: 'Salmon fillet',
        price: 16,
        amountTaken: 1,
    }, {
        id: 6,
        image: image4,
        name: 'Greens',
        price: 3,
        amountTaken: 1,
    }, {
        id: 7,
        image: image1,
        name: 'Orange',
        price: 10,
        amountTaken: 1,
    }, {
        id: 8,
        image: image2,
        name: 'Tomato',
        price: 5,
        amountTaken: 1,
    }
]

// function AppendToCart({item}) {
//     CheckoutTable.data.push(item)
// }

function CartItemInfo({item}) {
    const {imageStyle, textStyle, priceStyle} = styles
    console.log(item)
    return (
        <View>
            <Image source={item.image} style={imageStyle}/>
            <View style={textStyle}>
                <Text style={{color: '#2e2f30'}}>{item.name}</Text>
                <View style={priceStyle}>
                    <Text style={{color: '#2e2f30', fontSize: 12}}>${item.price}</Text>
                </View>
            </View>
        </View>
    )
}


function AddToCartButton({item}) {
    return (<Icon.Button
        name="ios-cart"
        size={30}
        color="#0FB9FF"
        backgroundColor="rgba(0, 0, 0, 0)"
        style={{padding: 40}}
        iconStyle={{marginRight: 0}}
        onPress={() => CheckoutTable.AppendToCart()}
    />)
}


function CartItem({item}) {
    const {id, name, price, amountTaken, image} = item
    const {containerStyle, imageStyle} = styles

    return (
        <View style={containerStyle}>
            <CartItemInfo item={item}/>
            <AddToCartButton item={item}/>
        </View>
    )
}


export default class allFood extends Component {
    // item = this.prop.data
    render() {
        return (
            <View style={styles.bigContainer}>
                <FlatList
                    numColumns={2}
                    data={checkoutData}
                    renderItem={({item, index}) => (
                        <CartItem
                            item={item}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = {
    bigContainer: {
        flexDirection: 'row',
        flex: 1,
    },
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