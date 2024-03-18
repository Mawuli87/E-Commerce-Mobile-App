import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
  formStyles as styles
} from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../../redux/actions/userAction";
import {
  useMessageAndErrorUser,
  useMessageAndErrorOther,
} from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import mime from "mime";
import { updatePic } from "../../redux/actions/otherActions";


const Profile = ({ navigation, route }) => {


  const { user } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState(user?.avatar ? user.avatar.url : defaultImg);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const loading = useMessageAndErrorUser(navigation, dispatch, "login");
  
  //const navigation = useNavigation()

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  const loadingPic = useMessageAndErrorOther(dispatch, null, null, loadUser);

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic Here
      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: mime.getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });
      dispatch(updatePic(myForm));
    }

    dispatch(loadUser());
  }, [route.params, dispatch, isFocused]);

  useEffect(() => {
    if (user?.avatar) {
      setAvatar(user.avatar.url);
    }
  }, [user]);

  return (
    <>
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      {/* Loading */}

      {loading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.container}>
            <Avatar.Image
              source={{
                uri: avatar,
              }}
              size={100}
              style={{ backgroundColor: colors.color1 }}
            />

            <TouchableOpacity
              disabled={loadingPic}
              onPress={() =>
                navigation.navigate("camera", { updateProfile: true })
              }
            >
              <Button
                disabled={loadingPic}
                loading={loadingPic}
                textColor={colors.color1}
              >
                Change Photo
              </Button>
            </TouchableOpacity>

            <Text style={styles.name}>{user?.name}</Text>
            <Text
              style={{
                fontWeight: "300",
                color: colors.color2,
              }}
            >
              {user?.email}
            </Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                handler={navigateHandler}
                text={"Orders"}
                icon={"format-list-bulleted-square"}
              />
              {user?.role === "admin" && (
                <ButtonBox
                  handler={navigateHandler}
                  icon={"view-dashboard"}
                  text={"Admin"}
                  reverse={true}
                />
              )}
              <ButtonBox
                handler={navigateHandler}
                text={"Profile"}
                icon={"pencil"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-evenly",
              }}
            >
              <ButtonBox
                handler={navigateHandler}
                text={"Password"}
                icon={"pencil"}
              />
              <ButtonBox
                handler={navigateHandler}
                text={"Sign Out"}
                icon={"exit-to-app"}
              />
            </View>
          </View>
        </>
      )}
    </View>

    <Footer />
  </>
  )
}

export default Profile