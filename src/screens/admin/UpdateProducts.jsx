import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const UpdateProducts = ({navigation, route }) => {

    const loading = false;
    const loadingOther = false;
    const images = [
        {
            url : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
            _id : "wgtropmkhgfsderwesduippl"
        },
        {
            url : "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg",
            _id : "wgtropmkhgfsderyuuippasxl"
        },
        {
            url : "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_640.jpg",
            _id : "wgtropmkhgfsdertyuiruippxcvl"
        },
    ];

    const [id] = useState(route.params.id);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Laptop");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([
        {
            
            _id : "weetuygvlpoyhjkytemsvdfrr",
            category : "Home Accessories"
        },
        {
           
            _id : "weeshtuygvlplpooyhjkmsvdfrr",
            category : "CHairs"
        },
        {
           
            _id : "estuygvlpoyhjkmsvdfrr",
            category : "Phones"
        }
    ]);

    const submitHandler = () => {
        //dispatch(updateProduct(id, name, description, price, stock, categoryID));
      };
  
  return (
    <>
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Update Product</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 650,
            }}
          >
            <Button
              onPress={() =>
                navigation.navigate("productimages", {
                  id,
                  images: images,
                })
              }
              textColor={colors.color1}
            >
              Manage Images
            </Button>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />

            <TextInput
              {...inputOptions}
              placeholder="Price"
              keyboardType="number-pad"
              value={price}
              onChangeText={setPrice}
            />
            <TextInput
              {...inputOptions}
              placeholder="Stock"
              value={stock}
              keyboardType="number-pad"
              onChangeText={setStock}
            />

            <Text
              style={{
                ...inputStyling,
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 3,
              }}
              onPress={() => setVisible(true)}
            >
              {category}
            </Text>

            <Button
              textColor={colors.color2}
              style={{
                backgroundColor: colors.color1,
                margin: 20,
                padding: 6,
              }}
              onPress={submitHandler}
              loading={loadingOther}
              disabled={loadingOther}
            >
              Update
            </Button>
          </View>
        </ScrollView>
      )}
    </View>

    <SelectComponent
      categories={categories}
      setCategoryID={setCategoryID}
      setCategory={setCategory}
      visible={visible}
      setVisible={setVisible}
    />
  </>
  )
}

export default UpdateProducts