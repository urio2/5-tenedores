import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";
import { decode, encode } from "base-64";

LogBox.ignoreLogs([
  "Setting a timer",
  "Animated: `useNativeDriver` was not specified."
]);

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

export default function App() {
  return <Navigation/>
}
