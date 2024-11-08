import { useSearchParams } from "react-router-dom";

export default function Nav() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleQuery(e) {
        const value = e.target.value;
        if (!value.length === 0) return;

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
                        value={searchParams.get("q") ?? ""}
                        onChange={handleQuery}
                        placeholder="Enter Device Name"
                    />
                </form>
            </nav>
        </>
    );
}
