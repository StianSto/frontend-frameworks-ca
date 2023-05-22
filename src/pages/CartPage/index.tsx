import {
  faChevronLeft,
  faChevronRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { ICartProduct, useCartStore } from "../../store";
import CtaButton from "../../components/ui/Buttons/CTA";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart } = useCartStore((state) => ({
    cart: state.cart,
  }));

  const total: number = cart.reduce((total, item: ICartProduct) => {
    const itemTotal =
      item.count * (item.discountedPrice ? item.discountedPrice : 0);
    return (total += itemTotal);
  }, 0);

  return (
    <CartPageStyle>
      <h1>Checkout</h1>
      <section className="container">
        <ul>
          {cart.length > 0 ? (
            cart.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <h3>oh, there are no items here :O </h3>
          )}
        </ul>

        {cart.length > 0 && (
          <aside>
            <div className="summary-card">
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <span>{item.count} &times; </span>
                    {item.title}
                  </li>
                ))}
              </ul>
              <hr />
              <h2>
                Total: <span>${total.toFixed(2)}</span>
              </h2>
            </div>
            <Link to={"/checkout"}>
              <CtaButton>Checkout</CtaButton>
            </Link>
          </aside>
        )}
      </section>
    </CartPageStyle>
  );
}

function CartItem({ item }: { item: ICartProduct }) {
  const { addProductOnce, removeProductOnce, removeItem } = useCartStore(
    (state) => ({
      addProductOnce: state.addProductOnce,
      removeProductOnce: state.removeProductOnce,
      removeItem: state.removeItem,
    })
  );

  const total = item.count * (item.discountedPrice ? item.discountedPrice : 0);

  return (
    <CartItemStyle>
      <div className="img-container">
        <img src={item.imageUrl} alt="" />
      </div>
      <div>
        <h2>{item.title}</h2>
        <div className="increment">
          <button onClick={() => removeProductOnce(item.id as string)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <span>{item.count}</span>
          <button onClick={() => addProductOnce(item.id as string)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <h3>${total.toFixed(2)}</h3>
      </div>
      <button
        className="remove-item"
        onClick={() => removeItem(item.id as string)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </CartItemStyle>
  );
}

const CartPageStyle = styled.div`
  margin-inline: auto;
  margin-block: 4rem;
  max-width: 1000px;

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: min(100%, 400px);
    flex: 5;
  }

  aside {
    min-width: min(100%, 250px);
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .summary-card {
      width: 100%;
      border: 1px solid grey;
      padding: 1rem;
    }
  }
`;

const CartItemStyle = styled.li`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 3fr auto;
  border: 1px solid grey;

  & .img-container {
    max-width: 300px;
    aspect-ratio: 1;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .increment {
    padding: 0;
    display: flex;
    gap: 2px;
    align-items: center;
    & button {
      background: var(--bg);
      font-size: 1rem;
      padding: 2px 8px;
    }
  }

  .remove-item {
    align-self: flex-start;
    background-color: transparent;
    padding: 0;
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1;
  }
`;
