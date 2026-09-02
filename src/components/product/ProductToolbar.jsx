import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons/Icons";
import * as S from "../../styles/ProductToolbar.styles";

export const SORT_OPTIONS = [
  { value: "name", label: "이름순" },
  { value: "priceHigh", label: "가격높은순" },
  { value: "priceLow", label: "가격낮은순" },
  { value: "reviewCount", label: "리뷰많은순" },
];

const ProductToolbar = ({
  search,
  onSearchChange,
  sortBy = "name",
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortBoxRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (sortBoxRef.current && !sortBoxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const currentOption =
    SORT_OPTIONS.find((option) => option.value === sortBy) ?? SORT_OPTIONS[0];

  const handleSelect = (event, value) => {
    event.stopPropagation();
    onSortChange?.(value);
    setIsOpen(false);
  };

  return (
    <S.ToolbarWrapper>
      <S.SearchBox>
        <S.StyledSearchIcon />
        <S.SearchInput
          value={search}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="search..."
        />
      </S.SearchBox>

      <S.SortBox ref={sortBoxRef} onClick={() => setIsOpen((prev) => !prev)}>
        <S.SortLabel>정렬</S.SortLabel>
        <strong>{currentOption.label}</strong>
        <ChevronDownIcon width={14} height={14} />

        {isOpen && (
          <S.SortMenu>
            {SORT_OPTIONS.map((option) => (
              <S.SortMenuItem
                key={option.value}
                $active={option.value === sortBy}
                onClick={(event) => handleSelect(event, option.value)}
              >
                {option.label}
              </S.SortMenuItem>
            ))}
          </S.SortMenu>
        )}
      </S.SortBox>
    </S.ToolbarWrapper>
  );
};

export default ProductToolbar;
