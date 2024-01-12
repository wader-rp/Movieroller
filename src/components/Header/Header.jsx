import "./header.css";

const Header = ({ resetData }) => (
  <div className="header">
    <div className="header-title" onClick={resetData}>
      Movie Roller
    </div>
  </div>
);

export default Header;
