import { ChevronLeftIcon, ChevronRightIcon } from "../icons/Icons";

const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  const pages =
    totalPages <= 4
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [1, 2, 3, "...", totalPages];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        margin: "40px 0",
      }}
    >
      <ChevronLeftIcon
        style={{
          cursor: currentPage > 1 ? "pointer" : "default",
          color: currentPage > 1 ? "#0d0c0a" : "#ccc9c0",
        }}
        onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
      />

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} style={{ color: "#a19d92" }}>
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              background: page === currentPage ? "#0d0c0a" : "transparent",
              color: page === currentPage ? "#fff" : "#0d0c0a",
            }}
          >
            {page}
          </button>
        ),
      )}

      <ChevronRightIcon
        style={{
          cursor: currentPage < totalPages ? "pointer" : "default",
          color: currentPage < totalPages ? "#0d0c0a" : "#ccc9c0",
        }}
        onClick={() =>
          currentPage < totalPages && onPageChange?.(currentPage + 1)
        }
      />
    </div>
  );
};

export default Pagination;
