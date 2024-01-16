import "./MovieTitle.css";

export const MovieTitle = ({ activeData }) => (
  <div className="title-and-year">
    {`${activeData.title}\u00A0(${activeData.release_date.substring(0, 4)})`}
  </div>
);
