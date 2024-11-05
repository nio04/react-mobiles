import React from "react";
// import React, { useEffect, useLayoutEffect, useState } from "react";

import Nav from "./layouts/Nav";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";
import { Outlet, useLoaderData } from "react-router-dom";

function App() {
    const { mobiles, additionalMobilesData } = useLoaderData();
    // console.log(additionalMobilesData);
    // const [mobiles, setMobiles] = useState([]);
    // *** listings start ***
    // const [brandListings, setBrandListings] = useState([]);
    // const [chipsetListings, setChipsetListings] = useState([]);
    // const [displayTypeListings, setDisplayTypeListings] = useState([]);
    // const [marketStatusListings, setMarketStatusListings] = useState([]);
    // const [networkTypeListings, setNetworkTypeListings] = useState([]);
    // const [osListings, setOsListings] = useState([]);
    // const [ramListings, setRamListings] = useState([]);
    // const [storageListings, setStorageListings] = useState([]);
    // *** listings end ***

    // *** filtering start
    // const [brandFilteringsChecked, setBrandFilteringsChecked] = useState([]);

    // *** filtering end ***
    // const [query, setQuery] = useState("");
    // const [showItems, setShowItems] = useState(20);
    // const [sortBy, setSortBy] = useState("default");

    // useEffect(() => {
    //     axios(API_URL).then((res) => {
    //         setMobiles(res.data.mobiles.data);
    //         setBrandListings(res.data.brands);
    //         setChipsetListings(res.data.chipsets);
    //         setDisplayTypeListings(res.data.display);
    //         setMarketStatusListings(res.data.status);
    //         setNetworkTypeListings(res.data.network);
    //         setOsListings(res.data.os);
    //         setRamListings(res.data.ram);
    //         setStorageListings(res.data.storage);
    //     });
    // }, []);

    // function handleMobiles(data) {
    //     if (data instanceof Object) {
    //         return setMobiles(data);
    //     }
    //     try {
    //         axios(API_URL, {
    //             params: { query },
    //         }).then((res) => {
    //             setMobiles(res.data.data);
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // function handleQuery(value) {
    //     setQuery(value);
    // }

    // function handleShowItems(value) {
    //     setShowItems(value);

    //     try {
    //         axios(API_URL, {
    //             params: { showItems: value },
    //         }).then((res) => {
    //             setMobiles(res.data.data);
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // function handleSortBy(value) {
    // setSortBy(value);

    // try {
    //     axios(API_URL, {
    //         params: { sortBy: value },
    //     }).then((res) => {
    //         setMobiles(res.data.data);
    //     });
    // } catch (error) {
    //     console.error(error);
    // }
    // }

    return (
        <div className="grid grid-cols-12 gap-8 p-4">
            <Nav />

            <main className="flex col-start-2 col-end-11 bg-blue-200 translate-x-14">
                {<Outlet />}
                <Aside
                    additionalMobilesData={additionalMobilesData}
                    // brandListings={brandListings}
                    // chipsetListings={chipsetListings}
                    // displayTypeListings={displayTypeListings}
                    // marketStatusListings={marketStatusListings}
                    // networkTypeListings={networkTypeListings}
                    // osListings={osListings}
                    // ramListings={ramListings}
                    // storageListings={storageListings}
                    // brandFilteringsChecked={brandFilteringsChecked}
                    // onBrandFilteringsChecked={handleBrandFilteringsChecked}
                    // onSetMobiles={handleMobiles}
                />
                <Main
                    mobiles={mobiles.mobiles.data}
                    // showItems={showItems}
                    // onSetShowItems={handleShowItems}
                    // sortBy={sortBy}
                    // onSetSortBy={handleSortBy}
                />
            </main>
        </div>
    );
}

export default App;
