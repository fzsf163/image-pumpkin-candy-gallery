type Porps = {
  img: string;
};

export default function ImgBox({ ...props }: Porps) {
  return (
    <div>
      <img
        src={props.img}
        alt={props.img}
        className="w-[400px] h-[400px] rounded-md"
      ></img>
    </div>
  );
}
