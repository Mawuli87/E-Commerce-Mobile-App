import { Text, TouchableOpacity ,StyleSheet} from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";


const ButtonBox = ({
  icon,
  text,
  handler,
  reverse = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
      }}
      onPress={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{ backgroundColor: reverse ? colors.color1 : colors.color3 }}
        icon={icon}
      />
      <Text
        style={{
          color: colors.color2,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
      elevation: 7,
      backgroundColor: colors.color3,
      padding: 30,
      borderRadius: 10,
      alignItems: "center",
    },
    name: {
      fontSize: 20,
      fontWeight: "500",
      marginTop: 10,
      color: colors.color2,
    },
  });

export default ButtonBox;