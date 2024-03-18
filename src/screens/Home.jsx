import React,{useEffect, useState} from 'react';
import { View, Text, ScrollView } from 'react-native'
import {Avatar,Button} from 'react-native-paper';
import { TouchableOpacity} from 'react-native';
import { colors, defaultStyle } from '../styles/styles';

import Header from '../components/Header'
import SearchModal from '../components/SearchModal';
import {useIsFocused, useNavigation } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import { useDispatch, useSelector } from "react-redux";
import { useSetCategories } from "../utils/hooks";
import { getAllProducts } from "../../redux/actions/productAction";
import { Toast } from "react-native-toast-message/lib/src/Toast"; 

// export const products = [
//   {
//     stock: 23,
//     name: "Chairs",
//     price:256863,
//     _id:"saderwsertiuplkjd",
//     category : "aaaaetagkhslljklp",
//     images:[
//         {
        
//          url:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg"
//         }
//     ]
//   },

//   {
//     stock: 24,
//     name: "Sofa chair",
//     price:2568,
//     _id:"saderw34riuplkokpyh",
//     category : "aaahgaagkhslljloiuklp",
//     images:[
//         {
          
        
//          url : "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg"
//         }
//     ]
//   },
//   {
//     stock: 23,
//     name: "Chairs",
//     price:256863,
//     _id:"saderidfrtyuplkjd",
//     category : "aaakoaagsdfggkhslljklp",
//     images:[
//         {
//           url : "https://www.shutterstock.com/image-photo/scandinavian-sofa-260nw-412576513.jpg",
       
//         }
//     ]
//   },
//   {
//     stock: 23,
//     name: "Chairs 455",
//     price:256863,
//     _id:"saderiurtyuplkjd",
//     category : "aaaaw345agolkhslljklp",
//     images:[
//         {
//           url : "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg",
       
//         }
//     ]
//   },
//   {
//     stock: 23,
//     name: "Chairs",
//     price:256863,
//     _id:"saderiuprewqlkjd",
//     category : "aaaaapewouybgfgkhslljklp",
//     images:[
//         {
//           url : "https://5.imimg.com/data5/UA/YX/ZE/ANDROID-70511697/product-jpeg.jpg",
         
//         }
//     ]
//   },
//   {
//     stock: 23,
//     name: "Chairs",
//     price:256863,
//     _id:"saderiupwe4rlkjd",
//     category : "aaaawqaapouybgfgkhslljklph",
//     images:[
//         {
         
//          url:"https://5.imimg.com/data5/SELLER/Default/2022/6/KA/JK/LG/75348347/img-20220311-wa0004-500x500.jpg"
//         }
//     ]
//   },
  
// ];


const Home = () => {

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { products } = useSelector((state) => state.product);



  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id, name, price, image, stock) => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (

    <>

   {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
   
     <View style={defaultStyle}>
      <Header/>
      {/**heading row start */}
        <View  style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
       {/*heading*/}
       <Heading text1="Our" text2="Products" />
      {/*search bar*/}

    <View>
      <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)} style={{ paddingTop:10 }}>
        <Avatar.Icon
          icon={"magnify"}
          size={50}
          color={"gray"}
          style={{ backgroundColor: colors.color2, elevation: 15 }}
        />
      </TouchableOpacity>
    </View>
    </View>
      {/**heading row end */}
        
     <View style={{
            flexDirection: "row",
            height: 80,
          }}>

        <ScrollView
           horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
        >
        {
          categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
             onPress={() => categoryButtonHandler(item._id)}>
                <Text
                  style={{
                    fontSize: 13,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))
            
          }
        </ScrollView>
     </View>
 {/* Products */}

     <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0].url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
     </View>

   {/** footer */}
   <Footer/>

  </>
  )
}

export default Home