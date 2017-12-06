import React, {Component} from 'react';
import {Text, View, FlatList, Image, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Preview from './preview'
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

function AddToCartButton({item, press, icon}) {
    return (<Icon.Button
        name={icon}
        size={30}
        color="#0FB9FF"
        backgroundColor="rgba(0, 0, 0, 0)"
        style={{paddingTop: 40}}
        iconStyle={{marginRight: 0}}
        onPress={() => press(item)}
    />)
}

function CartItem({item, handleChildClick, _Preview}) {
    const {id, name, price, amountTaken, image} = item
    const {containerStyle, imageStyle} = styles
    return (
        <View style={containerStyle}>
            <CartItemInfo item={item}/>
            <AddToCartButton item={item} press={_Preview} icon={"ios-copy"}/>
            <AddToCartButton item={item} press={handleChildClick} icon={"ios-cart"}/>
        </View>
    )
}


export default class allFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkoutData: [],
            visible: null,
            index: 0,
            currentItem: {
                id: 1,
                image: 'https://storage.googleapis.com/seniorproject-server.appspot.com/food/Food1.png',
                name: 'BB Fried Rice',
                price: 10,
                amountTaken: 1,
            }
        }
    }

    async componentDidMount() {
        const Food = await this.props.getItem();
        var allFood = (Food.data)
        this.setState(() => {
            return {checkoutData: allFood}
        })
    }

    _onPressItem() {
        this.setState({visible: null,});
    };

    _Preview(item) {
        this.setState({visible: 1});
        this.setState({currentItem: item});

    };

    render() {
        return (
            <View style={styles.bigContainer}>
                <Preview
                    visible={this.state.visible}
                    item={this.state.currentItem}
                    _onPressItem={this._onPressItem.bind(this)}
                    handleChildClick={this.props.handleChildClick}
                />
                <FlatList
                    numColumns={2}
                    data={this.state.checkoutData}
                    renderItem={({item, index}) => (
                        <CartItem
                            item={item}
                            handleChildClick={this.props.handleChildClick}
                            _Preview={this._Preview.bind(this)}
                            index={index}
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
        paddingLeft: 5,
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