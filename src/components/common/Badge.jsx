import { StyledBadge } from "../../styles/Badge.styles";

const Badge = ({ text, top, left }) => {
  return (
    <StyledBadge top={top} left={left}>
      {text}
    </StyledBadge>
  );
};

export default Badge;
