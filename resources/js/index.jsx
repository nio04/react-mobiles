import React from "react";
import ReactDOM from "react-dom/client";
import "./../css/app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import axios from "axios";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: dataLoading,
    },
]);
root.render(<RouterProvider router={router} />);

async function dataLoading({ request }) {
    const url = new URL(request.url);
    const searchParams = url.search
        ? `brand=${url.searchParams.get("brand") ?? ""}&chipset=${
              url.searchParams.get("chipset") ?? ""
          }&listings=${url.searchParams.get("listings") ?? "20"}&sortBy=${
              url.searchParams.get("sortBy") ?? "default"
          }&q=${url.searchParams.get("q") ?? ""}`
        : new URLSearchParams(url.search);

    // console.log(url);
    try {
        const mobilesListingResponse = await axios(
            `http://127.0.0.1:8000/api/mobiles?${searchParams}`
        );
        const additionalMobilesListingData = await axios(
            "http://127.0.0.1:8000/api/mobiles-data"
        );
        return {
            mobiles: mobilesListingResponse.data,
            additionalMobilesData: additionalMobilesListingData.data,
        };
    } catch (error) {
        console.error(error);
    }
}
