import React, { Component } from 'react';
import { Text, View, FlatList, Image, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../checkout/Footer';


const image1 = require('../../images/orange.jpg');
const image2 = require('../../images/tomato.jpg');
const image3 = require('../../images/salmon.jpg');
const image4 = require('../../images/greens.jpg');
const image5 = require('../../images/rye-bread.jpg');

const data = [
{
  id: 1,
  image: image1,
  name: 'Orange',
  price: 10,
}, {
  id: 2,
  image: image2,
  name: 'Tomato',
  price: 5,
}, {
  id: 3,
  image: image3,
  name: 'Salmon fillet',
  price: 16,
}, {
  id: 4,
  image: image4,
  name: 'Greens',
  price: 3,
}
];

export default class Item extends Component {

  _renderItem({ item, index }) {
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle } = styles;

    return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
      <Image source={item.image} style={imageStyle} />

      <View style={textStyle}>
        <Text style={{ color: '#2e2f30' }}>{data[index].name}</Text>
        <View style={priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>${data[index].price}</Text>
        </View>
      </View>

    </View>);
  }


  render() {
    return (
      <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={this._renderItem.bind(this)}
        keyExtractor={(item) => item.id}
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
