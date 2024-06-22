import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import {store} from "./Redux/Store/store";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* redux store */}
    <Provider store={store}>
      {/* for toast notification */}
      <ToastContainer />
      {/* rendering the app */}
      <App />
    </Provider>
  </React.StrictMode>,
)
