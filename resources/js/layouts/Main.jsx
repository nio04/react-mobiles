import TopActions from "./TopActions";
import Paginate from "./Paginate";
import { useEffect, useState } from "react";

export default function Main() {
    const [mobiles, setMobiles] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/mobiles")
            .then((res) => res.json())
            .then((data) => setMobiles(data.data));
    }, []);
    return (
        <>
            <section className="flex h-[630px] flex-col w-full bg-gray-400">
                <TopActions />

                <section className="bg-green-300 h-[1550px] overflow-y-scroll p-6">
                    <ul className="grid grid-cols-4 gap-4">
                        {mobiles.map((mobile) => (
                            <li
                                key={mobile.id}
                                className="bg-green-600 h-72 w-72"
                            >
                                {mobile.name}
                            </li>
                        ))}
                    </ul>
                </section>
                <Paginate />
            </section>
        </>
    );
}
