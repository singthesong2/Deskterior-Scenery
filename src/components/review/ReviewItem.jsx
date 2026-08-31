import StarRating from "../common/StarRating";

const ReviewItem = ({ review, isMine = false, onEdit, onDelete }) => {
  const authorName = isMine ? "Me" : review.author;
  const reviewDate = review.date ? new Date(review.date) : null;
  const isValidDate = reviewDate && !Number.isNaN(reviewDate.getTime());

  const handleDelete = () => {
    if (!window.confirm("리뷰를 삭제할까요?")) return;
    onDelete?.(review.id);
  };

  return (
    <li>
      <div>
        <span>{authorName}</span>
        <StarRating value={review.rating ?? 0} readOnly />
        <span>{review.rating ?? 0}</span>

        {isMine && (
          <div>
            <button
              type="button"
              aria-label={`${authorName} 리뷰 수정`}
              onClick={() => onEdit?.(review.id)}
            >
              Edit
            </button>
            <button
              type="button"
              aria-label={`${authorName} 리뷰 삭제`}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <p style={{ whiteSpace: "pre-wrap" }}>{review.content}</p>

      {isValidDate && (
        <time dateTime={reviewDate.toISOString()}>
          {reviewDate.toLocaleDateString("ko-KR")}
        </time>
      )}
    </li>
  );
};

export default ReviewItem;
