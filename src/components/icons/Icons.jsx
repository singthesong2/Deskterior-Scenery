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

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// 상품 목록 페이지 장바구니 아이콘
export const BasketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
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

// 상품 목록 페이지 상품 찜 하트아이콘
export const HeartIcon = ({ filled = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill={filled ? "#e0453c" : "currentColor"}
    viewBox="0 -0.5 16 16"
    {...props}
  >
    {filled ? (
      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.735 3.562-3.248 8 1.314" />
    ) : (
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
    )}
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

export const ChevronDownIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const NoResultIcon = (props) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="26" cy="26" r="16" />
    <line x1="37.5" y1="37.5" x2="50" y2="50" />
    <line x1="19" y1="19" x2="25" y2="25" />
    <line x1="25" y1="19" x2="19" y2="25" />
    <line x1="29" y1="19" x2="35" y2="25" />
    <line x1="35" y1="19" x2="29" y2="25" />
    <path d="M18 33c3 3 13 3 16 0" />
    <line x1="44" y1="10" x2="41" y2="15" />
    <line x1="52" y1="14" x2="47" y2="17" />
    <line x1="54" y1="22" x2="48" y2="22" />
  </svg>
);
