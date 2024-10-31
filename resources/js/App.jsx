import React from "react";

import Nav from "./layouts/Nav";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
    return (
        <div className="grid grid-cols-12 gap-8 p-4">
            <Nav />

            <main className="flex col-start-1 col-end-13 bg-blue-200">
                <Aside />
                <Main />
            </main>
        </div>
    );
}

export default App;
