import React, { useEffect, useState } from "react";
import axios from "axios";

import Nav from "./layouts/Nav";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

const API_URL = "http://127.0.0.1:8000/api/mobiles";

function App() {
    const [mobiles, setMobiles] = useState([]);
    const [brandListings, setBrandListings] = useState([]);
    const [query, setQuery] = useState("");
    const [showItems, setShowItems] = useState(20);
    const [sortBy, setSortBy] = useState("default");

    useEffect(() => {
        axios(API_URL).then((res) => {
            setMobiles(res.data.mobiles.data);
            setBrandListings(res.data.brands);
        });
    }, []);

    function handleMobiles() {
        try {
            axios(API_URL, {
                params: { query },
            }).then((res) => {
                setMobiles(res.data.data);
            });
        } catch (error) {
            console.error(error);
        }
    }

    function handleQuery(value) {
        setQuery(value);
    }

    function handleShowItems(value) {
        setShowItems(value);

        try {
            axios(API_URL, {
                params: { showItems: value },
            }).then((res) => {
                setMobiles(res.data.data);
            });
        } catch (error) {
            console.error(error);
        }
    }

    function handleSortBy(value) {
        setSortBy(value);

        try {
            axios(API_URL, {
                params: { sortBy: value },
            }).then((res) => {
                setMobiles(res.data.data);
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="grid grid-cols-12 gap-8 p-4">
            <Nav onSetMobiles={handleMobiles} onSetQuery={handleQuery} />

            <main className="flex col-start-2 col-end-11 bg-blue-200 translate-x-14">
                <Aside brandListings={brandListings} />
                <Main
                    mobiles={mobiles}
                    showItems={showItems}
                    onSetShowItems={handleShowItems}
                    sortBy={sortBy}
                    onSetSortBy={handleSortBy}
                />
            </main>
        </div>
    );
}

export default App;
