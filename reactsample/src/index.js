import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import axios from 'axios';

axios.defaults.withCredentials = true; // even for get requests if
                                    // demand session authentication
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<React.StrictMode>
  <App />
</React.StrictMode>)