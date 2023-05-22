import { ReactElement } from "react";
import { styled } from "styled-components";
import { useCartStore } from "../../../../store";
import { shallow } from "zustand/shallow";
import { IProduct } from "../../../ProductList";

export default function AddToCart({
  product,
}: {
  product: IProduct;
}): ReactElement {
  const { addToCart } = useCartStore(
    (state) => ({
      addToCart: state.addToCart,
    }),
    shallow
  );

  return (
    <AddToCartButtonStyles onClick={() => addToCart(product)}>
      Add To Cart
    </AddToCartButtonStyles>
  );
}

const AddToCartButtonStyles = styled.button`
  background-color: #fee233;
  box-shadow: 10px 7px 0px #ff00c4;
  padding: 0.5rem 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: black;

  border-radius: 0;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 15px 10px 0px #ff00c4;
    translate: -2px -1px;
  }
  &:active {
    transition-duration: 30ms;
    box-shadow: 7px 5px 0px #ff00c4;
    translate: 1px 1px;
  }

  @keyframes hoverEffect {
    100% {
    }
  }
`;
