import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { DoubleRightOutlined } from "@ant-design/icons";

import "./ToggleToWatch.css";
import { toast } from "react-toastify";

export const ToggleToWatch = () => {
  const { toggleExpandedState } = useMovieResultContext();

  const handleToggleToWatchList = () => {
    const currentStorage = JSON.parse(localStorage.getItem("toWatch") ?? "[]");
    if (currentStorage.length !== 0) {
      toggleExpandedState(true);
      window.scrollTo({ top: 0 });
    } else {
      console.log(currentStorage);
      toast.info("Your to watch list is empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="toggle-to-watch" onClick={handleToggleToWatchList}>
      <div className="arrow-wrapper">
        <DoubleRightOutlined className="arrow" />
      </div>

      <span className="text">TO WATCH LIST</span>
    </div>
  );
};
