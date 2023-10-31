type Porps = {
  img: string;
};

export default function ImgBox({ ...props }: Porps) {
  return (
    <div>
      <img
        src={props.img}
        alt={props.img}
        className="rounded-md object-cover bg-white"
      ></img>
    </div>
  );
}
