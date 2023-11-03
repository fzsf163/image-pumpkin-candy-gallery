import { create } from "zustand";
import { devtools } from "zustand/middleware";

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

// type HoverStat = {
//   hovered: boolean;
//   changeHovered: (from: boolean) => void;
// };

// export const useHover = create<HoverStat>()(
//   devtools((set) => ({
//     hovered: false,
//     changeHovered(from) {
//       set((state) => ({ hovered: state.hovered === from }));
//     },
//   }))
// );
