const Card = ({ image, text, fontSize, handleClick, id }) => {
  return (
    <div
      onClick={handleClick}
      id={id}
      className="w-full h-full relative overflow-hidden rounded-2xl hover:scale-95  transition-all"
    >
      <img src={image} alt="" className="w-full h-full" />
      <div className="absolute inset-0 z-10 text-3xl text-white  flex  justify-start items-end ">
        <h1
          className={`p-4 w-full bg-gradient-to-b from-transparent to-black ${fontSize}`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Card;
