import { Children, useState, useEffect } from "react";
import { ChildArea } from "./ChildArea";
import Data from "./json/test.json";
import Data2 from "./json/test2.json";
import { useWindowSize } from "react-use";
import "./styles.css";

export default function App() {
  //const [count, setCount] = useState(0);
  const { width, height } = useWindowSize();

  const childrenItems = Data2;
  const mainStyle = {
    height: childrenItems[0].height,
    width: childrenItems[0].width,
    border: "solid",
    position: "relative"
  };

  const metaData = childrenItems[0];
  //console.log(childrenItems);
  // console.log(metaData);

  return (
    // <div className="App" style={mainStyle}>
    <>
      {childrenItems.map((object, index) => {
        const ItemsStyleInf = {
          x: (object.x / metaData.width) * width,
          y: (object.y / metaData.height) * height,
          height: object.height,
          width: object.width,
          border: "solid",
          position: "absolute"
        };
        console.log(ItemsStyleInf);
        index === 0
          ? (ItemsStyleInf.position = "relative")
          : (ItemsStyleInf.position = "absolute");
        return (
          <div style={ItemsStyleInf}>
            <p>{object.text}</p>
          </div>
        );
      })}
    </>
  );
}

//コンテナ作成
function ItemContainer({ Style, Text }) {
  console.log(Style);
  return (
    <div style={Style}>
      <p>{Text}</p>
    </div>
  );
}
