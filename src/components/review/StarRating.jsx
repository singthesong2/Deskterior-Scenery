const STARS = [1, 2, 3, 4, 5];

/**
 * onChange 를 주면 클릭 가능한 별점, 안 주면 읽기 전용.
 */
const StarRating = ({ value = 0, onChange }) => {
  const selectable = typeof onChange === "function";
  const score = Number.isFinite(value) ? value : 0;
  const rounded = Math.round(score);

  if (!selectable) {
    return (
      <span aria-label={`5점 만점에 ${rounded}점`}>
        {STARS.map((star) => (
          <span key={star}>{star <= rounded ? "★" : "☆"}</span>
        ))}
      </span>
    );
  }

  return (
    <span>
      {STARS.map((star) => (
        <button
          key={star}
          type="button"
          aria-label={`${star}점`}
          aria-pressed={star === rounded}
          onClick={() => onChange(star)}
        >
          {star <= rounded ? "★" : "☆"}
        </button>
      ))}
    </span>
  );
};

export default StarRating;
