import { ChevronLeftIcon } from "../icons/Icons";

/**
 * 상단 네비 — 뒤로가기 + "Home > Category > 상품명" 경로.
 * 라우터가 없어서 뒤로가기는 window.history.back(),
 * 경로 항목은 아직 링크 없이 텍스트로만 표시한다.
 */
const ProductBreadcrumb = ({ category, productName }) => {
  const trail = ["Home", category, productName].filter(Boolean);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav aria-label="현재 위치">
      <button type="button" onClick={handleBack}>
        <ChevronLeftIcon aria-hidden="true" focusable="false" />
        Prev
      </button>

      <ol>
        {trail.map((label, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li
              key={index}
              className={index > 0 ? "breadcrumb-item" : undefined}
              aria-current={isLast ? "page" : undefined}
            >
              {label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProductBreadcrumb;
