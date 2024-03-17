import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";


interface APIResponse<T> {
  data: T | any,
  error: AxiosError | null,
  isLoading: boolean,
  isSuccess: boolean,
}

const useAxios = (initialUrl: string) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios.get(url);
      setData(response.data);
      setIsSuccess(true);
    } catch (error : any) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, isSuccess, fetchData};
};

export default useAxios;