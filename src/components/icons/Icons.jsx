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

export const BasketIcon = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.0625 23.4375C14.0625 24.475 13.225 25.3125 12.1875 25.3125C11.15 25.3125 10.3125 24.475 10.3125 23.4375C10.3125 22.4 11.15 21.5625 12.1875 21.5625C13.225 21.5625 14.0625 22.4 14.0625 23.4375ZM20.3125 21.5625C19.275 21.5625 18.4375 22.4 18.4375 23.4375C18.4375 24.475 19.275 25.3125 20.3125 25.3125C21.35 25.3125 22.1875 24.475 22.1875 23.4375C22.1875 22.4 21.35 21.5625 20.3125 21.5625ZM25.9125 9.6L23.4125 19.6C23.3621 19.8038 23.2448 19.9847 23.0794 20.1139C22.9139 20.2431 22.7099 20.313 22.5 20.3125H10C9.55 20.3125 9.1625 19.9875 9.075 19.5375L6.7125 6.5625H5C4.4875 6.5625 4.0625 6.1375 4.0625 5.625C4.0625 5.1125 4.4875 4.6875 5 4.6875H7.5C7.95 4.6875 8.3375 5.0125 8.425 5.4625L8.9625 8.4375H25C25.1421 8.4381 25.2823 8.47084 25.41 8.53328C25.5377 8.59572 25.6496 8.68623 25.7374 8.79805C25.8252 8.90986 25.8865 9.04008 25.9168 9.17896C25.9472 9.31784 25.9457 9.46178 25.9125 9.6ZM23.8 10.3125H9.3L10.775 18.4375H21.7625L23.8 10.3125Z"
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
    <path fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6641 22L11.6641 15.875L13.1641 15.875L13.1641 20.5L23.0929 20.5L23.0929 3.5L13.1641 3.5L13.1641 8.125L11.6641 8.125L11.6641 2L24.5929 2L24.5929 22L11.6641 22Z"
      fill="currentColor"
    />
  </svg>

);



export const HeartIcon = ({ filled = false, ...props }) => (
  <svg
    {...base}
    fill={filled ? "#e0453c" : "none"}
    stroke={filled ? "#e0453c" : "currentColor"}
    {...props}
  >
    <path d="M12 20s-7-4.35-9.5-8.8C1 8.1 2.3 5 5.4 5c1.9 0 3.3 1 4.6 2.6C11.3 6 12.7 5 14.6 5c3.1 0 4.4 3.1 2.9 6.2C19 15.65 12 20 12 20z" />
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
