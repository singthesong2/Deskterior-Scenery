import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews = [], currentUserId, onEdit, onDelete }) => {
  if (reviews.length === 0) {
    return <p>아직 작성된 리뷰가 없습니다.</p>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          isMine={currentUserId != null && review.authorId === currentUserId}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
