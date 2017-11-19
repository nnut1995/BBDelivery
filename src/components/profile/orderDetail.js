import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';


export default class OrderDetail extends Component {

    toGrid(data) {
        allAmount = 0
        allPrice = 0
        newData = []
        data.forEach(function (element) {
            allAmount += element.amountTaken
            totalPrice = element.amountTaken*element.price
            allPrice += totalPrice
            newData.push([element.name, element.price,element. amountTaken, totalPrice ])
        });
        newData.push(['','', allAmount, allPrice ])
        return newData
    }

    tableHead = ['Menu', 'Price','Amount', 'TotalPrice'];
    tableData = this.toGrid(this.props.navigation.state.params.myOrder)

    render() {
        // const {state} = this.props.navigation;
        console.log(this.props.navigation.state.params.myOrder, " My Navigation Prop")
        return (
            <ScrollView style={styles.container}>
                <Table>
                    <Row data={this.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.tableData} style={styles.row} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    imageStyle: {
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    textStyle: {
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
        margin: 5
    },
    text: {marginLeft: 5},
    row: {height: 60},
    head: {height: 60, backgroundColor: '#f1f8ff'}
});