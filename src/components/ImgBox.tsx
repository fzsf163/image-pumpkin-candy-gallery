import { motion } from "framer-motion";
import { useState } from "react";
type Props = {
  img: string;
};
export default function ImgBox({ img }: Props) {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <motion.img
        onTap={() => setCheck(!check)}
        initial={{
          opacity: 1,
        }}
        whileHover={{
          opacity: 0.7,
          scale: 0.96,
        }}
        layoutId={img}
        id="imgContainer"
        src={img}
        alt={img}
        className="rounded-md object-cover bg-white"
      ></motion.img>
      <motion.span>
        <input
          readOnly
          checked={check}
          value={check ? 1 : 0}
          type="checkbox"
          name="imgChk"
          id="imgChk"
        />
      </motion.span>
    </div>
  );
}
