import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import Axios from 'axios';
import * as constants from '../../globalVar';
import OrderDetail from './orderDetail'

export default class CurrentOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Order: [],
        }
    }

    async getOrder() {
        try {
            const myState = await AsyncStorage.getItem('myState');
            let responseJson = await Axios.post(constants.HTTP_URL + '/getHistoryOrder', {
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
            newData.push([element.OrderID, this.orderViewButton(element.Order), element.OrderID.slice(8)])
        });
        return newData
    }

    doModal(value) {
        this.props.navigation.navigate('OrderDetail' ,{myOrder: value})
    }

    async componentDidMount() {
        const Order = await this.getOrder();
        this.setState({Order: Order})
    }

    render() {
        const {navigate} = this.props.navigation;
        orderViewButton = (value) => (
            <TouchableOpacity onPress={() => this.doModal(value)}>
                <View>
                    <Text style={styles.btnText}>View Order</Text>
                </View>
            </TouchableOpacity>
        )
        const tableHead = ['Order', 'OrderDetail', 'Date'];
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