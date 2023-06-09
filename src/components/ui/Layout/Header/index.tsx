import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../../../store";

export default function Header() {
  const { cart } = useCartStore((state) => ({
    cart: state.cart,
  }));
  return (
    <HeaderStyled>
      <div className="wrapper">
        <p id="headerLogo">Online Shop</p>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>
                <FontAwesomeIcon icon={faHouse} />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                <FontAwesomeIcon icon={faPhone} />
              </NavLink>
            </li>
            <li className="cart-logo">
              <NavLink to={"/cart"}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
              {cart.length > 0 && (
                <span className="cart-overlay">{cart.length}</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: var(--primary);
  color: white;
  padding-block: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;

  & .wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    justify-content: space-between;
    margin-inline: 2rem;
  }

  & #headerLogo {
    width: fit-content;
    font-size: 2rem;
    margin: 0;
  }

  & ul {
    list-style-type: none;
    display: inline-flex;
    flex: 1;
    gap: 3rem;
    margin: 0;

    & li {
      width: 30px;
      aspect-ratio: 1;
      font-size: 2rem;
      color: white !important;

      & a {
        color: white;
        transition-property: filter, margin;
        transition-duration: 100ms;
        transition-timing-function: ease-in-out;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 0%;
          height: 4px;
          border-radius: 10vw;
          background-color: currentColor;
          transition: width 100ms ease-in-out;
        }

        &:hover:not(.active),
        &:focus:not(.active) {
          filter: drop-shadow(3px 1px 1px rgb(0, 0, 0, 0.3));
        }

        &.active {
          cursor: auto;
          &::before {
            transition: width 200ms ease-in-out;
            width: 100%;
          }
        }
      }
    }
    .cart-logo {
      position: relative;

      .cart-overlay {
        font-size: 1rem;
        background-color: #00c2d5;
        width: 24px;
        text-align: center;
        aspect-ratio: 1;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        translate: 80% -30%;
        animation: appear 400ms ease-in-out forwards;
        scale: 0;

        @keyframes appear {
          60% {
            scale: 1.25;
          }
          80% {
            scale: 0.9;
          }
          100% {
            scale: 1;
          }
        }
      }
    }
  }
`;
