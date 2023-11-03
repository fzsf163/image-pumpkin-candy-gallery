import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import "../App.css";
import ImgBox from "./ImgBox";
import { AnimatePresence, motion } from "framer-motion";
import DeleteSvG from "./Delete";
import ImagesIconSvG from "./ImagesIcon";
import UploadBtn from "./UploadBtn";
import { useImgList } from "../Store";

export default function GridGallery() {
  // data
  const imges = useImgList((state) => state.imges);
  const markedListLength = useImgList((state) => state.checkedList);
  const dltFromGallery = useImgList((state) => state.dltFromGallery);
  const setImages = useImgList((state) => state.setImages);
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    const newlist = arrayMove(imges, oldIndex, newIndex);
    setImages(newlist);
  };

  return (
    <motion.section layout className="relative">
      <AnimatePresence>
        {markedListLength.length > 0 && (
          <motion.div
            key={"deleteDiv"}
            initial={{
              opacity: 0,
              paddingTop: 0,
            }}
            animate={{
              opacity: 1,
              paddingTop: 40,
            }}
            exit={{
              opacity: 0,
              paddingTop: 0,
            }}
            className=" absolute left-1 sm:left-3 md:left-2 lg:-right-[84dvw]  -top-6 px-3 py-2 rounded-lg w-fit mx-auto mb-5  flex  flex-col items-center justify-around gap-5 z-50"
          >
            <motion.span
              onTap={dltFromGallery}
              initial={{
                scale: 1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="cursor-pointer"
            >
              <DeleteSvG></DeleteSvG>
            </motion.span>
            <span className="text-lg md:text-2xl lg:text-4xl font-bold font-mono select-none">
              {markedListLength.length}
            </span>
            <span>
              <ImagesIconSvG></ImagesIconSvG>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <SortableList
        onSortEnd={onSortEnd}
        draggedItemClassName="select-none pointer-events-none"
        dropTarget={
          <div className="w-full  rounded-lg border border-dashed border-border-color text-option-color h-full text-4xl mx-auto">
            <h1 className="mt-[40%]">Drop</h1>
          </div>
        }
      >
        <div className="max-h-screen bg-slate-600 overflow-x-hidden overflow-y-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center items-center w-fit max-w-[80%] mx-auto border border-border-color rounded-lg p-5 gap-4 ">
          {imges.map((img, index) => {
            return (
              <SortableItem key={index}>
                <div
                  key={index}
                  className="lg:w-[15dvw] rounded-md  first:row-span-2 first:col-span-2
                    first:w-3/4 md:first:w-5/6 lg:first:w-full lg:first:h-full cursor-move"
                >
                  <ImgBox img={img}></ImgBox>
                </div>
              </SortableItem>
            );
          })}

          <div>
            <UploadBtn></UploadBtn>
          </div>
        </div>
      </SortableList>
    </motion.section>
  );
}
