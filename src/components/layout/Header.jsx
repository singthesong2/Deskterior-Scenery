import { BasketIcon, LoginIcon } from "../icons/Icons";

const navLinks = [
  "Lighting",
  "Organization",
  "Digital / Electronics",
  "Desk Accessories",
  "Stationery",
];

const Header = ({ activeLink = "Lighting" }) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 32px",
        borderBottom: "1px solid #ece9e2",
      }}
    >
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: 1,
        }}
      >
        SCENERY
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {navLinks.map((link) => (
          <span
            key={link}
            style={{
              fontSize: 14,
              cursor: "pointer",
              color: link === activeLink ? "#0d0c0a" : "#a19d92",
              fontWeight: link === activeLink ? 600 : 400,
            }}
          >
            {link}
          </span>
        ))}
      </nav>

      <div style={{ display: "flex", gap: 18, color: "#0d0c0a" }}>
        <BasketIcon style={{ cursor: "pointer" }} />
        <LoginIcon style={{ cursor: "pointer" }} />
      </div>
    </header>
  );
};

export default Header;
