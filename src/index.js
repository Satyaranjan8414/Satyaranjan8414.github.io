import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";


// to disabled the shortcut key
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// document.onkeydown = (e) => {
//   if (e.keyCode === 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
//     return false;
//   }
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
