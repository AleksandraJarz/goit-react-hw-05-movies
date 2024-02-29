import { List, ReviewAuthor, ReviewItem, Review } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(review => (
        <ReviewItem key={review.id}>
          <ReviewAuthor>Author: {review.author}</ReviewAuthor>
          <Review>{review.content}</Review>
        </ReviewItem>
      ))}
    </List>
  );
};
export default ReviewsList;
