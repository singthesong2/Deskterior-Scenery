const STARS = [1, 2, 3, 4, 5];

/**
 * onChange 를 주면 클릭으로 정수 별점 선택(입력용),
 * 안 주면 읽기 전용이며 소수점(반쪽 별)까지 표시한다.
 */
const StarRating = ({ value = 0, onChange }) => {
  const selectable = typeof onChange === "function";
  const score = Math.max(0, Math.min(5, Number(value) || 0));

  // 읽기 전용: ☆ 5개 위에 ★ 5개를 점수 비율만큼만 잘라서 겹침 → 반쪽 별 표현
  if (!selectable) {
    return (
      <span
        aria-label={`5점 만점에 ${score.toFixed(1)}점`}
        style={{
          position: "relative",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        <span aria-hidden="true">☆☆☆☆☆</span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: `${(score / 5) * 100}%`,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          ★★★★★
        </span>
      </span>
    );
  }

  // 입력용: 별 하나씩 버튼 (정수만)
  const rounded = Math.round(score);
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
