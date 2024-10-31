export default function Nav() {
    return (
        <>
            <nav className="flex items-center justify-end h-10 col-start-1 col-end-13 pr-10 bg-gray-300">
                <form
                    action="#"
                    method="POST"
                    className="flex items-center justify-center gap-4"
                >
                    <div>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Enter Device Name"
                        />
                    </div>
                    <input type="submit" value="search" />
                </form>
            </nav>
        </>
    );
}
