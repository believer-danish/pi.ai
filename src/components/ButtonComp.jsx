const ButtonComp = ({ img, height, width, background, padding, color }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full ${height} ${background} ${width} ${padding} ${color}`}
    >
      {img}
    </button>
  );
};

export default ButtonComp;
