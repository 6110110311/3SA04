import React from 'react'
import { FlatList, View , Text , StyleSheet, Button, ImageBackground, Linking } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const supportedURL = "https://google.com";

const availableZipItems = [
    { place: 'Songkhla', code: '90110', pic: require("../img/hatyai.jpg") },
    { place: 'Trang', code: '92000', pic: require("../img/trang.jpg") },
    { place: 'Chiangmai', code: '50000', pic: require("../img/chiangmai.jpg") },
    { place: 'Khonkaen', code: '40000', pic: require("../img/khonkean.jpg") },
    { place: 'Chonburi', code: '20000', pic: require("../img/chonburi.jpg") },
    { place: 'Satun', code: '91000', pic: require("../img/satun.jpg") },
    { place: 'Yala', code: '95000', pic: require("../img/yala.jpg") },
    { place: 'Krabi', code: '81000', pic: require("../img/krabi.jpg") },
    { place: 'Phuket', code: '83000', pic: require("../img/phuket.jpg") },
    { place: 'Rayong', code: '21000', pic: require("../img/rayong.jpg") },
]

const Contact_me = (navigation) =>{
    navigation.navigate('Contact')
}

const ZipItem = ({place, code, pic, navigation}) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', {zipCode: code})
    )}>
        <View style={styles.zipItem}>
            <ImageBackground source={pic} style={styles.backdrop}>
                <Text style = {styles.txt}>{place}</Text>
                <Text style = {styles.txt}>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)

export default function zipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList
                data = {availableZipItems} 
                keyExtractor = {item => item.code} 
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation} 
                numColumns = {3}/>}
            />
            <View style={styles.buttonContainer}>
                <Button title = "Contact Me" color = "orange" onPress = {() => Linking.openURL("https://github.com/6110110311/3SA04")}></Button>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    con: {
        top: 20,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    backdrop: {
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: "center",
        width: 415,
        height: 100,
        padding: 55,
    },
    txt: {
        color: 'white',
        fontSize: 20,
    }
})