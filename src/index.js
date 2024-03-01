import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from './redux';
import ScrollToTop from './helpers/ScrollToTop';
import AdminRouter from './router/AdminRouter';
import { HashRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <App />
      <AdminRouter/>
      <ToastContainer />
    </HashRouter>
  </Provider>
);


