import { motion } from "framer-motion";
import { useCheckBox, useImgList } from "../Store";
import { useState } from "react";

type Props = {
  img: string;
};

export default function ImgBox({ img }: Props) {
  const { checked, changeChecked } = useCheckBox();
  const addToList = useImgList((state) => state.addCheckedList);
  const dltFromList = useImgList((state) => state.dltFromCheckList);
  const { checkedList } = useImgList();

  // if we use useState hook it is very easy to control the hover state.
  const [isHover, setHover] = useState(false);
  // check image existence
  const seeExist = checkedList.includes(img);
  // adjust list
  const adjustList = (img: string) => {
    seeExist ? dltFromList(img) : addToList(img);
  };
  return (
    <div className="relative overflow-hidden rounded-lg">
      <motion.img
        onTap={() => {
          changeChecked(checked);
          adjustList(img);
        }}
        whileTap={{
          scale: 0.8,
        }}
        initial={{
          opacity: 1,
          scale: 1,
        }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{
          opacity: 0.7,
          scale: 1.1,
        }}
        layoutId={img}
        id="imgContainer"
        src={img}
        alt={img}
        className="rounded-md object-cover bg-white h-full w-full"
      ></motion.img>
      <motion.span
        className=" absolute -top-2 -left-3 sm:top-0 sm:left-0 m-4 first:m-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isHover || seeExist ? 1 : 0,
        }}
      >
        <input
          checked={seeExist ? true : false}
          readOnly
          type="checkbox"
          name="imgChk"
          id="imgChk"
          className="peer appearance-none shrink-0 w-4 h-4 md:w-6 md:h-6 border-2 rounded-full  border-blue-900  bg-white
          focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
          checked:bg-bg-color checked:border-2
          disabled:border-steel-400 disabled:bg-steel-400"
        />
      </motion.span>
    </div>
  );
}
