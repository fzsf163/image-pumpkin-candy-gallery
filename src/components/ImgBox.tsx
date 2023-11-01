import { motion } from "framer-motion";
import { useState } from "react";
type Props = {
  img: string;
};
export default function ImgBox({ img }: Props) {
  const [check, setCheck] = useState(false);
  const [isHover, setHover] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-lg">
      <motion.img
        onTap={() => setCheck(!check)}
        whileTap={{
          scale: 0.8,
        }}
        initial={{
          opacity: 1,
          scale:1
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
          opacity: isHover || check ? 1 : 0,
        }}
      >
        <input
          checked={check}
          value={check ? 1 : 0}
          onChange={() => setCheck(!check)}
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
