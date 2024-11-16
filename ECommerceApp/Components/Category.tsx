import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Const/colors'
import { fontFamily } from '../Fonts/fonts'
import { categoryListData } from '../Data/CategoryListData'

const Category = ({selectedCategory,handleUpdateCategory}) => {
    // State Mangement
    // const [selectedCategory,setSelectedCategory] = useState('Smart Watch'); 
    const handleSelectedCategory = () => {
        // handleUpdateCategory(Category);
    }
  return <FlatList data={categoryListData} renderItem={({item,index}) => (
        <TouchableOpacity onPress={() => {
            handleUpdateCategory(item.name);
        }}>
             <Text style={[styles.categoryText,selectedCategory===item.name && {color:colors.brightPurple}]}>{item.name}</Text>
             {selectedCategory === item.name && 
              <View style={styles.underLineView}></View>
             }
            
        </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
  horizontal={true}
  ItemSeparatorComponent={
    <View style={styles.itemStyle}></View>
  }
  showsHorizontalScrollIndicator={false}
  />

  
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize:14,
        color:colors.grayColor,
        fontFamily:fontFamily.semiBold,
    },
    underLineView:{
        borderBottomColor:colors.brightPurple,
        borderBottomWidth:2,
        width:'100%',
        marginTop:10,
    },
    itemStyle:{
        paddingHorizontal:10,
    }
})