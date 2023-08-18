import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/Data";
import LinearGrid from "../components/LinearGrid";
import Navigation from "../components/Navigation";
import NavigationBottom from "../components/NavigationBottom";

const ItemsList = () => {
  const { category } = useParams();
  const [triggerRefresh, setTriggerRefresh] = useState(0)

  // const [] = useState()


  return (
    <div>
      <Navigation />
      <NavigationBottom />
      {Data.map((item, index) => {
        return Object.entries(item[category]).map(mess => {
            return <LinearGrid setTriggerRefresh={setTriggerRefresh} key={index} header={mess[0]} items={mess[1]} />
        })
      })}
    </div>
  );
};

export default ItemsList;
