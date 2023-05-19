import { shallow } from "zustand/shallow";
import { API_URL } from "../../constants";
import useApi from "../../hooks/useApi";
import { useSearchStore } from "../../store";
import ProductCard from "../ProductCard";
import { styled } from "styled-components";

export default function ProductList() {
  const { data } = useApi(API_URL);
  let products;

  const { query } = useSearchStore(
    (state) => ({
      query: state.query,
    }),
    shallow
  );

  // filter products based on search query
  (() => {
    if (Array.isArray(data)) {
      products = data?.filter((item: IProduct) =>
        item?.title?.toLowerCase().includes(query.toLowerCase())
      );
    }
  })();

  return (
    <ProductListStyles>
      {products?.map((prod: IProduct) => (
        <ProductCard {...prod} key={prod.id}></ProductCard>
      ))}
    </ProductListStyles>
  );
}

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;
  padding-inline: 1rem;
  gap: 3rem;
`;

// type declarations

export interface IProduct {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  discountedPrice?: number;
  imageUrl?: string;
  rating?: number;
  tags?: string[];
  reviews?: IReview[];
}

export interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}
