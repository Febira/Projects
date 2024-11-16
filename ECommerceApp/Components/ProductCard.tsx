import {  Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Const/colors'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const handleProductDetailsScreen = () => {
    // navigation.navigate("ProductDetailsScreen");
    navigation.navigate("ProductDetailsScreen",{item})
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductDetailsScreen}>
        <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image}} style={styles.productImage} />
        </View>
       <View style={styles.contentContainer}> 
        <Text style={styles.contentTitle}>{item.name}</Text>
        <Text style={styles.subContentTitle}>{item.brand}</Text>
        <Text style={styles.amountTitle}>₹{item.price}</Text>
        </View> 
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:'48%',
        elevation:5, // android
        backgroundColor:'#ffffff',
        borderRadius:12,
        marginVertical:20,
        
      // ios
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.30,
        shadowRadius:3.84,
    },
    imageWrapper:{ 
      borderRadius:12,
      backgroundColor:'#f6ccbd',
      margin:10,
    },
    productImage:{
      height:120,
      width:'100%',
      borderTopLeftRadius:12,
      borderTopRightRadius:12,
      resizeMode:"contain",
    },
    contentContainer:{
      paddingHorizontal:10,
      paddingBottom:10,
      // marginHorizontal:14,
      // marginBottom:8,
    },
    contentTitle:{
      color:colors.blackColor,
      fontSize:15,
      fontWeight:'bold',
      marginTop:5,
    },
    subContentTitle:{
      fontSize:12,
      fontWeight:'regular',
      color:colors.grayColor,
      paddingVertical:10,
      // marginTop:2,
    },
    amountTitle:{
      marginTop:10,
      color:colors.brightPurple,
      fontSize:18,
      fontWeight:'bold',
    }

})