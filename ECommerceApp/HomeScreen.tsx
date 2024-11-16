import { SafeAreaView,StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React ,{useState} from 'react'
import { colors } from './Const/colors'
import { fontFamily } from './Fonts/fonts'
import { TextInput } from 'react-native-gesture-handler'
import Category from './Components/Category'
import ProductCard from './Components/ProductCard'
import { Smartwatch } from './Data/SmartWatchData'
import { HeadphoneeData } from './Data/HeadphoneeData'

const HomeScreen = () => {
    const [text,setText] = React.useState('');
    const[data,setData] = useState(Smartwatch);
    const [selectedCategory,setSelectedCategory] = useState('Smart Watch'); 

    const handleUpdateCategory = (newCategory) =>{
        if (newCategory==="Smartwatch"){
            setData(Smartwatch);
        }
        else if (newCategory==="AirPods"){
            setData(HeadphoneeData);
        }
            setSelectedCategory(newCategory);
        
    }

  return (
    <SafeAreaView>
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Find your suitable Product now.</Text>
       <View style={styles.mainInputContainer}>
            <View style={styles.inputWrapper}>
                <Image source={require('../ECommerceApp/assets/images/Search.png')} style={styles.searchImgContainer}/>
                <TextInput style={styles.textInput} placeholder='Search Product' value={text} onChangeText={(input) => setText(input)} autoFocus={true} keyboardType="default"/>
            </View>
            <View style={styles.categoryContainer}>
                <Image/>
                <Image source={require('../ECommerceApp/assets/images/Category.png')} style={styles.categoryImgContainer}/>
            </View>
       </View>
       {/* <Category/> */}
        {/* <ProductCard/> */}
        <FlatList ListHeaderComponent={ 
            <>
            <Category selectedCategory={selectedCategory}
                      handleUpdateCategory={handleUpdateCategory}
                      />
            </>}data={data} renderItem={({item,index}) => <ProductCard item={item}/>} numColumns={2} columnWrapperStyle={{justifyContent:"space-between"}} contentContainerStyle={{paddingBottom:400}} showsVerticalScrollIndicator={false}/>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    textContainer:{
        // backgroundColor:colors.background,
        padding:15,
        backgroundColor:colors.background,
    },
    headingText:{
        fontSize:36,
        fontWeight:'bold',
        color:colors.blackColor,
        fontFamily:fontFamily.Bold,
    },
    mainInputContainer:{
        flexDirection:'row',
        // backgroundColor:'tomato',
        alignItems:'center',
        marginVertical:20,
    },
    inputWrapper:{
        flex:1,
        flexDirection:'row',
        borderWidth:0.5,
        padding:8,
        marginRight:10,
        borderRadius:50,
        borderColor:colors.grayColor,
    },
    searchImgContainer:{
        height:30,
        width:30,
        padding:2,
        marginVertical:5,
    },
    textInput:{
        paddingLeft:10,
    },
    categoryContainer:{
        paddingLeft:5,
       
    },
    categoryImgContainer:{
        width:30,
        height:30,
    },
    flatListView:{
        flex:1,
        backgroundColor:'#000000',
    }
})