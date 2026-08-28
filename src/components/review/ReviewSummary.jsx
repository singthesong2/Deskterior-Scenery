const ReviewSummary = ({ average, count = 0 }) => {
  const score = Number.isFinite(average) ? average : 0;

  return (
    <div>
      <h3>작성된 리뷰</h3>
      <span>
        {score.toFixed(1)} ({count})
      </span>
    </div>
  );
};

export default ReviewSummary;
