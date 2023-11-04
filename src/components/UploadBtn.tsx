import { useAddToGalleryTemp } from "../Store";

export default function UploadBtn() {
  const { addImgToGal } = useAddToGalleryTemp();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files = e.target.files;
      const objUrl = Array.from(files);
      const getALLData = objUrl.map((img) => {
        return URL.createObjectURL(img);
      });
      addImgToGal(getALLData);
      console.log(getALLData);
    }
  }

  return (
    <div className="w-fit flex flex-grow  items-center justify-center bg-grey-lighter">
      <label className="w-fit h-auto flex flex-col items-center justify-center p-3 md:p-7 bg-white/30 text-blue rounded-lg shadow-lg tracking-wide capitalize  cursor-pointer hover:bg-blue hover:text-white">
        <svg
          className="w-8 h-8"
          fill="wheat"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-slate-400  text-[10px] sm:text-[16px] md:text-xl xl:text-2xl">
          Add image
        </span>
        <input
          type="file"
          accept=".jpeg,.png,.svg"
          className="hidden"
          onChange={handleChange}
          multiple
        />
      </label>
    </div>
  );
}
