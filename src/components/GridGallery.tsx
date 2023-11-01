import { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import "../App.css";
import ImgBox from "./ImgBox";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  imgs: string[];
};

export default function GridGallery({ imgs }: Props) {
  // data
  const [imgBag, setImgBag] = useState<string[]>(imgs);
  const [chkedList, setChkedList] = useState<string[]>([]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
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
    <motion.section layout className="relative pt-10">
      <AnimatePresence>
        {chkedList.length > 0 && (
          <motion.p
            key={"deleteDiv"}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className=" absolute right-[10dvw] -top-3 border border-border-color px-3 py-2 rounded-lg w-fit mx-auto mb-5 "
          >
            Delete {chkedList.length} items
          </motion.p>
        )}
      </AnimatePresence>
      <SortableList
        onSortEnd={onSortEnd}
        draggedItemClassName="select-none pointer-events-none"
        dropTarget={
          <div className="w-full  rounded-lg border border-dashed border-border-color text-option-color h-full text-4xl mx-auto">
            <h1 className="mt-[40%]"> Drop</h1>
          </div>
        }
      >
        <div className=" grid grid-cols-5 justify-items-center items-center w-fit max-w-[80%] mx-auto border border-border-color rounded-lg p-5 gap-4 ">
          {imgBag.map((img, index) => {
            return (
              <SortableItem key={index}>
                <div
                  key={index}
                  className="w-[15dvw] rounded-md first:row-span-2 first:col-span-2 first:w-full first:h-full cursor-move"
                >
                  <ImgBox
                    img={img}
                    setChkedList={setChkedList}
                    chkedList={chkedList}
                  ></ImgBox>
                </div>
              </SortableItem>
            );
          })}
          <div>
            <input type="file" name="inputfile" id="inFile" />
          </div>
        </div>
      </SortableList>
    </motion.section>
  );
}
