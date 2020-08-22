import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.name}>City: {props.name} </Text>
            <Text style={styles.mainText}>Status: {props.main}</Text>
            <Text style={styles.descriptionText}>Now: {props.description}</Text>
            <Text style={styles.name}>{props.temp} °C</Text>
            <Text style={styles.littletemp}>High: {props.temp_max} °C Low: {props.temp_min} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    mainText: {
        fontSize: 20,
        color: 'red',
        paddingTop: 10,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 20,
        color: 'red',
        paddingTop: 10,
        textAlign: 'center',
        
    },
    tempText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 30,
    },
    celsiusText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'red',
    },
    name: {
        fontSize: 45,
        textAlign: 'center',
        color: 'red',
    },
    littletemp: {
        fontSize: 15,
        textAlign: 'center',
        color: 'red',
    }
    
})