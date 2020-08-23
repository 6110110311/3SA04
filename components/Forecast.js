import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.name}>{props.name} </Text>
            <Text style={styles.mainText}>STATUS: {props.main}</Text>
            <Text style={styles.descriptionText}>NOW: {props.description}</Text>
            <Text style={styles.name}>{props.temp} °C</Text>
            <Text style={styles.littletemp}>HIGH: {props.temp_max} °C LOW: {props.temp_min} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    mainText: {
        fontSize: 20,
        color: 'white',
        paddingTop: 10,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 20,
        color: 'white',
        paddingTop: 10,
        textAlign: 'center',
        
    },
    tempText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    celsiusText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    name: {
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
    },
    littletemp: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    }
    
})