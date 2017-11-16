import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

async function getOrder() {
    try {
        const myState = await AsyncStorage.getItem('myState');
        let responseJson = await Axios.post(constants.HTTP_URL + '/getOrder', {
            'state': state,
        })
        console.log(responseJson)
    } catch (error) {
        console.error(error);
    }
}

function BackButton(navigate) {
    return (
        <TouchableOpacity onPress={() => navigate('Main')}>
            <View style={styles.button}>
                <Text>Back</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class OrderHistory extends Component {
    render() {
        const ele = (value) => (
            <TouchableOpacity onPress={() => Alert.alert(value)}>
                <View>
                    <Text style={styles.btnText}>View Order</Text>
                </View>
            </TouchableOpacity>
        )
        const navigate = this.props.navigation;
        const tableHead = ['Order', 'OrderDetail', 'Date', 'Status'];
        const tableData = [
            ['1', ele('hi'), '13-03-95 15:25', 'Cooking'],
            ['2', ele('hello'), '13-03-95 15:25', 'Pending'],
        ];
        return (
            <View style={styles.container}>
                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                </Table>
                <BackButton navigate={navigate}/>
            </View>
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
        marginTop: 10,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    btnText: {
        textDecorationLine: 'underline',
        color: 'blue',
        marginLeft: 5
    }
});