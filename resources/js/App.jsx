import React, { useEffect, useState } from "react";

function App() {
    const [mobiles, setMobiles] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/mobiles")
            .then((res) => res.json())
            .then((data) => setMobiles(data.data));
    }, []);

    return (
        <div>
            <h1>Mobile collection</h1>
            <ul>
                {mobiles.map((mobile) => (
                    <li key={mobile.id}>{mobile.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
