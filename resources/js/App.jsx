// resources/js/App.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <h1 class="text-7xl text-blue-600 text-center flex justify-center items-center w-full h-screen capitalize">
            hello
        </h1>
    );
}

// Mount React to the #app element in the Blade template
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
