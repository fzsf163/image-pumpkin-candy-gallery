import { motion } from "framer-motion";
import { useGalName } from "../Store";
import EditIconSvG from "./EditIcon";
import { useRef } from "react";

export default function GalleryName() {
  const { gName, editName } = useGalName();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="text-lg font-extrabold  outline-none caret-blue-100 flex items-center justify-center gap-2">
      <motion.input
        ref={ref}
        initial={{
          width: 150,
        }}
        whileFocus={{
          width: 300,
        }}
        type="text"
        onInput={(x) => editName(x.currentTarget.value)}
        className="bg-transparent  outline-none border-b border-border-color text-center pb-2"
        value={gName}
      />
      <span>
        <motion.button
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.1,
          }}
          className="p-2 border  rounded-lg border-gray-500"
          onClick={() => (ref.current ? ref.current.focus() : "")}
        >
          <EditIconSvG></EditIconSvG>
        </motion.button>
      </span>
    </div>
  );
}
