import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComp from "./ButtonComp";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({
  handleSubmit,
  text,
  handleChange,
  placeholder,
  fontFamily,
  placeholderSize,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" border py-3 px-4 bg-white overflow-hidden transition-all rounded-[30px]  flex hover:shadow-none  shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a]"
    >
      <input
        autoFocus="on"
        onChange={handleChange}
        value={text}
        type="text"
        placeholder={placeholder}
        className={`${placeholderSize}  ${fontFamily} border-none outline-none text-[1.1rem] w-full resize-none [letter-spacing:normal]`}
      />
      <div
        className={` flex-1 rounded-full grid place-items-center  ${
          text ? "bg-green-700 text-white" : "bg-[hsl(34_62%_95%)]"
        }  text-[rgb(194_179_159)]`}
      >
        <ButtonComp
          img={<FontAwesomeIcon icon={faArrowUp} />}
          height="h-4"
          width="w-4"
          padding="p-5"
        />
      </div>
    </form>
  );
};

export default InputComponent;
