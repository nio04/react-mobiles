import React from "react";
import ReactDOM from "react-dom/client";
import "./../css/app.css";

import App from "./App.jsx";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
