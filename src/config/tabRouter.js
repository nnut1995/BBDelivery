import React, {PureComponent} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap, TabViewPagerScroll} from 'react-native-tab-view';
import Drink from '../components/drink/drinkRender'
import Food from '../components/food/foodRender'
import Checkout from '../components/checkout/Checkout'
import Profile from '../components/profile/profilePage'


export default class tabRouter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key: '1', title: 'Drink'},
                {key: '2', title: 'Food'},
                {key: '3', title: 'Checkout'},
                {key: '4', title: 'Profile'},
            ],
            data: [],
            totalForFooter: [0, 0],
        }
    }

    async onChangeAmount(index, amountChange) {
        await this.setState((st) => {
            const newData = [...st.data]
            var newAmount = st.data[index].amountTaken + amountChange
            newAmount = newAmount < 0 ? 0 : newAmount
            newData[index] = {...st.data[index], amountTaken: newAmount}
            return {data: newData}
        })
        this.handleTotalAmount()
    }

    checkSimilar(childData) {
        var status = false;
        this.state.data.forEach(function (element) {
            if (element.id == childData.id) {
                status = true;
                return status
            }
        });
        return status
    }

    async clearCart() {
        await this.setState({data: []})
        this.handleTotalAmount()
    }

    async handleChildClick(childData, visible) {
        if (!this.checkSimilar(childData)) {
            await this.setState((oldst, myFunction) => {
                return {data: [...oldst.data, childData]}
            });
            this.handleTotalAmount()
        }
        else {
            var index = this.state.data.map(function(el) {
                return el.id;
            }).indexOf(childData.id);
            this.onChangeAmount(index,+1)
        }
    }

    handleTotalAmount() {
        this.setState(() => {
            var totalAmount = 0
            var totalPrice = 0
            this.state.data.forEach(function (element) {
                totalAmount = totalAmount + element.amountTaken
                totalPrice = totalPrice + (element.price * element.amountTaken)
            });
            return {totalForFooter: [totalAmount, totalPrice]}
        })
    }

    _handleIndexChange = index => this.setState({index});
    _renderHeader = props => <TabBar {...props} />;


    _renderScene = ({route}) => {
        const scenes = {
            '1': <Drink handleChildClick={this.handleChildClick.bind(this)}/>,
            '2': <Food handleChildClick={this.handleChildClick.bind(this)}/>,
            '3': <Checkout data={this.state.data} onChangeAmount={this.onChangeAmount.bind(this)}
                           totalForFooter={this.state.totalForFooter} clearCart={this.clearCart.bind(this)}/>,
            '4': <Profile />,
        };
        return scenes[route.key];
    };

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

const
    styles = StyleSheet.create({
        container: {
            flex: 1,


        },
    });

