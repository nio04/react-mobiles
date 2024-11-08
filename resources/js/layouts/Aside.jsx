import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const filterKeys = [
    "brand",
    "chipset",
    "network",
    "os",
    "ram",
    "storage",
    "status",
    "display_type",
    "refresh_rate",
    "camera",
    "battery_type",
];

const initState = (searchParams) => {
    return filterKeys.reduce((acc, key) => {
        acc[key] = searchParams.get(key)
            ? searchParams.get(key).split(",")
            : [];
        return acc;
    }, {});
};

export default function Aside({ additionalMobilesData }) {
    // console.log(additionalMobilesData);
    const [searchParams, setSearchParams] = useSearchParams();

    const [localState, setLocalState] = useState(() => initState(searchParams));

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
        // Check if localState matches searchParams for filters
        const isMatchingSearchParams = filterKeys.every((key) => {
            const searchParamValue = searchParams.get(key) || "";
            const localStateValue = localState[key].join(",");
            return searchParamValue === localStateValue;
        });

        // Early return if all key-value pairs match
        if (isMatchingSearchParams) return;

        const newParams = new URLSearchParams(searchParams);

        filterKeys.forEach((key) => {
            if (localState[key].length) {
                newParams.set(key, localState[key].join(","));
            } else {
                newParams.delete(key);
            }
        });

        setSearchParams(newParams);
    }, [localState, setSearchParams, searchParams]);

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
                        {additionalMobilesData.brands.length > 0 ? (
                            additionalMobilesData.brands.map((brand) => (
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
                            ))
                        ) : (
                            <p>Loading data...</p>
                        )}
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
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Battery Type
                    </h4>
                    <ul className="pl-2 space-y-2">
                        {additionalMobilesData.battery_type.map(
                            (battery_type) => (
                                <li key={battery_type} className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        name="battery_type"
                                        id={battery_type}
                                        value={battery_type}
                                        onChange={(e) =>
                                            handleFilterSelected({
                                                filter: "battery_type",
                                                value: e.target.value,
                                            })
                                        }
                                        checked={
                                            localState.battery_type.includes(
                                                battery_type
                                            )
                                                ? true
                                                : false
                                        }
                                    />
                                    <label
                                        htmlFor={battery_type}
                                        className="text-sm text-gray-600 uppercase max-w-32"
                                    >
                                        {battery_type}
                                    </label>
                                </li>
                            )
                        )}
                    </ul>
                </section>

                {/* Camera */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Camera
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData.camera.map((camera) => (
                            <li key={camera} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="camera"
                                    id={camera}
                                    value={camera}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "camera",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.camera.includes(camera)
                                            ? true
                                            : false
                                    }
                                />
                                <label
                                    htmlFor={camera}
                                    className="text-gray-600 uppercase"
                                >
                                    {camera} MP
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Chipset */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Chipset
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData?.chipsets?.length > 0 &&
                            additionalMobilesData.chipsets.map((chipset) => (
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
                                            localState.chipset.includes(chipset)
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
                            ))}
                    </ul>
                </section>

                {/* Refresh Rate */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Refresh Rate
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData.refresh_rate.map((refresh) => (
                            <li key={refresh} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="refresh"
                                    id={refresh}
                                    value={refresh}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "refresh_rate",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.refresh_rate.includes(
                                            refresh
                                        )
                                            ? true
                                            : false
                                    }
                                />
                                <label
                                    htmlFor={refresh}
                                    className="text-gray-600 uppercase"
                                >
                                    {refresh} Hz
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Dispaly Type */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        camera Type
                    </h4>
                    <ul className="pl-2">
                        {additionalMobilesData.display_type.map((display) => (
                            <li key={display} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="display"
                                    id={display}
                                    value={display}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "display_type",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.display_type.includes(
                                            display
                                        )
                                            ? true
                                            : false
                                    }
                                />
                                <label
                                    htmlFor={display}
                                    className="text-gray-600 uppercase"
                                >
                                    {display}
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
                        {additionalMobilesData.status.map((status) => (
                            <li key={status} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="status"
                                    id={status}
                                    value={status}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "status",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.status.includes(status)
                                            ? true
                                            : false
                                    }
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
                        {additionalMobilesData.network.length > 0 &&
                            additionalMobilesData.network.map((network) => (
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
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">OS</h4>
                    <ul className="pl-2">
                        {additionalMobilesData.os.map((os) => (
                            <li key={os} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="os"
                                    id={os}
                                    value={os}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "os",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.os.includes(os)
                                            ? true
                                            : false
                                    }
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
                        {additionalMobilesData.ram.map((ram) => (
                            <li key={ram} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="ram"
                                    id={ram}
                                    value={ram}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "ram",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.ram.includes(ram)
                                            ? true
                                            : false
                                    }
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
                        {additionalMobilesData.storage.map((storage) => (
                            <li key={storage} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="storage"
                                    id={storage}
                                    value={storage}
                                    onChange={(e) =>
                                        handleFilterSelected({
                                            filter: "storage",
                                            value: e.target.value,
                                        })
                                    }
                                    checked={
                                        localState.storage.includes(storage)
                                            ? true
                                            : false
                                    }
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
