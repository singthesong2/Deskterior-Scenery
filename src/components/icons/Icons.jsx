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
  <svg {...base} {...props}>
    <path d="M4 9h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 9z" />
    <path d="M8 9l2-5h4l2 5" />
  </svg>
);

export const LoginIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
    <path d="M10 17l5-5-5-5" />
    <line x1="15" y1="12" x2="3" y2="12" />
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
  <svg {...base} {...props}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="9 18 15 12 9 6" />
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
