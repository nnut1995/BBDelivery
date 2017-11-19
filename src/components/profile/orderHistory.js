import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import Axios from 'axios';
import * as constants from '../../globalVar';

async function getOrder() {
    try {
        const myState = await AsyncStorage.getItem('myState');
        let responseJson = await Axios.post(constants.HTTP_URL + '/getCurrentOrder', {
            'state': myState,
        })
        console.log(toGrid(responseJson.data))
        return toGrid(responseJson.data)
    } catch (error) {
        console.error(error);
    }
}

function toGrid(data) {
    newData = []
    data.forEach(function(element) {
        newData.push([element.OrderID, orderViewButton(element.Order), element.OrderID])
    });
    return newData
}

function BackButton({navigate}) {
    return (
        <TouchableOpacity onPress={() => navigate('Main')}>
            <View style={styles.button}>
                <Text>Back</Text>
            </View>
        </TouchableOpacity>
    )
}

function orderViewButton(value) {
    return (
        <TouchableOpacity onPress={() => Alert.alert(value)}>
            <View>
                <Text style={styles.btnText}>View Order</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class OrderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Order: []
        }
    }

    async componentDidMount() {
        const Order = await getOrder();
        this.setState({Order: Order})
    }


    render() {
        const {navigate} = this.props.navigation;
        const tableHead = ['Order', 'OrderDetail', 'Date'];
        return (
            <ScrollView style={styles.container}>
                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.Order} style={styles.row} textStyle={styles.text}/>
                    <BackButton navigate={navigate}/>
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