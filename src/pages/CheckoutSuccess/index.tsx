import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useCartStore } from "../../store";
import { useEffect } from "react";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCartStore((state) => ({
    clearCart: state.clearCart,
  }));

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <CheckoutStyle>
      <div className="card">
        <h1>Order sent</h1>
        <p className="larger">a receipt has been sent to your email address</p>
        <p>thank you for shopping at online shop</p>
        <Link to={"/"}>&lt;- go back to home page</Link>
      </div>
    </CheckoutStyle>
  );
}

const CheckoutStyle = styled.div`
  margin: auto;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    background-color: white;
    color: black;
    padding: 3rem 4rem;
    margin-inline: 2rem;
    font-weight: bold;
    height: fit-content;

    h1 {
      margin: 0;
    }

    & *:not(h1) {
      color: var(--primary);
    }
    & .larger {
      font-size: larger;
    }
  }
`;
