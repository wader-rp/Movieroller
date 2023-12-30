import "../components/styles.css";

const NavBar = ({ resetData }) => (
  <div className="navbar">
    <div className="navbar-title" onClick={resetData}>
      Movie Roller
    </div>
  </div>
);

export default NavBar;
