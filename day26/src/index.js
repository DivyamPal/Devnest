import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import store from "./redux/store";

//  import App from "./app";
// import App from "./Appday17";
// import App from "./Appday18";
// import App from"./Appday19";
// import App from "./Appday20";
// import App from "./Appday21";
// import App from "./Appday22";
// import App from "./Appday24"
// import App from "./Eco"
// import App from "./Appanime"
import store from "./store"
import App from "./Appday26"
// ReactDOM.render(
//   <App></App>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);