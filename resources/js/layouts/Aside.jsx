import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Aside({ additionalMobilesData = [] }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const [localState, setLocalState] = useState({
        brand: searchParams.get("brand")
            ? searchParams.get("brand").split(",")
            : [],
        chipset: searchParams.get("chipset")
            ? searchParams.get("chipset").split(",")
            : [],
        network: searchParams.get("network")
            ? searchParams.get("network").split(",")
            : [],
    });

    // when an item is checked-unchecked for filter
    function handleFilterSelected({ filter, value }) {
        setLocalState((old) => {
            return {
                ...old,
                [filter]: old[filter].includes(value)
                    ? old[filter].filter((el) => el !== value)
                    : [...old[filter], value],
            };
        });
    }

    useEffect(() => {
        const brand = localState.brand.join(",");
        const chipset = localState.chipset.join(",");
        const network = localState.network.join(",");

        if (brand === "" && chipset === "" && network === "") return;
        setSearchParams({ ...localState });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localState]);

    return (
        <>
            <aside className="flex flex-col h-[630px] gap-2 px-3 py-6 overflow-y-scroll bg-gray-200 shrink-0 basis-60">
                {/* Price range */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Brand */}
                <section className="flex flex-col gap-3 mb-2">
                    <label
                        htmlFor="brand"
                        className="text-2xl font-semibold text-gray-700"
                    >
                        Brand
                    </label>

                    <ul className="h-32 pl-3 overflow-y-scroll mt- min-w-44 max-w-48">
                        {additionalMobilesData?.brands?.length > 0 &&
                            additionalMobilesData.brands.map(({ brand }) => (
                                <li key={brand} className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="brand"
                                        id={brand}
                                        value={brand}
                                        onChange={(e) =>
                                            handleFilterSelected({
                                                filter: "brand",
                                                value: e.target.value,
                                            })
                                        }
                                        checked={
                                            localState.brand.includes(brand)
                                                ? true
                                                : false
                                        }
                                    />
                                    <label
                                        htmlFor={brand}
                                        className="text-gray-600"
                                    >
                                        {brand}
                                    </label>
                                </li>
                            ))}
                    </ul>
                </section>

                {/* Battery Capacity */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Battery Type */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Camera */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Chipset */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Chipset
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData?.chipset?.length > 0 &&
                            additionalMobilesData.chipsets.map(
                                ({ chipset }) => (
                                    <li key={chipset} className="flex gap-2">
                                        <input
                                            type="checkbox"
                                            name="chipset"
                                            id={chipset}
                                            value={chipset}
                                            onChange={(e) =>
                                                handleFilterSelected({
                                                    filter: "chipset",
                                                    value: e.target.value,
                                                })
                                            }
                                            checked={
                                                localState.chipset.includes(
                                                    chipset
                                                )
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <label
                                            htmlFor={chipset}
                                            className="text-gray-600"
                                        >
                                            {chipset}
                                        </label>
                                    </li>
                                )
                            )}
                    </ul>
                </section>

                {/* Refresh Rate */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Dispaly Type */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Market Status */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Network */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Network
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData?.network?.length > 0 &&
                            additionalMobilesData.network.map(({ network }) => (
                                <li key={network} className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="network"
                                        id={network}
                                        value={network}
                                        onChange={(e) =>
                                            handleFilterSelected({
                                                filter: "network",
                                                value: e.target.value,
                                            })
                                        }
                                        checked={
                                            localState.network.includes(network)
                                                ? true
                                                : false
                                        }
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
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* RAM */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}

                {/* Storage */}
                {/* <section className="flex flex-col gap-3 mb-2">
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
                </section> */}
            </aside>
        </>
    );
}
