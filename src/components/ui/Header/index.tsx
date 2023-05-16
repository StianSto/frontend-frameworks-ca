import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <p id="headerLogo">Online Shop</p>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: var(--bg-primary);
  color: white;
  width: 100vw;
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
    }
  }
`;
