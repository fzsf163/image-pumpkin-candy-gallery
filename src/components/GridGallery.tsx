import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import ImgBox from "./ImgBox";
import { motion } from "framer-motion";
import UploadBtn from "./UploadBtn";
import { useImgList } from "../Store";
import HeadBox from "./HeadBox";

export default function GridGallery() {
  // data
  const imges = useImgList((state) => state.imges);
  const setImages = useImgList((state) => state.setImages);
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    const newlist = arrayMove(imges, oldIndex, newIndex);
    setImages(newlist);
  };

  return (
    <motion.section layout className="relative">
      <HeadBox></HeadBox>
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
