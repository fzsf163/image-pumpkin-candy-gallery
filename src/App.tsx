import "./App.css";
import { imgList } from "./assets";
import GridGallery from "./components/GridGallery";

function App() {
  return (
    <section className="h-[100%] bg-bg-color text-text-color font-[system-ui]  text-center space-y-10 box-border">
      {/* title */}
      <h1 className="font-bold text-5xl py-5 border-b-2 border-border-color">
        Pumpkin Image Gallery
      </h1>
      {/* render images */}
      <section>
        <GridGallery imgs={imgList}></GridGallery>
      </section>
      {/* footer */}
      <footer className="border-t-2 p-6 border-border-color">
        &copy; FancyFinger
      </footer>
    </section>
  );
}

export default App;
