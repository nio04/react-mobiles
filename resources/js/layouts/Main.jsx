import TopActions from "./TopActions";
import Paginate from "./Paginate";
import Item from "../components/Item";

export default function Main({
    mobiles = [],
    showItems,
    onSetShowItems,
    sortBy,
    onSetSortBy,
}) {
    return (
        <>
            <section className="flex h-[630px] flex-col w-full bg-gray-400">
                <TopActions
                    showItems={showItems}
                    onSetShowItems={onSetShowItems}
                    sortBy={sortBy}
                    onSetSortBy={onSetSortBy}
                />

                <section className="bg-gray-100 h-[1550px] overflow-y-scroll p-6 border border-gray-500">
                    <ul className="grid grid-cols-4 gap-4">
                        {mobiles.map((mobile) => (
                            <Item key={mobile.id} mobile={mobile} />
                        ))}
                    </ul>
                </section>
                <Paginate />
            </section>
        </>
    );
}
