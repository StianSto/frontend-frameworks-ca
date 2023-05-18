import { useEffect, useState } from "react";
import { IProduct } from "../components/ProductList";

const useApi = (url: string, options?: FetchOptions) => {
  const [data, setData] = useState<IProduct | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(url);

  useEffect(() => {
    (async () => {
      try {
        console.log(3);

        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url, options);
        const results = await response.json();
        console.log(response);

        setData(results);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
      console.log(23424);
    })();
  }, [url, options]);

  console.log(2);

  return { data, isLoading, isError };
};

export default useApi;

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
