/**
 * 이미지가 없거나 로딩에 실패했을 때 자리를 채우는 박스.
 * label 을 주면 role="img" 로 스크린리더가 읽고, 없으면 장식용(aria-hidden).
 */
const SceneryBox = ({
  fontSize = 12,
  radius = 4,
  aspectRatio = "1 / 1",
  label,
}) => (
  <div
    role={label ? "img" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : "true"}
    style={{
      width: "100%",
      aspectRatio,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f2f2f2",
      color: "#8a8a8a",
      fontWeight: 700,
      letterSpacing: "0.15em",
      fontSize,
      borderRadius: radius,
    }}
  >
    SCENERY
  </div>
);

export default SceneryBox;
