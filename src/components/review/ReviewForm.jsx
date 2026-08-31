import { useState } from "react";
import StarRating from "../common/StarRating";

/**
 * defaultValue 를 주면 "수정" 모드, 없으면 "작성" 모드.
 * 수정 대상이 바뀔 때는 부모에서 key 를 바꿔 remount 시킨다.
 */
const ReviewForm = ({
  isLoggedIn = false,
  defaultValue,
  onSubmit,
  onCancel,
}) => {
  const isEditing = Boolean(defaultValue);

  const [rating, setRating] = useState(defaultValue?.rating ?? 0);
  const [content, setContent] = useState(defaultValue?.content ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLoggedIn || submitting) return;

    if (rating === 0) {
      setError("별점을 선택해 주세요.");
      return;
    }
    if (content.trim() === "") {
      setError("리뷰 내용을 입력해 주세요.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await onSubmit?.({ rating, content: content.trim() });

      if (!isEditing) {
        setRating(0);
        setContent("");
      }
    } catch {
      setError("저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>별점</span>
        <StarRating
          value={rating}
          onChange={
            isLoggedIn && !submitting
              ? (nextRating) => {
                  setRating(nextRating);
                  setError("");
                }
              : undefined
          }
        />
        {!isLoggedIn && <span>로그인 후 별점 선택</span>}
      </div>

      <textarea
        value={content}
        disabled={!isLoggedIn || submitting}
        placeholder={
          isLoggedIn
            ? "리뷰를 작성해 주세요"
            : "로그인 후 리뷰를 작성할 수 있어요"
        }
        onChange={(event) => {
          setContent(event.target.value);
          setError("");
        }}
      />

      {error && <p role="alert">{error}</p>}

      <div>
        {isEditing && (
          <button
            type="button"
            disabled={submitting}
            onClick={() => onCancel?.()}
          >
            취소
          </button>
        )}
        <button type="submit" disabled={!isLoggedIn || submitting}>
          {submitting ? "저장 중..." : isEditing ? "수정" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
