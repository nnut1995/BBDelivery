import React, {PureComponent} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap, TabViewPagerScroll} from 'react-native-tab-view';
// import { width, height, totalSize } from 'react-native-dimension';
import Drink from '../components/home/drink'
import Food from '../components/food/foodRender'
import Checkout from '../components/checkout/Checkout'
import Profile from '../components/home/profile'


// const FirstRoute = () => <Drink />;
// const SecondRoute = () => <Food />;
// const ThirdRoute = () => <Checkout />;
// const FourthRoute = () => <Profile />;
const image1 = require('../images/orange.jpg');
const image2 = require('../images/tomato.jpg');
const image3 = require('../images/salmon.jpg');
const image4 = require('../images/greens.jpg');
const image5 = require('../images/rye-bread.jpg');



export default class TabViewExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                image: image1,
                name: 'Orange',
                price: 10,
                amountTaken: 1,
            }]
        };
    }

    state = {
        index: 0,
        routes: [
            {key: '1', title: 'Drink'},
            {key: '2', title: 'Food'},
            {key: '3', title: 'Checkout'},
            {key: '4', title: 'Profile'},

        ],
    };

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': () => <Drink />,
        '2': () => <Food />,
        '3': () => <Checkout data={this.state.data}/>,
        '4': () => <Profile />,
    });

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={this._initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
