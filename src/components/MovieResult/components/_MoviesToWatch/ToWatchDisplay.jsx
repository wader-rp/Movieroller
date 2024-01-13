import "./toWatch.css";
import { MoviesToWatch } from "./MoviesToWatch";

export const ToWatchDisplay = ({
  expanded,
  triggerExpand,
  setActiveData,
  updateCrewAndCast,
}) => (
  <div className={expanded ? "grey-bg" : "hidden"}>
    <div className={expanded ? "to-watch" : "to-watch-hidden"}>
      <MoviesToWatch
        expanded={expanded}
        triggerExpand={triggerExpand}
        setActiveData={setActiveData}
        updateCrewAndCast={updateCrewAndCast}
      />
    </div>
  </div>
);
