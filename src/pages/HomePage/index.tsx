import useApi from "../../hooks/useApi";
import { API_URL } from "../../constants";
import ProductList, { IProduct } from "../../components/ProductList";
import Searchbar from "../../components/Searchbar";
import useSearchStore from "../../store";
import { shallow } from "zustand/shallow";

export default function HomePage() {
  const { data, isLoading, isError } = useApi(API_URL);
  let products;

  const { query } = useSearchStore(
    (state: any) => ({
      query: state.query,
    }),
    shallow
  );

  (function filterProducts() {
    try {
      products = data?.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.log("there was an error");
    }
  })();

  return (
    <>
      <Searchbar />
      <ProductList products={products as IProduct[]} />
    </>
  );
}
