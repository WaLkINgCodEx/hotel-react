import DiningCards from "./DiningCards";
import { diningList } from "../../data";
import "./style/dining.css";

const DiningList = () => {
  return (
    <div className="dining-list-wrapper">
      <div className="dining-list-container">
        {diningList.map((dining) => {
          return <DiningCards dining={dining} />;
        })}
      </div>
    </div>
  );
};
export default DiningList;
