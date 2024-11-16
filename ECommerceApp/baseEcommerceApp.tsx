import { SafeAreaView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{ NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import ProductDetailsScreen from './ProductDetailsScreen'

const Stack = createStackNavigator();
const baseEcommerceApp = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default baseEcommerceApp

const styles = StyleSheet.create({})