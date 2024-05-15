import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {useEffect, useState} from "react";

export const useApi = <T>(url: string, options?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState<Boolean>(false);

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

    const fetchData = async () => {

        try {
            const response: AxiosResponse<T> = await axios(url, options);
            setData(response.data);
        } catch (err: any) {
            setIsError(!!err);
        }

        setIsLoading(false);
    }

    return {data, isLoading, isError}
}