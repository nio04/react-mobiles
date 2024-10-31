import { NumericFormat } from "react-number-format";

export default function Item({ mobile }) {
    return (
        <li className="w-48 transition-shadow duration-300 ease-in-out bg-gray-200 border border-gray-300 cursor-pointer hover:shadow-xl h-80">
            <div className="h-56 overflow-hidden">
                <img
                    src={mobile.cover}
                    alt={mobile.name}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <p className="py-2 text-sm font-semibold text-center text-gray-800">
                {mobile.name}
            </p>
            <p className="mt-1 mb-1 text-center text-gray-700">
                <span className="font-bold text-blue-600">$</span>
                <NumericFormat
                    value={mobile.price}
                    thousandsGroupStyle="lakh"
                    thousandSeparator=","
                    displayType="text"
                    className="font-bold text-blue-600"
                />
                <span className="ml-1 text-xs text-yellow-600">
                    ({mobile.status})
                </span>
            </p>
            <div className="py-1 my-1 text-sm text-center text-gray-800 transition-colors duration-200 bg-gray-300 hover:bg-gray-400">
                View Details
            </div>
        </li>
    );
}
