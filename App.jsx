import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import Main from "../ExpoShop/src/Main";
import { store } from './redux/store';
import { StripeProvider } from "@stripe/stripe-react-native";


const stripeKey =
  "pk_test_51OIOmyIGnOGGYzgVxpA9XAmZQxxVGPp5fHxbF4R7afoOwNmpWhuCA3xbm0ZfEBZuWluGmM1YwEki0cAYoMeX8vSE00f8MPwFIJ";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="radiancedev.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
