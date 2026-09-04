import { useState } from "react";
import ReviewStars from "./ReviewStars";
import Modal from "../common/Modal";
import * as S from "../../styles/ProductDetail/Review.styles";

/** "2026.08.15" 또는 ISO 문자열 → "2026.08.15" 로 표기 */
const formatDate = (raw) => {
  if (!raw) return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return String(raw);
  const yyyy = parsed.getFullYear();
  const mm = String(parsed.getMonth() + 1).padStart(2, "0");
  const dd = String(parsed.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

const ReviewItem = ({ review, isMine = false, onEdit, onDelete }) => {
  const authorName = isMine ? "Me" : review.author;
  const rating = review.rating ?? 0;
  const dateLabel = formatDate(review.date);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const confirmDelete = () => {
    setDeleteModalOpen(false);
    onDelete?.(review.id);
  };

  return (
    <>
      <S.Item $mine={isMine}>
        <S.ItemHeader>
          <S.Author $mine={isMine}>{authorName}</S.Author>
          <S.Stars>
            <ReviewStars value={rating} variant="display" size={16} />
          </S.Stars>
          <S.Score>{rating.toFixed(1)}</S.Score>

          {isMine && (
            <S.ItemActions>
              <S.ActionButton
                type="button"
                aria-label={`${authorName} 리뷰 수정`}
                onClick={() => onEdit?.(review.id)}
              >
                Edit
              </S.ActionButton>
              <S.ActionButton
                type="button"
                aria-label={`${authorName} 리뷰 삭제`}
                onClick={() => setDeleteModalOpen(true)}
              >
                Delete
              </S.ActionButton>
            </S.ItemActions>
          )}
        </S.ItemHeader>

        <S.Content>{review.content}</S.Content>

        {dateLabel && <S.DateText>{dateLabel}</S.DateText>}
      </S.Item>

      {deleteModalOpen && (
        <Modal
          title="Delete?"
          description="이 리뷰를 삭제하시겠습니까?"
          confirmText="Delete"
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
};

export default ReviewItem;
