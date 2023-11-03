import { motion } from "framer-motion";
import { useCheckBox } from "../Store";
import { useState } from "react";

type Props = {
  img: string;
  setChkedList: React.Dispatch<React.SetStateAction<string[]>>;
  chkedList: string[];
};

export default function ImgBox({ img, setChkedList, chkedList }: Props) {
  const { checked, changeChecked } = useCheckBox();
  const [isHover, setHover] = useState(false);

  const addTheCheckList = (img: string) => {
    chkedList.push(img);
    const arrFiltered = Array.from(new Set(chkedList));
    setChkedList(arrFiltered);
  };
  const dltTheCheckList = (img: string) => {
    const refinedArr = chkedList.filter((item) => {
      return item !== img;
    });
    setChkedList(refinedArr);
  };

  const adjustList = (img: string) => {
    const seeExist = chkedList.includes(img);
    seeExist ? dltTheCheckList(img) : addTheCheckList(img);
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
        className="rounded-md object-cover bg-white"
      ></motion.img>
      <motion.span
        className=" absolute top-0 left-0 m-4 first:m-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isHover || chkedList.includes(img) ? 1 : 0,
        }}
      >
        <input
          checked={chkedList.includes(img) ? true : false}
          readOnly
          type="checkbox"
          name="imgChk"
          id="imgChk"
          className="peer appearance-none shrink-0 w-6 h-6 border-2 rounded-full  border-blue-900  bg-white
          focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
          checked:bg-bg-color checked:border-2
          disabled:border-steel-400 disabled:bg-steel-400"
        />
      </motion.span>
    </div>
  );
}
