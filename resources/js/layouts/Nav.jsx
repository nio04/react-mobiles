export default function Nav({ onSetMobiles, onSetQuery }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSetMobiles();
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
                        onChange={(e) => onSetQuery(e.target.value)}
                        placeholder="Enter Device Name"
                    />
                </form>
            </nav>
        </>
    );
}
