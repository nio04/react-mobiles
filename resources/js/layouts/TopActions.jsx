export default function TopActions({
    showItems,
    onSetShowItems,
    sortBy,
    onSetSortBy,
}) {
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
                        onChange={(e) => onSetSortBy(e.target.value)}
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
                        value={showItems}
                        onChange={(e) => onSetShowItems(e.target.value)}
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
