import { useEffect, useState } from "react";
import { IProduct } from "../components/ProductList";

const useApi = (url: string, options?: FetchOptions) => {
  const [data, setData] = useState<IProduct | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url, options);
        const results = await response.json();

        setData(results);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, options]);

  return { data, isLoading, isError };
};

export default useApi;

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
