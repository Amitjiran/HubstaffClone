import React from 'react';
import './ReviewCarousel.css';

const reviews = [
  {
    quote: "Persist time tracker allows us to track the time and be more productive.This helps us to track things and be efficient",
    author: "Myself",
    position: "At Persist Ventures",
    logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png"
  },
  // Add other reviews here
];

const ReviewCarousel = () => {
  return (
    <div className="reviews">
      <div className="line"></div>
      <div className="carousel carousel-fade" id="quote-carousel">
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div key={index} className={`item ${index === 2 ? 'active' : ''}`}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="hi-star hi-24">★</i>
                ))}
              </div>
              <div className="quote">{review.quote}</div>
              <div className="user">
                <div className="icon">
                  <img alt="organization logo" src={review.logo} />
                </div>
                <div className="info">
                  <div className="name">{review.author}</div>
                  <div className="position">{review.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
