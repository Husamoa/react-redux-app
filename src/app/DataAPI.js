import {useEffect, useState} from "react";

export const useFetch = (query) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(
                `http://localhost:9000/${query}`
            );
            const data = await response.text();
            setData(data);
            console.log("DataAPI.useFetch", data)
            setStatus('fetched');
        };

        fetchData();
    }, [query]);

    return { status, data };
};
