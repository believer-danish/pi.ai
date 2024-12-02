import Cards from "./Cards";
import ChatSection from "./ChatSection";
import Profile from "./Profile";

const MainContainer = ({ isOpen, whichActive }) => {
  console.log(isOpen, whichActive);
  return (
    <div
      className={`lg:ml-[5.5rem]    bg-[hsl(34_62%_95%)] h-screen grid  gap-0 overflow-hidden ${
        isOpen
          ? "lg:grid-cols-[375px_1fr] grid-cols-[1fr_0px]"
          : "lg:grid-cols-[0px_1fr] grid-cols-[0px_1fr]"
      }`}
    >
      <div className="    overflow-scroll [scrollbar-width:none] realtive z-30">
        <div className="">
          {whichActive === "profile" ? <Profile /> : <Cards />}
        </div>
      </div>

      <div className="h-screen  ">
        <ChatSection isOpen={isOpen} />
      </div>
    </div>
  );
};

export default MainContainer;
