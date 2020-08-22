import React, { useState , useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        name: 'name',
        temp_max: 'Max',
        temp_min: 'Min'
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=500c3197a24eaebf298085e5c078a5b6`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    name: json.name,
                    temp_max: json.main.temp_max,
                    temp_min: json.main.temp_min,
                    temp: json.main.temp});

                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    if(props.zipCode == "90110"){
        console.log("Hatyai");
        
    }
       

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.background}>
                <Text style={styles.zipCodeText}>Zip code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zipCodeText: {
        paddingTop: 20,
        fontSize: 10,
        color: 'red',
        textAlign: 'center'
    },
    background: {
        backgroundColor: 'black',
        position: 'absolute',
        left: 0,
        top: 20,
        opacity: 0.65,
        width: '100%',
        height: '40%'
    }
})