import { Reorder, useDragControls } from "framer-motion";
import "./App.css";
import { imgList } from "./assets";
import { useState } from "react";
import ImgBox from "./components/ImageContainer";
function App() {
  let imglist = [...imgList];
  const [items, setItems] = useState(imglist);
  const controls = useDragControls();

  return (
    <section className="h-[100%] bg-bg-color text-text-color font-[system-ui]  text-center space-y-10 box-border">
      {/* title */}
      <h1 className="font-bold text-5xl py-5 border-b-2 border-border-color">
        Pumpkin Image Gallery
      </h1>
      {/* render images */}
      <Reorder.Group
        values={items}
        onReorder={setItems}
        className="grid grid-cols-4 justify-items-center items-center w-fit mx-auto border border-border-color rounded-md p-3"
      >
        {items.map((item) => {
          return (
            <Reorder.Item
              value={item}
              key={item}
              drag
              dragControls={controls}
              dragElastic={0.2}
              className="relative w-[30dvh] h-fit first:w-[40dvh] m-3"
              dragSnapToOrigin
            >
              <ImgBox key={item} img={item}></ImgBox>
              <span
                className="cursor-move select-none text-black p-6 bg-transparent absolute top-0 left-0 w-full h-full"
                onPointerDown={(e) => controls.start(e)}
              >
                Drag
              </span>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>

      {/* footer */}
      <footer className="border-t-2 p-6 border-border-color">
        &copy; FancyFinger
      </footer>
    </section>
  );
}

export default App;
