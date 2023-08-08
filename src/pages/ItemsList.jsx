import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/Data";
import LinearGrid from "../components/LinearGrid";

const ItemsList = () => {
  const { category } = useParams();

  const [] = useState()

  return (
    <div>
      {Data.map((item, index) => {
        return Object.entries(item[category]).map(mess => {
            return <LinearGrid key={index} header={mess[0]} items={mess[1]} />
        })
      })}
    </div>
  );
};

export default ItemsList;
