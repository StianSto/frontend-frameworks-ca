import useApi from "../../hooks/useApi";
import { API_URL } from "../../constants";
import ProductList, { IProduct } from "../../components/ProductList";
import Searchbar from "../../components/Searchbar";
import { useSearchStore } from "../../store";
import { shallow } from "zustand/shallow";

export default function HomePage() {
  const { data } = useApi(API_URL);
  let products;

  const { query } = useSearchStore(
    (state) => ({
      query: state.query,
    }),
    shallow
  );

  (function filterProducts() {
    try {
      if (Array.isArray(data)) {
        products = data?.filter((item: IProduct) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
      }
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
