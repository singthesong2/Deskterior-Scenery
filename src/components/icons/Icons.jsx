const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// 상품 목록 페이지 검색 아이콘
export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
);

// 상품 목록 페이지 장바구니 아이콘
export const BasketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    {...props}
    fill="none"
  >
    <path
      d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.6897 15.843 18.5959 15.9878 18.4635 16.0911C18.3311 16.1945 18.1679 16.2504 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.1137 6.75048 20.2259 6.77667 20.328 6.82662C20.4302 6.87657 20.5197 6.94898 20.5899 7.03844C20.6602 7.12789 20.7092 7.23207 20.7335 7.34317C20.7577 7.45427 20.7565 7.56942 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z"
      fill="currentColor"
    />
  </svg>
);

export const LoginIcon = (props) => (
  <svg
    width="30"
    height="24"
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.00903 12.7502L20.8563 12.7502L20.8563 11.2502L3.00903 11.2502L3.00903 12.7502Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.7415 16.3354L22.185 11.9999L16.7417 7.66309L15.4186 8.72592L19.5277 11.9997L15.4186 15.2724L16.7415 16.3354Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6641 22L11.6641 15.875L13.1641 15.875L13.1641 20.5L23.0929 20.5L23.0929 3.5L13.1641 3.5L13.1641 8.125L11.6641 8.125L11.6641 2L24.5929 2L24.5929 22L11.6641 22Z"
      fill="currentColor"
    />
  </svg>
);

export const LogoutIcon = (props) => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.8789 11.0979L1.23881 11.0979L1.23881 12.8979L17.8789 12.8979L17.8789 11.0979Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.07544 6.7959L4.59188e-05 11.9985L5.07523 17.2027L6.30884 15.9273L2.47765 11.9988L6.30884 8.07152L5.07544 6.7959Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.93213 24L8.93213 16.65L10.6803 16.65L10.6803 22.2L22.2519 22.2L22.2519 1.8L10.6803 1.8L10.6803 7.35L8.93213 7.35L8.93213 -9.53674e-07L24.0001 -1.63184e-06L24.0001 24L8.93213 24Z"
      fill="black"
    />
  </svg>
);

// 상품 목록 페이지 상품 찜 하트아이콘
export const HeartIcon = ({ filled = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M18.9999 10.2107C18.9924 8.29168 17.9856 6.48696 16.0007 5.84751C14.6377 5.40767 13.153 5.65227 12 7.30766C10.847 5.65227 9.3623 5.40767 7.99932 5.84751C6.01416 6.48703 5.00735 8.2921 5.00007 10.2114C4.9817 14.0283 8.84934 16.949 11.999 18.345L12 18.3446L12.001 18.345C15.1508 16.9489 19.0187 14.0279 18.9999 10.2107Z"
      fill={filled ? "#C8473F" : "none"}
      stroke={filled ? "#C8473F" : "currentColor"}
      strokeLinecap="round"
    />
  </svg>
);

// 상품 카드 별점 아이콘
export const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);

// 상세페이지 상단 뒤로가기 화살표 (←)
export const ArrowLeftIcon = (props) => (
  <svg {...base} {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
    />
  </svg>
);

export const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    />
  </svg>
);
// 상품목록 페이지 정렬 드롭다운 아래 화살표 아이콘
export const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
);

// 없는 상품 검색시 나오는 돋보기 아이콘
export const NoResultIcon = (props) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="24" cy="24" r="15" />

    <path d="M15 19 L21 25 M15 25 L21 19" strokeWidth="2" />

    <path d="M27 19 L33 25 M27 25 L33 19" strokeWidth="2" />

    <path d="M15 30c3 3 15 3 18 0" strokeWidth="2" />

    <rect
      x="0"
      y="-4"
      width="20"
      height="8"
      rx="4"
      fill="currentColor"
      stroke="none"
      transform="translate(34 34) rotate(45)"
    />

    <ellipse
      cx="46"
      cy="8"
      rx="3.5"
      ry="1.4"
      fill="currentColor"
      stroke="none"
      transform="rotate(-30 46 8)"
    />
    <ellipse
      cx="54"
      cy="14"
      rx="3"
      ry="1.2"
      fill="currentColor"
      stroke="none"
      transform="rotate(0 54 14)"
    />
    <ellipse
      cx="55"
      cy="24"
      rx="2.6"
      ry="1.1"
      fill="currentColor"
      stroke="none"
      transform="rotate(30 55 24)"
    />
  </svg>
);
