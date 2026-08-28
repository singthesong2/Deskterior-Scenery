import { SearchIcon, ChevronDownIcon } from "../icons/Icons";

const ProductToolbar = ({ search, onSearchChange, sortLabel = "이름순" }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          border: "1px solid #ddd9cf",
          borderRadius: 999,
          padding: "10px 16px",
          width: 280,
        }}
      >
        <SearchIcon style={{ color: "#a19d92", flexShrink: 0 }} />
        <input
          value={search}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="search..."
          style={{
            border: "none",
            outline: "none",
            fontSize: 14,
            width: "100%",
            background: "transparent",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          border: "1px solid #ddd9cf",
          borderRadius: 8,
          padding: "10px 16px",
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        <span style={{ color: "#a19d92" }}>정렬</span>
        <strong>{sortLabel}</strong>
        <ChevronDownIcon width={14} height={14} />
      </div>
    </div>
  );
};

export default ProductToolbar;
