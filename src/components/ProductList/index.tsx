import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { styled } from "styled-components";

export default function ProductList({ products }: IAllProducts) {
  return (
    <ProductListStyles>
      {products.map((prod: IProduct) => (
        <Link
          to={`/product
				/${prod.id}`}
          key={prod.id}
        >
          <ProductCard {...prod}></ProductCard>
        </Link>
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
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
}
