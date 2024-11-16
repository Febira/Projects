import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import { useRoute, useNavigation } from '@react-navigation/native';
  import HeaderComponent from './Components/HeaderComponent';
  import ProductCarousel from './Components/ProductCarousel';
  import { colors } from './Const/colors';
  import { ScrollView } from 'react-native-gesture-handler';
  
  const ProductDetailsScreen = () => {
    const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object
    const item = useRoute().params.item;
  
    return (
      <ScrollView>
        <View style={styles.container}>
          <HeaderComponent navigation={navigation} />
          <ProductCarousel images={item.images} />
          {/* TITLE CONTAINER */}
          <View style={styles.titleContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.brandName}>{item.brand}</Text>
              <View style={styles.ratingWrapper}>
                <Image
                  source={require('../ECommerceApp/assets/images/Star.png')}
                  style={styles.starIcon}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
              <View style={styles.descriptionView}>
                <Text style={styles.SubTitle}>Details</Text>
                <Text style={styles.subTitleDescription}>{item.details}</Text>
                <Text style={styles.SubTitle}>Review</Text>
                <Text style={styles.subTitleDescription}>{item.review}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.ButtonView}>
              <Image
                source={require('../ECommerceApp/assets/images/Cart.png')}
                style={styles.buyIcon}
              />
              <Text style={styles.buyNowText}>
                Buy Now | ₹{item.price}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default ProductDetailsScreen;
  
  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleWrapper: {},
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    brandName: {
      fontSize: 15,
      fontWeight: '600',
      marginVertical: 5,
    },
    starIcon: {
      height: 20,
      width: 20,
      marginTop: 7,
    },
    ratingWrapper: {
      flexDirection: 'row',
      borderRadius: 15,
      width: '20%',
    },
    ratingText: {
      marginTop: 10,
      marginLeft: 2,
    },
    SubTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    subTitleDescription: {
      color: colors.grayColor,
      margin: 5,
      fontSize: 14,
    },
    ButtonView: {
      backgroundColor: colors.brightPurple,
      borderRadius: 12,
      flexDirection: 'row',
      height: 50,
      width: '100%',
      marginVertical: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    descriptionView: {
      marginVertical: 20,
    },
    buyIcon: {
      height: 30,
      width: 30,
      color: '#ffffff',
    },
    buyNowText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: colors.background,
    },
  });
  