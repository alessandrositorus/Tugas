import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 15, color: "#fff" }}>Home</Link>
      <Link to="/about" style={{ marginRight: 15, color: "#fff" }}>Tentang FF</Link>
      <Link to="/contact" style={{ marginRight: 15, color: "#fff" }}>Kontak</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
