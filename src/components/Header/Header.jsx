import "./Header.css";

export const Header = ({ resetData }) => (
  <div className="header">
    <div className="header-title" onClick={resetData}>
      Movie Roller
    </div>
  </div>
);
