export default function Aside({ brandListings, chipsetListings }) {
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
                        {brandListings.map(({ brand }) => (
                            <li key={brand} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    id={brand}
                                    value={brand}
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
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="display_type"
                                id="display_type_amoled"
                                value="amoled"
                            />
                            <label
                                htmlFor="display_type_amoled"
                                className="text-gray-600 uppercase"
                            >
                                Amoled
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="display_type"
                                id="display_type_ips_lcd"
                                value="IPS LCD"
                            />
                            <label
                                htmlFor="display_type_ips_lcd"
                                className="text-gray-600 uppercase"
                            >
                                IPS LCD
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="display_type"
                                id="display_type_lcd"
                                value="LCD"
                            />
                            <label
                                htmlFor="display_type_lcd"
                                className="text-gray-600 uppercase"
                            >
                                LCD
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="display_type"
                                id="display_type_oled"
                                value="OLED"
                            />
                            <label
                                htmlFor="display_type_oled"
                                className="text-gray-600 uppercase"
                            >
                                OLCD
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Market Status */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        market status
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status_available"
                                value="available"
                            />
                            <label
                                htmlFor="status_available"
                                className="text-gray-600 capitalize"
                            >
                                available
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status_not_available"
                                value="not available"
                            />
                            <label
                                htmlFor="status_not_available"
                                className="text-gray-600 capitalize"
                            >
                                not available
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status_official"
                                value="official"
                            />
                            <label
                                htmlFor="status_official"
                                className="text-gray-600 capitalize"
                            >
                                official
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status_unofficial"
                                value="unofficial"
                            />
                            <label
                                htmlFor="status_unofficial"
                                className="text-gray-600 capitalize"
                            >
                                unofficial
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="status"
                                id="status_upcoming"
                                value="upcoming"
                            />
                            <label
                                htmlFor="status_upcoming"
                                className="text-gray-600 capitalize"
                            >
                                upcoming
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Network */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        Network
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="network"
                                id="network_3"
                                value="3"
                            />
                            <label
                                htmlFor="network_3"
                                className="text-gray-600 uppercase"
                            >
                                3G
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="network"
                                id="network_4"
                                value="4"
                            />
                            <label
                                htmlFor="network_4"
                                className="text-gray-600 uppercase"
                            >
                                4G
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="network"
                                id="network_5"
                                value="5"
                            />
                            <label
                                htmlFor="network_5"
                                className="text-gray-600 uppercase"
                            >
                                5G
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="network"
                                id="network_wifi"
                                value="wifi"
                            />
                            <label
                                htmlFor="network_wifi"
                                className="text-gray-600 uppercase"
                            >
                                WIFI
                            </label>
                        </li>
                    </ul>
                </section>

                {/* OS */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">OS</h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="os"
                                id="os_android"
                                value="android"
                            />
                            <label
                                htmlFor="os_android"
                                className="text-gray-600 capitalize"
                            >
                                android
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="os"
                                id="os_ios"
                                value="ios"
                            />
                            <label htmlFor="os_ios" className="text-gray-600">
                                IOS
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="os"
                                id="os_windows"
                                value="windows"
                            />
                            <label
                                htmlFor="os_windows"
                                className="text-gray-600 capitalize"
                            >
                                windows
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="os"
                                id="os_java"
                                value="java"
                            />
                            <label
                                htmlFor="os_java"
                                className="text-gray-600 capitalize"
                            >
                                Java
                            </label>
                        </li>
                    </ul>
                </section>

                {/* RAM */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        RAM
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="ram"
                                id="ram_2"
                                value="2"
                            />
                            <label
                                htmlFor="ram_2"
                                className="text-gray-600 capitalize"
                            >
                                2 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="ram"
                                id="ram_4"
                                value="4"
                            />
                            <label
                                htmlFor="ram_4"
                                className="text-gray-600 capitalize"
                            >
                                4 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="ram"
                                id="ram_6"
                                value="6"
                            />
                            <label
                                htmlFor="ram_6"
                                className="text-gray-600 capitalize"
                            >
                                6 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="ram"
                                id="ram_8"
                                value="8"
                            />
                            <label
                                htmlFor="ram_8"
                                className="text-gray-600 capitalize"
                            >
                                8 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="ram"
                                id="ram_12"
                                value="12"
                            />
                            <label
                                htmlFor="ram_12"
                                className="text-gray-600 capitalize"
                            >
                                12 GB
                            </label>
                        </li>
                    </ul>
                </section>

                {/* Storage */}
                <section className="flex flex-col gap-3 mb-2">
                    <h4 className="text-2xl font-semibold text-gray-700">
                        storage
                    </h4>
                    <ul className="pl-2">
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="storage"
                                id="storage_16"
                                value="16"
                            />
                            <label
                                htmlFor="storage_16"
                                className="text-gray-600 capitalize"
                            >
                                16 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="storage"
                                id="storage_32"
                                value="32"
                            />
                            <label
                                htmlFor="storage_32"
                                className="text-gray-600 capitalize"
                            >
                                32 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="storage"
                                id="storage_64"
                                value="64"
                            />
                            <label
                                htmlFor="storage_64"
                                className="text-gray-600 capitalize"
                            >
                                64 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="storage"
                                id="storage_128"
                                value="128"
                            />
                            <label
                                htmlFor="storage_128"
                                className="text-gray-600 capitalize"
                            >
                                128 GB
                            </label>
                        </li>
                        <li className="flex gap-2">
                            <input
                                type="checkbox"
                                name="storage"
                                id="storage_256"
                                value="256"
                            />
                            <label
                                htmlFor="storage_256"
                                className="text-gray-600 capitalize"
                            >
                                256 GB
                            </label>
                        </li>
                    </ul>
                </section>
            </aside>
        </>
    );
}
