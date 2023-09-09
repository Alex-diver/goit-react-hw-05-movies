import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'Api';
import { ReviewsH3, ReviewsP } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ id, author, content }) => (
            <li kay={id}>
              <ReviewsH3>{author}</ReviewsH3>
              <ReviewsP>{content}</ReviewsP>
            </li>
          ))
        : "We don't have any reviews for this movie :("}
    </ul>
  );
};
export default Reviews;
