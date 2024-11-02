import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/mobiles";
export default function Aside({
    brandListings,
    chipsetListings,
    displayTypeListings,
    marketStatusListings,
    networkTypeListings,
    osListings,
    ramListings,
    storageListings,
    // brandFilteringsChecked,
    // onBrandFilteringsChecked,
    onSetMobiles,
}) {
    const [brandFilteringsChecked, setBrandFilteringsChecked] = useState([]);

    useEffect(() => {
        const listings = brandListings.map((listing) => ({
            name: listing.brand,
            checked: false,
        }));
        setBrandFilteringsChecked([...listings]);
    }, [brandListings]);

    function handleBrandFilteringsChecked(value) {
        setBrandFilteringsChecked((old) =>
            old.map((brand) =>
                brand.name === value
                    ? {
                          ...brand,
                          checked: !brand.checked,
                      }
                    : brand
            )
        );
    }

    useEffect(() => {
        try {
            axios(API_URL, {
                params: { brandFilterings: brandFilteringsChecked },
            }).then((res) => {
                // onSetMobiles(res.data.brandFilterings.data);
            });
        } catch (error) {
            console.error(error);
        }
    }, [brandFilteringsChecked]);

    return (
        <>
            <aside className="flex flex-col h-[630px] gap-2 px-3 py-6 overflow-y-scroll bg-gray-200 shrink-0 basis-60">
                {/* Price range */}
                <section className="flex flex-col gap-3 mb-2">
                    <label
                        htmlFor="min-price"
                        className="text-2xl font-semibold text-gray-700"
                    >
                        Enter Min-Max Price
                    </label>
                    <div className="flex flex-col gap-1">
                        <input
                            type="text"
                            name="min-price"
                            id="min-price"
                            placeholder="Enter Min Price Value"
                            className="h-8 pl-2 -mb-1"
                        />
                        <p className="text-xl font-bold text-center">~</p>
                        <input
                            type="text"
                            name="max-price"
                            id="max-price"
                            placeholder="Enter Max Price Value"
                            className="h-8 pl-2 -mt-2"
                        />
                    </div>
                </section>

                {/* Brand */}
                <section className="flex flex-col gap-3 mb-2">
                    <label
                        htmlFor="brand"
                        className="text-2xl font-semibold text-gray-700"
                    >
                        Brand
                    </label>
                    <form action="#" method="post" className="">
                        <input
                            type="text"
                            name="brand"
                            id="brand"
                            placeholder="Enter Brand Name"
                            className="h-8 pl-2"
                        />
                    </form>
                    <ul className="h-32 pl-3 mt-1 overflow-y-scroll min-w-44 max-w-48">
                        {brandFilteringsChecked.map((brand) => (
                            <li key={brand?.name} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    id={brand.name}
                                    value={brand.name}
                                    onChange={(e) =>
                                        handleBrandFilteringsChecked(
                                            e.target.value
                                        )
                                    }
                                    checked={brand.checked}
                                />
                                <label
                                    htmlFor={brand.name}
                                    className="text-gray-600"
                                >
                                    {brand.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Battery Capacity */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Battery Capacity
                    </h4>
                    <ul className="h-32 pl-2 overflow-y-scroll min-w-44 max-w-48">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_4000"
                            />
                            <label
                                htmlFor="battery-capacity_4000"
                                className="text-gray-600"
                            >
                                4,000 - 4,500 mAh
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_4500"
                            />
                            <label
                                htmlFor="battery-capacity_4500"
                                className="text-gray-600"
                            >
                                4,500 - 5,000 mAh
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_5000"
                            />
                            <label
                                htmlFor="battery-capacity_5000"
                                className="text-gray-600"
                            >
                                5,000 - 5,500 mAh
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_5500"
                            />
                            <label
                                htmlFor="battery-capacity_5500"
                                className="text-gray-600"
                            >
                                5,500 - 6,000 mAh
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_6000"
                            />
                            <label
                                htmlFor="battery-capacity_6000"
                                className="text-gray-600"
                            >
                                6,000 - 6,500 mAh
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_capacity"
                                id="battery-capacity_6500"
                            />
                            <label
                                htmlFor="battery-capacity_6500"
                                className="text-gray-600"
                            >
                                6,500 - 7,000 mAh
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Battery Type */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Battery Type
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_type"
                                id="battery_type_lipo"
                                value="Lithium Polymer (Li-Po)"
                            />
                            <label
                                htmlFor="battery_type_lipo"
                                className="text-gray-600"
                            >
                                Lithium Polymer (Li-Po)
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="battery_type"
                                id="battery_type_lion"
                                value="Lithium-ion (Li-Ion)"
                            />
                            <label
                                htmlFor="battery_type_lion"
                                className="text-gray-600"
                            >
                                Lithium-ion (Li-Ion)
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Camera */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Camera
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="camera"
                                id="camera_12_20"
                                value="camera_12_20"
                            />
                            <label
                                htmlFor="camera_12_20"
                                className="text-gray-600"
                            >
                                12Mp ~ 20MP
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="camera"
                                id="camera_48"
                                value="camera_48"
                            />
                            <label
                                htmlFor="camera_48"
                                className="text-gray-600"
                            >
                                48MP
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="camera"
                                id="camera_64"
                                value="camera_64"
                            />
                            <label
                                htmlFor="camera_64"
                                className="text-gray-600"
                            >
                                64MP
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="camera"
                                id="camera_200"
                                value="camera_200"
                            />
                            <label
                                htmlFor="camera_200"
                                className="text-gray-600"
                            >
                                200MP
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Chipset */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Chipset
                    </h4>
                    <ul className="pl-2">
                        {chipsetListings.map(({ chipset }) => (
                            <li key={chipset} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="chipset"
                                    id={chipset}
                                    value={chipset}
                                />
                                <label
                                    htmlFor={chipset}
                                    className="text-gray-600"
                                >
                                    {chipset}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Refresh Rate */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Refresh Rate
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="refresh_rate"
                                id="refresh_rate_60_90"
                                value="refresh_rate_60_90"
                            />
                            <label
                                htmlFor="refresh_rate_60_90"
                                className="text-gray-600"
                            >
                                60Hz ~ 90Hz
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="refresh_rate"
                                id="refresh_rate_120"
                                value="120"
                            />
                            <label
                                htmlFor="refresh_rate_120"
                                className="text-gray-600"
                            >
                                120Hz
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="refresh_rate"
                                id="refresh_rate_144"
                                value="144"
                            />
                            <label
                                htmlFor="refresh_rate_144"
                                className="text-gray-600"
                            >
                                144Hz
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="refresh_rate"
                                id="refresh_rate_165"
                                value="165"
                            />
                            <label
                                htmlFor="refresh_rate_165"
                                className="text-gray-600"
                            >
                                165Hz
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Dispaly Type */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Display Type
                    </h4>
                    <ul className="pl-2">
                        {displayTypeListings.map(({ display_type }) => (
                            <li key={display_type} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="display_type"
                                    id={display_type}
                                    value={display_type}
                                />
                                <label
                                    htmlFor={display_type}
                                    className="text-gray-600 uppercase"
                                >
                                    {display_type}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Market Status */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Market Status
                    </h4>
                    <ul className="pl-2">
                        {marketStatusListings.map(({ status }) => (
                            <li key={status} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="status"
                                    id={status}
                                    value={status}
                                />
                                <label
                                    htmlFor={status}
                                    className="text-gray-600 capitalize"
                                >
                                    {status}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Network */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Network
                    </h4>
                    <ul className="pl-2">
                        {networkTypeListings.map(({ network }) => (
                            <li key={network} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="network"
                                    id={network}
                                    value={network}
                                />
                                <label
                                    htmlFor={network}
                                    className="text-gray-600 uppercase"
                                >
                                    {isNaN(parseInt(network))
                                        ? network
                                        : network + "G"}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* OS */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">OS</h4>
                    <ul className="pl-2">
                        {osListings.map(({ os }) => (
                            <li key={os} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="os"
                                    id={os}
                                    value={os}
                                />
                                <label
                                    htmlFor={os}
                                    className="text-gray-600 capitalize"
                                >
                                    {os}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* RAM */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        RAM
                    </h4>
                    <ul className="pl-2">
                        {ramListings.map(({ ram }) => (
                            <li key={ram} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="ram"
                                    id={ram}
                                    value={ram}
                                />
                                <label
                                    htmlFor={ram}
                                    className="text-gray-600 capitalize"
                                >
                                    {ram} GB
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Storage */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        storage
                    </h4>
                    <ul className="pl-2">
                        {storageListings.map(({ storage }) => (
                            <li key={storage} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="storage"
                                    id={storage}
                                    value={storage}
                                />
                                <label
                                    htmlFor={storage}
                                    className="text-gray-600 capitalize"
                                >
                                    {storage} GB
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>
            </aside>
        </>
    );
}
