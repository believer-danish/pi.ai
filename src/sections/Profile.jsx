import {
  faAngleRight,
  faArrowLeft,
  faGear,
  faShare,
  faSmile,
  faUser,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
import ButtonComp from "../components/ButtonComp";
import { useContext } from "react";
import MyContext from "../utils/MyContext";

const Profile = () => {
  const userName = useLocation().state.userName;
  const { setIsOpen } = useContext(MyContext);
  const data = [
    { title: "Account", img: faUser },
    {
      title: "Manage History",
      img: faGear,
    },
    {
      title: "Voice Settings",
      img: faVoicemail,
    },
    {
      title: "Give Feedback",
      img: faSmile,
    },
    {
      title: "Share Pi with other",
      img: faShare,
    },
  ];
  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="h-full w-full p-4 text-[rgb(13_60_38)] bg-[hsl(34_62%_95%)]  ">
      <div onClick={handleSidebar} className="ab solutetop-5 left-8 lg:hidden ">
        <ButtonComp
          img={<FontAwesomeIcon icon={faArrowLeft} />}
          height="h-4"
          width="w-4"
          background="bg-[rgb(237_225_209)]"
          padding="p-5"
        />
      </div>
      <h1 className="text-4xl [font-family:alpina] pb-5">{userName}</h1>
      <div className="text-lg   border-b-2 ">
        {data.map((e, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-2 py-4 hover:bg-[rgba(237,_225,_209_,0.6)] rounded-md cursor-pointer"
          >
            <h1 className="flex gap-4 justify-center items-center">
              <FontAwesomeIcon icon={e.img} />
              <span>{e.title}</span>
            </h1>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
