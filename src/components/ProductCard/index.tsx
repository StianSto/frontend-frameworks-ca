import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../ProductList";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  title,
  price,
  discountedPrice,
  imageUrl,
  rating,
}: IProduct) {
  const discount =
    price && discountedPrice ? (price - discountedPrice) / price : 0;

  return (
    <Card className="card" to={`/product/${id}`}>
      <div className="card-img">
        <img src={imageUrl} alt={"image of " + title} />
      </div>
      <div className="card-body">
        <div className="card-header">
          <h3>{title}</h3>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {rating}
          </div>
        </div>

        <p className="price-container">
          <span className="price">${discountedPrice}</span>
          {discount !== 0 ? (
            <>
              <span className="old-price">{price}</span>
            </>
          ) : null}
        </p>
      </div>
      {discount !== 0 && (
        <span className="discount">
          {"-" + Math.floor(discount * 100).toFixed(0) + "%"}
        </span>
      )}
    </Card>
  );
}

const Card = styled(Link)`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr minmax(50px, auto);
  position: relative;
  max-width: 500px;

  box-shadow: 10px 8px 0 var(--shadow);
  border: 2px solid #939393;
  color: black;
  transition: all 200ms ease-in-out;

  @media screen and (prefers-color-scheme: dark) {
    color: #ececec;
  }

  &:hover,
  &:focus-within {
    box-shadow: 10px 8px 0 #939393;
    scale: 1.05;
  }

  & .card-img {
    width: 100%;
    aspect-ratio: 1;
    background-color: #f7f7f7;
    & img {
      object-fit: contain;
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  & .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--bg);

    & .card-header {
      display: flex;
      flex-wrap: nowrap;
      flex: 1;
      justify-content: space-between;
      min-height: 5rem;

      & > * {
        margin: 0.5rem 1rem;
      }

      & .star-icon {
        color: gold;
      }
    }

    & .price-container {
      margin-inline: auto;
      margin-top: auto;
      display: flex;

      & .old-price {
        text-decoration: line-through;
      }

      & .price {
        color: #a6eda8;
        font-size: larger;
        font-weight: bold;
      }
    }
  }
  & .discount {
    position: absolute;
    top: 0;
    right: 0;
    translate: -10% 10%;
    background: #a6eda8;
    border-radius: 100vw;
    padding: 0.25rem 1rem;
    color: black;
  }
`;
