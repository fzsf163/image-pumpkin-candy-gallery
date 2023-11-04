import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { imgList } from "./assets";

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
  dltFromGallery: () => void;
  setImages: (imgs: string[]) => void;
  addImgToGal: (img: string) => void;
};
export const useImgList = create<ImgListType>()(
  persist<ImgListType>(
    (set, get) => ({
      imges: imgList,
      checkedList: [],
      setImages(imgs: string[]) {
        set(() => ({ imges: [...imgs] }));
      },
      addImgToGal(img) {
        set(() => ({ imges: [...get().imges, img] }));
      },
      addCheckedList(img: string) {
        set((state) => ({
          checkedList: Array.from(new Set([...state.checkedList, img])),
        }));
      },
      dltFromCheckList(img: string) {
        set({
          checkedList: get().checkedList.filter((item: string) => item !== img),
        });
      },

      dltFromGallery() {
        const newlist = get().imges.filter(
          (itm) => !get().checkedList.includes(itm)
        );
        set(() => ({ imges: [...newlist], checkedList: [] }));
      },
    }),
    { name: "super-uniqe-name" }
  )
);

// get gallery name

type GalleryName = {
  gName: string;
  editName: (name: string) => void | undefined;
};
export const useGalName = create<GalleryName>()(
  persist<GalleryName>(
    (set) => ({
      gName: "Pumpkin Gallery",
      editName(name: string) {
        set(() => ({ gName: name }));
      },
    }),
    { name: "super-gal-name" }
  )
);
