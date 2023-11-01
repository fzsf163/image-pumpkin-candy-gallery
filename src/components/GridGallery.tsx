import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { motion } from "framer-motion";
import "../App.css";
type Props = {
  imgs: string[];
};

export default function GridGallery({ imgs }: Props) {
  // data
  const [imgBag, setImgBag] = useState<string[]>(imgs);
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    console.log(oldIndex, newIndex);
    setImgBag((imgBag) => arrayMove(imgBag, oldIndex, newIndex));
    localStorage.setItem("items", JSON.stringify(imgBag));
  };

  useEffect(() => {
    const itemsbox = JSON.parse(localStorage.getItem("items") || "");
    if (itemsbox) {
      setImgBag(itemsbox);
    }
  }, []);
  return (
    <SortableList
      onSortEnd={onSortEnd}
      className="transition-all duration-500 ease-in-out"
      draggedItemClassName="select-none pointer-events-none"
    >
      <div className=" grid grid-cols-5 justify-items-center items-center w-fit max-w-[80%] mx-auto border p-5 gap-4 ">
        {imgBag.map((img, index) => {
          return (
            <SortableItem key={index}>
              <div
                key={index}
                className="w-[15dvw] rounded-md first:row-span-2 first:col-span-2 first:w-full first:h-full cursor-move"
              >
                <motion.img
                  initial={{
                    opacity: 1,
                  }}
                  whileHover={{
                    opacity: 0.7,
                    scale:0.96
                  }}
                  layoutId={img}
                  id="imgContainer"
                  src={img}
                  alt={img}
                  className="rounded-md object-cover bg-white"
                ></motion.img>
              </div>
            </SortableItem>
          );
        })}
        <div>
          <input type="file" name="inputfile" id="inFile" />
        </div>
      </div>
    </SortableList>
  );
}
