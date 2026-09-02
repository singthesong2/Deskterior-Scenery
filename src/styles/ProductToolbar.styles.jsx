import styled from "@emotion/styled";
import { SearchIcon } from "../components/icons/Icons";

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.secondText};
  flex-shrink: 0;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: ${({ theme }) => theme.borderWidth.default} solid
    ${({ theme }) => theme.colors.subtle};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  width: 280px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMain};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondText};
  }
`;

export const SortBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: ${({ theme }) => theme.borderWidth.default} solid
    ${({ theme }) => theme.colors.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
`;

export const SortLabel = styled.span`
  color: ${({ theme }) => theme.colors.secondText};
`;

export const SortMenu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 140px;
  background: ${({ theme }) => theme.colors.cards};
  border: ${({ theme }) => theme.borderWidth.default} solid
    ${({ theme }) => theme.colors.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.spacing["2xs"]};
  z-index: 10;
`;

export const SortMenuItem = styled.li`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textMain : theme.colors.secondText};
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fontWeight.semiBold : theme.fontWeight.regular};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.subtle : "transparent"};

  &:hover {
    background: ${({ theme }) => theme.colors.subtle};
  }
`;
