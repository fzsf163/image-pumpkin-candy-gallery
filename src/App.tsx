import { Reorder, useDragControls } from "framer-motion";
import "./App.css";
import { imgList } from "./assets";
import { useRef, useState } from "react";
import ImgBox from "./components/ImageContainer";
function App() {
  let imglist = [...imgList];
  const [items, setItems] = useState(imglist);
  const controls = useDragControls();
  const constraintsRef = useRef(null)

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
        className="grid grid-cols-5 justify-items-center items-center w-[80%] mx-auto border border-border-color rounded-md p-3 gap-5"
        ref={constraintsRef}
      >
        {items.map((item) => {
          return (
            <Reorder.Item
              value={item}
              key={item}
              drag
              dragControls={controls}
              dragElastic={0}
              className="relative w-[30dvh] h-fit first:col-span-2 first:row-span-2 first:w-full "
              dragSnapToOrigin={true}
              dragConstraints={constraintsRef}
            >
              <ImgBox key={item} img={item}></ImgBox>
              <span
                className="cursor-move select-none text-black p-6 bg-transparent absolute top-0 left-0 w-full h-full"
                onPointerDown={(e) => controls.start(e)}
                style={{ touchAction: "none" }}
              ></span>
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
