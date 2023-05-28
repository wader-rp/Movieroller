import disneyplusIcon from "../components/MovieResult/components/Streamings/streamingsIcons/disneyPlus-icon.png";
import primeIcon from "../components/MovieResult/components/Streamings/streamingsIcons/primeVideo-icon.png";
import appleIcon from "../components/MovieResult/components/Streamings/streamingsIcons/apple-icon.png";
import netflixIcon from "../components/MovieResult/components/Streamings/streamingsIcons/netflix-icon.png";
import hbomaxIcon from "../components/MovieResult/components/Streamings/streamingsIcons/hboMax-icon.png";
import errorIcon from "../components/MovieResult/components/Streamings/streamingsIcons/error.png";

export const getIcon = (streamingName) => {
  switch (streamingName) {
    case "netflix":
      return netflixIcon;
    case "hbo":
      return hbomaxIcon;
    case "prime":
      return primeIcon;
    case "disney":
      return disneyplusIcon;
    case "apple":
      return appleIcon;
    default:
      return errorIcon;
  }
};
