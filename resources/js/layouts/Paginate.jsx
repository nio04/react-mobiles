import { useNavigate, useLocation } from "react-router-dom";

export default function Paginate({ paginateData }) {
    const { current_page, next_page_url, prev_page_url } = paginateData;
    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("page", page);
        navigate(`?${searchParams.toString()}`);
    };

    return (
        <div className="flex items-center justify-between h-24 px-6 bg-gray-300">
            <span className="text-gray-600">Page {current_page}</span>

            <div className="flex space-x-4">
                {prev_page_url ? (
                    <button
                        onClick={() => goToPage(current_page - 1)}
                        className="px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Previous
                    </button>
                ) : (
                    <button
                        disabled
                        className="px-4 py-1 text-sm font-semibold text-gray-500 bg-gray-300 rounded cursor-not-allowed"
                    >
                        Previous
                    </button>
                )}

                {next_page_url ? (
                    <button
                        onClick={() => goToPage(current_page + 1)}
                        className="px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        disabled
                        className="px-4 py-1 text-sm font-semibold text-gray-500 bg-gray-300 rounded cursor-not-allowed"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
