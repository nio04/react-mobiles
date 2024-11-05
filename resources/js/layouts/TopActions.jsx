import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function TopActions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(
        searchParams.get("sortBy") || "default"
    );
    const [listings, setListings] = useState(
        searchParams.get("listings") || "20"
    );

    function handleShowListings(e) {
        const value = e.target.value;
        searchParams.set("listings", value);
        setListings(value);
        setSearchParams(searchParams);
    }

    function handleSortings(e) {
        const value = e.target.value;
        searchParams.set("sortBy", value);
        setSortBy(value);
        setSearchParams(searchParams);
    }

    return (
        <>
            <section className="flex items-center justify-end gap-4 py-3 pr-5">
                {/* Sort by price */}
                <section>
                    <label htmlFor="sort_by">Sort By: </label>
                    <select
                        name="sort_by"
                        id="sort_by"
                        value={sortBy}
                        onChange={handleSortings}
                        className="cursor-pointer w-28"
                    >
                        <option value="default">default</option>
                        <option value="low_to_high">Low to High</option>
                        <option value="high_to_low">High to Low</option>
                    </select>
                </section>

                {/* show listings items count */}
                <section className="flex items-center justify-center gap-3">
                    <label htmlFor="show">Show: </label>
                    <select
                        name="show"
                        id="show"
                        value={listings}
                        onChange={handleShowListings}
                        className="w-16 cursor-pointer"
                    >
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="80">80</option>
                    </select>
                </section>
            </section>
        </>
    );
}
