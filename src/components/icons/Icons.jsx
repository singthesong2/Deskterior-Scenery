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
