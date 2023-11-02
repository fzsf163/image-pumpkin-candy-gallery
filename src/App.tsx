import "./App.css";
import { imgList } from "./assets";
import GridGallery from "./components/GridGallery";

function App() {
  return (
    <section className="h-[100%] bg-bg-color text-text-color font-[system-ui]  text-center space-y-10 box-border">
      {/* title */}
      <h1 className="font-bold text-lg lg:text-5xl py-5 border-b-2 border-border-color bg-gradient-to-r from-blue-600 via-green-500  to-indigo-400 inline-block text-transparent bg-clip-text">
        Pumpkin Image Gallery
      </h1>
      {/* render images */}
      <section>
        <GridGallery imgs={imgList}></GridGallery>
      </section>
      {/* footer */}
      <footer className="border-t-2 p-6 border-border-color text-2xl bg-gradient-to-r from-blue-600 via-green-500  to-indigo-400 inline-block text-transparent bg-clip-text">
        &copy; FancyFinger
      </footer>
    </section>
  );
}

export default App;
