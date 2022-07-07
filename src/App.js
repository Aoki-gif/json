import { Children, useState, useEffect } from "react";
import Data2 from "./json/test2.json";
import { useWindowSize } from "react-use";
import "./styles.css";

export default function App() {
  //const [count, setCount] = useState(0);
  const { width, height } = useWindowSize();
  const childrenItems = Data2;
  const metaData = childrenItems[0];
  console.log(width);
  console.log(height);
  // console.log(metaData);

  return (
    // <div className="App" style={mainStyle}>
    childrenItems.map((object, index) => {
      let ItemsStyleInf;
      if (index === 0) {
        ItemsStyleInf = {
          height: object.height,
          width: object.width,
          position: "relative"
        };
      } else {
        ItemsStyleInf = {
          x: (object.x / metaData.width) * width,
          y: (object.y / metaData.height) * height,
          height: (object.height / metaData.height) * height,
          width: (object.width / metaData.width) * width,
          position: "absolute",
          top: (object.y / metaData.height) * height,
          left: (object.x / metaData.width) * width
        };
      }
      //console.log(ItemsStyleInf);
      //console.log(object.text);
      return (
        <div style={ItemsStyleInf} class={object.object_type}>
          {object.text ? <p>{object.text}</p> : undefined}
        </div>
      );
    })
  );
}
