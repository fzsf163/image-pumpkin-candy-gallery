import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { imgList } from "./assets";
import { shallow } from "zustand/shallow";

// checkbox
type CheckBox = {
  checked: boolean;
  changeChecked: (from: boolean) => void;
};

export const useCheckBox = create<CheckBox>()(
  devtools((set) => ({
    checked: false,
    changeChecked(from) {
      set((state) => ({ checked: state.checked === !from }));
    },
  }))
);

// images actions
type ImgListType = {
  imges: string[];
  checkedList: string[];
  addCheckedList: (img: string) => void;
  dltFromCheckList: (img: string) => void;
  getCheckedList: () => void;
  dltFromGallery: () => void;
  setImages: (imgs: string[]) => void;
};
export const useImgList = create<ImgListType>()(
  persist(
    (set, get) => ({
      imges: imgList,
      checkedList: [],
      setImages(imgs) {
        set(() => ({ imges: [...imgs] }));
      },
      addCheckedList(img) {
        set((state) => ({
          checkedList: Array.from(new Set([...state.checkedList, img])),
        })),
          shallow;
      },
      dltFromCheckList(img) {
        set({
          checkedList: get().checkedList.filter((item) => item !== img),
        }),
          shallow;
      },
      getCheckedList: () => get().checkedList,
      dltFromGallery() {
        const newlist = get().imges.filter(
          (itm) => !get().checkedList.includes(itm)
        );
        set(() => ({ imges: [...newlist], checkedList: [] }));
      },
      shallow,
    }),
    { name: "data" }
  )
);
