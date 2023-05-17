import ProductCard from "../ProductCard";
import { styled } from "styled-components";

export default function ProductList({ products }: IAllProducts) {
  return (
    <ProductListStyles>
      {products.map((prod: IProduct) => (
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

interface IAllProducts {
  products: IProduct[];
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: IReview[];
}

export interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}
