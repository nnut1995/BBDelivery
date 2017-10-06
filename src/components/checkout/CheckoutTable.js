import React, {Component} from 'react';
import {Text, View, FlatList, Image, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../checkout/Footer';


const image1 = require('../../images/orange.jpg');
const image2 = require('../../images/tomato.jpg');
const image3 = require('../../images/salmon.jpg');
const image4 = require('../../images/greens.jpg');
const image5 = require('../../images/rye-bread.jpg');

// const data = [
// {
//   id: 1,
//   image: image1,
//   name: 'Orange',
//   price: 10,
//   amountTaken: 3
// }, {
//   id: 2,
//   image: image2,
//   name: 'Tomato',
//   price: 5,
//   amountTaken: 4
// }, {
//   id: 3,
//   image: image3,
//   name: 'Salmon fillet',
//   price: 16,
//   amountTaken: 2
// }, {
//   id: 4,
//   image: image4,
//   name: 'Greens',
//   price: 3,
//   amountTaken: 3
// }
// ];


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
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image: image1,
                    name: 'Orange',
                    price: 10,
                    amountTaken: 3
                }, {
                    id: 2,
                    image: image2,
                    name: 'Tomato',
                    price: 5,
                    amountTaken: 4
                }, {
                    id: 3,
                    image: image3,
                    name: 'Salmon fillet',
                    price: 16,
                    amountTaken: 2
                }, {
                    id: 4,
                    image: image4,
                    name: 'Greens',
                    price: 3,
                    amountTaken: 3
                }
            ]
        };
    }

    onChangeAmount(index, amountChange) {
        this.setState((st) => {
            const newData = [...st.data]
            var newAmount = st.data[index].amountTaken + amountChange
            newAmount = newAmount < 0 ? 0 : newAmount
            newData[index] = {...st.data[index], amountTaken: newAmount}
            return {data: newData}
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item, index}) => (
                        <CartItem
                            item={item}
                            onIncrease={() => this.onChangeAmount(index, +1)}
                            onDecrease={() => this.onChangeAmount(index, -1)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={Footer}
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