import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discoverImg from "../assets/discover.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ButtonComp from "./ButtonComp";

export const Sidebar = ({ setIsOpen, setWhichActive, whichActive }) => {
  console.log(whichActive);
  const handleClick = (e) => {
    setIsOpen((prev) => !prev);
    if (e.currentTarget.id === "discover") setWhichActive("discover");
    else if (e.currentTarget.id === "profile") setWhichActive("profile");
  };
  return (
    <aside
      className={`bg-[hsl(34_62%_95%)] px-4 max-lg:w-full max-lg:h-max 
         border border-l-gray-400 h-screen fixed  w-[5.5rem] top-0 left-0 
           max-lg:border-0`}
    >
      <div className="w-full flex  max-lg:flex-row max-lg:justify-between flex-col justify-center items-center lg:pt-5  text-center gap-4 text-[rgb(107_98_85)]">
        <div
          id="discover"
          onClick={handleClick}
          className={`hover:bg-[rgba(237,_225,_209_,0.6)] rounded-xl p-1  cursor-pointer
            ${whichActive === "discover" && "bg-[rgba(237,_225,_209_,1)]"}`}
        >
          <img
            src={discoverImg}
            alt="discover"
            className="w-6 h-6 block m-auto  "
          />
          <h1 className=" text-xs lg:text-sm">Discover</h1>
        </div>
        <div
          id="profile"
          onClick={handleClick}
          className={`hover:bg-[rgba(237,_225,_209_,0.6)] flex justify-center items-center flex-col rounded-xl p-1 cursor-pointer  ${
            whichActive === "profile" && "bg-[rgba(237,_225,_209_,1)]"
          }`}
        >
          <ButtonComp
            img={<FontAwesomeIcon icon={faUser} />}
            width="w-5"
            height="h-5"
            color="text-[rgb(107_98_85)]"
          />
          <h1 className="text-xs lg:text-sm">Profile</h1>
        </div>
      </div>
    </aside>
  );
};
