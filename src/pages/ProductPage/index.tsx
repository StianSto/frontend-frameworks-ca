import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API_URL } from "../../constants";
import { styled } from "styled-components";
import AddToCart from "../../components/ui/Buttons/AddToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IProduct, IReview } from "../../components/ProductList";

export default function ProductPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useApi(API_URL + "/" + id);

  const {
    title,
    discountedPrice,
    imageUrl,
    price,
    rating,
    description,
    reviews,
  } = data ?? {};

  return (
    <>
      <Product>
        {!isLoading && !isError && (
          <>
            <div className="img-container">
              <img src={imageUrl} alt={"image of " + title} />
            </div>
            <div className="product-body">
              <h1 id="productTitle">{title}</h1>
              {data && (
                <>
                  <ProductReviews reviews={reviews} rating={rating} />
                  <p id="productdescription">{description}</p>
                  <ProductPrice
                    discountedPrice={discountedPrice}
                    price={price}
                  />
                  <AddToCart product={data as IProduct} />
                </>
              )}
            </div>
          </>
        )}

        {isLoading && "Loading Item"}
        {isError && "sorry there was an error trying to retrieve the item"}
      </Product>
    </>
  );
}

function ProductReviews({ reviews = [], rating = 0 }: IProductReviews) {
  const countReviews = reviews?.length;

  return (
    <ProductRatingStyle id="productrating">
      <>
        {countReviews !== 0 && (
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {rating && rating.toFixed(1)}
          </span>
        )}

        <span className="reviews">
          {countReviews !== 0 ? countReviews : "be the first to make a review"}{" "}
          {countReviews > 1 ? "reviews" : countReviews === 1 ? "review" : null}
        </span>
      </>
    </ProductRatingStyle>
  );
}

function ProductPrice({ discountedPrice = 0, price = 0 }: IProductPrice) {
  const discount = (price - discountedPrice) / price;

  return (
    <ProductPriceStyle className="price">
      <span>${discountedPrice}</span>

      {discountedPrice !== price && (
        <>
          <span className="discount">
            {"-" + Math.floor(discount * 100).toFixed(0) + "%"}
          </span>
          <span className="price-old">${price}</span>
        </>
      )}
    </ProductPriceStyle>
  );
}

// TYPE INTERFACES

interface IProductReviews {
  reviews?: IReview[];
  rating?: number;
}

interface IProductPrice {
  discountedPrice?: number;
  price?: number;
}

// STYLED COMPONENTS

const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1000px;
  margin-inline: auto;
  margin-block: 3rem;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  // image
  & .img-container {
    width: calc(100% - 1rem);
    margin-inline: auto;
    aspect-ratio: 1;
    background-color: #f7f7f7;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 500px;
      margin: auto;
      object-fit: contain;
      object-position: center;
    }
  }

  // body
  & .product-body {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2rem);
  }

  & #productTitle {
    margin-block: 1rem;
  }

  & #productdescription {
    font-size: 13px;
    margin-block: 0 2rem;
  }
`;

const ProductRatingStyle = styled.p`
  display: flex;
  gap: 1rem;
  margin-top: 0;

  & .star-icon {
    color: gold;
    margin-right: 4px;

    &.hollow {
      color: #d5d5d5;
    }
  }
  & .reviews {
    text-decoration: underline;
    font-size: 12px;
    margin-block: auto;
  }
`;

const ProductPriceStyle = styled.p`
  font-weight: 800;
  font-size: 2rem;
  display: flex;
  align-items: flex-start;
  margin-block: auto 1rem;

  & .discount {
    background: #fee233;
    padding: 0.25rem 1rem;
    border-radius: 100vw;
    margin-left: 8px;
    color: black !important;
  }

  & .discount,
  & .price-old {
    translate: 0 -8px;
    font-weight: 400;
    font-size: 1rem;
  }

  & .price-old {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;
