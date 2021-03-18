import React from "react";

function Rating({ productRating, productReviews, starColor }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: starColor }}
          className={
            productRating >= 1
              ? "fas fa-star"
              : productRating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: starColor }}
          className={
            productRating >= 2
              ? "fas fa-star"
              : productRating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: starColor }}
          className={
            productRating >= 3
              ? "fas fa-star"
              : productRating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: starColor }}
          className={
            productRating >= 4
              ? "fas fa-star"
              : productRating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: starColor }}
          className={
            productRating >= 5
              ? "fas fa-star"
              : productRating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{`${productReviews} reviews` && `${productReviews} reviews`}</span>
    </div>
  );
}

Rating.defaultProps = {
  starColor: "#f8e825",
};

export default Rating;
