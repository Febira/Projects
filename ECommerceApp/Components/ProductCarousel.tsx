import { Dimensions, Image, StyleSheet, View, FlatList } from 'react-native';
import React, { useRef } from 'react';
import {useState} from 'react';
import { colors } from '../Const/colors';

const screenWidth = Dimensions.get("window").width;

const ProductCarousel = ({ images }) => {
  

  const [activeSlide,setActiveSlide] = useState(0);
  console.log("images :", images);

  return (
    <>
       <FlatList
      data={images}
      renderItem={({ item }) => { 
        return (
          <View style={styles.productImageWrapper}>
            <Image source={{ uri: item }} style={styles.productImage} />
          </View>
        );
      }}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      snapToAlignment='center'
      snapToInterval={screenWidth}
      decelerationRate={'fast'}
      keyExtractor={(item, index) => index.toString()} 
    />
    <View style={styles.pagination}>
      {
        images.map((_,index) => (
        <View style={[styles.dotContainer, index === activeSlide && {
          width:20,
          borderRadius:32,
        },
        {
          backgroundColor:index===activeSlide ? colors.brightPurple :colors.grayColor,
        }
      ]} />
      ))}
     
    </View>
    </>
 
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,  
    paddingTop: 15,
  },
  productImage: {
    height: 250,
    width: '100%',
    resizeMode: 'contain',
  },
  pagination:{
    justifyContent:'center',
    // alignItems:'center',
    marginVertical:20,
    flexDirection:'row',

  },
  dotContainer:{
    height:10,
    width:10,
    borderRadius:5,
    marginHorizontal:5,
    backgroundColor:'#B5B4B2',
  }
});
