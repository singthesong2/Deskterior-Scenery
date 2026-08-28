import { useMemo, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";

/**
 * 리뷰 영역 전체를 관리하는 컴포넌트
 * - reviews: 리뷰 목록 (지금은 로컬 state, 나중에 reviewsApi 로 교체)
 * - editingId: 수정 중인 리뷰 id (null 이면 새 글 작성)
 */
const ReviewSection = ({
  initialReviews = [],
  isLoggedIn = false,
  currentUserId = null,
  currentUserName = "",
}) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [editingId, setEditingId] = useState(null);

  const editingReview =
    editingId == null
      ? undefined
      : reviews.find((review) => review.id === editingId);

  const average = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + (review.rating ?? 0), 0);
    return sum / reviews.length;
  }, [reviews]);

  const handleCreate = ({ rating, content }) => {
    const newReview = {
      id: crypto.randomUUID(),
      authorId: currentUserId,
      author: currentUserName || "익명",
      rating,
      content,
      date: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleUpdate = ({ rating, content }) => {
    const targetId = editingId;
    setReviews((prev) =>
      prev.map((review) =>
        review.id === targetId ? { ...review, rating, content } : review,
      ),
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <section>
      <h2>Reviews</h2>
      <p>
        구매한 상품에 대한 평가를 남기고 다른 사용자의 리뷰를 확인해 보세요.
      </p>

      <ReviewForm
        key={editingId ?? "new"}
        isLoggedIn={isLoggedIn}
        defaultValue={editingReview}
        onSubmit={editingReview ? handleUpdate : handleCreate}
        onCancel={() => setEditingId(null)}
      />

      <ReviewSummary average={average} count={reviews.length} />

      <ReviewList
        reviews={reviews}
        currentUserId={currentUserId}
        onEdit={setEditingId}
        onDelete={handleDelete}
      />
    </section>
  );
};

export default ReviewSection;
