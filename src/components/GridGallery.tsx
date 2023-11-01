import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
type Props = {
  imgs: string[];
};

export default function GridGallery({ imgs }: Props) {
  // data
  const [imgBag, setImgBag] = useState(imgs);
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setImgBag((imgBag) => arrayMove(imgBag, oldIndex, newIndex));
  };
  return (
    <SortableList
      onSortEnd={onSortEnd}
      draggedItemClassName="select-none pointer-events-none"
    >
      <div className=" grid grid-cols-5 justify-items-center items-center w-fit max-w-[80%] mx-auto border p-5 gap-4 ">
        {imgBag.map((img) => {
          return (
            <SortableItem key={img}>
              <div
                key={img}
                className="w-[15dvw] rounded-md first:row-span-2 first:col-span-2 first:w-full first:h-full"
              >
                <img
                  id="imgContainer"
                  src={img}
                  alt={img}
                  className="rounded-md object-cover bg-white"
                ></img>
              </div>
            </SortableItem>
          );
        })}
      </div>
    </SortableList>
  );
}
function arrayMoveImmutable(array: any, oldIndex: number, newIndex: number) {
  throw new Error("Function not implemented.");
}
