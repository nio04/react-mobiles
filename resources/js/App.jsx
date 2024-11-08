import React from "react";

import Nav from "./layouts/Nav";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";
import { useLoaderData } from "react-router-dom";

function App() {
    const { mobiles, additionalMobilesData } = useLoaderData();

    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            <Nav />
            <main className="flex col-start-2 col-end-11 bg-blue-200 translate-x-14">
                <Aside additionalMobilesData={additionalMobilesData} />
                <Main mobiles={mobiles.data} paginateData={mobiles} />
            </main>
        </div>
    );
}

export default App;
