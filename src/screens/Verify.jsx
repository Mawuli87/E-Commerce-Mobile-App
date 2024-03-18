import { View, Text,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { defaultStyle, formStyles as styles, inputOptions, formHeading, colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Verify = () => {
    const loading= false;
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
  
    //const dispatch = useDispatch();
    //const loading = useMessageAndErrorOther(dispatch, navigation, "login");
  
    const submitHandler = () => {
     // dispatch(resetPassword(otp, password));
    
    };

  return (
    <>
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Reset Password</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="OTP"
          secureTextEntry={true}
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
        />

        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={otp === "" || password === ""}
          style={styles.btn}
          onPress={submitHandler}
        >
          Reset
        </Button>

        <Text style={styles.or}>OR</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("forgetpassword")}
        >
          <Text style={styles.link}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Footer activeRoute="profile" />
  </>
  )
}

export default Verify