import { AnimatePresence, motion } from "framer-motion";
import { useImgList } from "../Store";
import DeleteSvG from "./Delete";
import ImagesIconSvG from "./ImagesIcon";

export default function HeadBox() {
  const markedListLength = useImgList((state) => state.checkedList);
  const dltFromGallery = useImgList((state) => state.dltFromGallery);
  return (
    <AnimatePresence>
      {markedListLength.length > 0 && (
        <motion.div
          key={"deleteDiv"}
          initial={{
            opacity: 0,
            translateY: -50,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            translateY: -50,
            transition: { duration: 0.5 },
          }}
          className=" rounded-lg w-fit mx-auto  flex   items-center justify-around gap-5 z-50"
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
          <span className="text-2xl lg:text-4xl font-bold font-mono select-none">
            {markedListLength.length}
          </span>
          <span>
            <ImagesIconSvG></ImagesIconSvG>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
