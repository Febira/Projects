import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderComponent = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/images/BackArrow.png')} style={styles.Img1Container}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/images/Heart.png')} style={styles.Img2Container}/>
        </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    Img1Container:{
        height:25,
    },
    Img2Container:{
        height:25,
    },
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
    }
})