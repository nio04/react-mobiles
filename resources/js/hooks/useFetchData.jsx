// resources/js/hooks/useFetchData.js
import { useState, useEffect } from "react";

const useFetchData = (apiFunc, params) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const result = await apiFunc(params);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [apiFunc, params]);

    return { data, loading, error };
};

export default useFetchData;
