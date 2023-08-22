import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import App from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
