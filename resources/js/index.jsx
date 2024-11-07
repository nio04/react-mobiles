import React from "react";
import ReactDOM from "react-dom/client";
import "./../css/app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import axios from "axios";

let cachedAdditionalMobilesData = null;
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

async function additionalMobilesDataFn() {
    console.log(cachedAdditionalMobilesData);
    if (cachedAdditionalMobilesData) return;
    try {
        const response = await axios("http://127.0.0.1:8000/api/mobiles-data");
        cachedAdditionalMobilesData = response.data;
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function dataLoading({ request }) {
    const url = new URL(request.url);
    const filterKeys = ["brand", "chipset", "network"];
    const defaultParams = { listings: 20, sortBy: "default" };
    const searchQuery = `&q=${url.searchParams.get("q") || ""}`;
    const filterQuery = filterKeys
        .map((item) => `${item}=${url.searchParams.getAll(item) || ""}`)
        .join("&");

    const searchParams = `${filterQuery}&${new URLSearchParams(
        defaultParams
    )}&${searchQuery}`;

    try {
        const [mobiles, additionalMobilesData] = await Promise.all([
            axios(`http://127.0.0.1:8000/api/mobiles?${searchParams}`),
            additionalMobilesDataFn(),
        ]);

        return {
            mobiles: mobiles.data,
            additionalMobilesData: cachedAdditionalMobilesData
                ? cachedAdditionalMobilesData
                : additionalMobilesData.data,
        };
    } catch (error) {
        console.error(error);
        return { mobiles: [], additionalMobilesData: [] };
    }
}
