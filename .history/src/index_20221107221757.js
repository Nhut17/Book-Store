import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./assets/font/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css";
import GlobalStyles from "./components/GlobalStyles/index.js";
import 
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GlobalStyles> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Layout />
        </PersistGate>
      </Provider>
    {/* </GlobalStyles> */}
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
