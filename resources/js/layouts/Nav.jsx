import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Nav({ onSetMobiles, onSetQuery }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState("");

    function handleQuery(e) {
        const value = e.target.value;
        setQuery(value);
        searchParams.set("q", value);
        setSearchParams(searchParams);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <nav className="flex items-center justify-end h-10 col-start-1 col-end-13 pr-10 bg-gray-300">
                <form
                    action="#"
                    method="POST"
                    className="flex items-center justify-center gap-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={handleQuery}
                        placeholder="Enter Device Name"
                    />
                </form>
            </nav>
        </>
    );
}
