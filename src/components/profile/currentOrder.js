import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import Axios from 'axios';
import * as constants from '../../globalVar';
import OrderDetail from './orderDetail'

// function Button(orderID) {
//     return (
//         <TouchableOpacity onPress={() => cancleOrder(orderID)}>
//             <View>
//                 <Text style={styles.btnText}>Cancle Order</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }
//
// function Blank() {
//     return <text>Cancle not Available</text>;
// }

// async function cancleOrder(orderID) {
//     try {
//         let responseJson = await Axios.post(constants.HTTP_URL + '/cancleFood', {
//             'orderID': orderID,
//         })
//         if (responseJson.data == "done") {
//             Alert.alert("Your order is already cancled")
//             // navigation.navigate('TabRender')
//         }
//         return "success"
//     } catch (error) {
//         console.error(error);
//     }
// }


// function Canceling(status, orderID) {
//     if (status == 'Pending') {
//         return <Button orderID={orderID}/>;
//     }
//     return <Blank/>;
// }


export default class CurrentOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Order: [],
        }
    }

    async cancleOrder(orderID) {
        try {
            let responseJson = await Axios.post(constants.HTTP_URL + '/cancleFood', {
                'orderID': orderID,
            })
            if (responseJson.data == "done") {
                Alert.alert("Your order is already canceled")
                this.refresh()
            }
            return "success"
        } catch (error) {
            console.error(error);
        }
    }

    async getOrder() {
        try {
            const myState = await AsyncStorage.getItem('myState');
            let responseJson = await Axios.post(constants.HTTP_URL + '/getCurrentOrder', {
                'state': myState,
            })
            return this.toGrid(responseJson.data)
        } catch (error) {
            console.error(error);
        }
    }

    toGrid(data) {
        newData = []
        data.forEach(function (element) {
            newData.push([element.OrderID, this.orderViewButton(element.Order), element.OrderID.slice(8),
                element.FoodStatus, this.cancleButton(element.OrderID, element.FoodStatus)])
        });
        return newData
    }

    navi(value) {
        this.props.navigation.navigate('OrderDetail', {myOrder: value})
    }

    async refresh() {
        const Order = await this.getOrder();
        this.setState({Order: Order})
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        cancleButton = (orderID, status) => {
            if (status == 'Pending') {
                return <CancleButton orderID={orderID} />
            }
            else {
                return <Blank />
            }
        }

        CancleButton = (orderID) => (
            <TouchableOpacity onPress={() => this.cancleOrder(orderID)}>
                <View>
                    <Text style={styles.btnText}>Cancel Order</Text>
                </View>
            </TouchableOpacity>
        )

        Blank = () => (
            <Text style={styles.btnText}> </Text>
        )

        orderViewButton = (value) => (
            <TouchableOpacity onPress={() => this.navi(value)}>
                <View>
                    <Text style={styles.btnText}>View Order</Text>
                </View>
            </TouchableOpacity>
        )
        const tableHead = ['Order', 'OrderDetail', 'Date', 'Status', 'Cancelling'];
        return (
            <ScrollView style={styles.container}>
                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.Order} style={styles.row} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {marginLeft: 5},
    row: {height: 60},
    head: {height: 60, backgroundColor: '#f1f8ff'},
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    btnText: {
        textDecorationLine: 'underline',
        color: 'blue',
        marginLeft: 5
    }
});