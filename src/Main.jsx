import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payments from './components/Payments';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Profile from './screens/Profile';
import Verify from './screens/Verify';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';
import AdminPanel from './screens/admin/AdminPanel';
import Categories from './screens/admin/Categories';
import AdminOrders from './screens/admin/AdminOrders';
import UpdateProducts from './screens/admin/UpdateProducts';
import NewProduct from './screens/NewProduct';
import ProductImages from './screens/admin/ProductImages';
import CameraComponent from './screens/admin/CameraComponent';
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/actions/userAction.js";


const Stack = createNativeStackNavigator();

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
    <Stack.Navigator
       screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name='productdetails' component={ProductDetails}/>
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="confirmorder" component={ConfirmOrder} />
      <Stack.Screen name="payment" component={Payments} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="forgetpassword" component={ForgotPassword} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="updateprofile" component={UpdateProfile} />
      <Stack.Screen name="changepassword" component={ChangePassword} />
      <Stack.Screen name="orders" component={Orders} />
            {/* Admin Routes */}

      <Stack.Screen name="adminpanel" component={AdminPanel} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="adminorders" component={AdminOrders} />
      <Stack.Screen name="updateproduct" component={UpdateProducts} />
      <Stack.Screen name="newproduct" component={NewProduct} />
      <Stack.Screen name="productimages" component={ProductImages} />

      <Stack.Screen name="camera" component={CameraComponent} />

    </Stack.Navigator>
    <Toast position="top" topOffset={30}/>
  </NavigationContainer>
  )
}

export default Main