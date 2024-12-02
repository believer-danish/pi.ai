import { useLocation } from "react-router";
import messageImg from "../assets/message.svg";
import { cardsData } from "../utils/data";
import Card from "../components/Card";
import { useContext } from "react";
import MyContext from "../utils/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonComp from "../components/ButtonComp";

const Cards = () => {
  let skip = 2;
  const userName = useLocation().state.userName;
  const { fetchAnswer, setIsOpen } = useContext(MyContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.id;
    const query =
      "You have to answer the query with emotes and your creativiy.Break Answer in paragraphs or bullet points." +
      "Answer should be  at most 150 words " +
      "The query is :" +
      id +
      " Find infomation about this query";

    fetchAnswer(query, id);
  };

  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full relative  bg-[rgb(247_239_227)] p-5 pt-16 text-[rgb(13_60_38)] [font-family:alpina] ">
      <div onClick={handleSidebar} className="ab solutetop-5 left-8 lg:hidden ">
        <ButtonComp
          img={<FontAwesomeIcon icon={faXmark} />}
          height="h-4"
          width="w-4"
          background="bg-[rgb(237_225_209)]"
          padding="p-5"
        />
      </div>
      <div>
        <h1 className=" text-4xl pt-3">
          Good afternoon,<span className="capitalize ">{userName}</span>
        </h1>
      </div>

      <div
        className="flex gap-4 p-4 my-5 bg-[rgb(250_243_234)] rounded-2xl 
      shadow-[0px_12px_32px_-6px_#e4dbc8_,0px_2px_16px_-6px_#0000001a]
       transition-all cursor-pointer hover:bg-[rgb(247_239_227)]"
      >
        <div className="w-14 h-14 ">
          <img src={messageImg} alt="vector image" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-4xl">Download your Pi conversation history</h1>
          <p className="[font-family:Roboto] text-xs text-green-500">
            Manage history
          </p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {cardsData.map((e, i) => {
          let x = i;
          if (!skip--) {
            x = i + 2;
            skip = 3;
          }

          return (
            <div
              style={{ "--grid-order": x }}
              key={i}
              className={`h-[330px]    rounded-2xl overflow-hidden 
                cursor-pointer bg-[hsl(37_42%_89%)]
                relative md:max-lg:order-my
                
                `}
            >
              {i % 2 == 0 ? (
                <div
                  className={`w-full h-full flex gap-4  ${
                    i % 4 == 0 ? "flex-col" : "flex-col-reverse"
                  }`}
                >
                  <div className="h-1/2  flex gap-4 ">
                    <div className="flex-1  rounded-2xl ">
                      <Card
                        handleClick={handleClick}
                        image={e.bg11}
                        text={e.text11}
                        fontSize={"text-xl"}
                        id={e.text11}
                      />
                    </div>
                    <div className="flex-1  rounded-2xl">
                      <Card
                        handleClick={handleClick}
                        image={e.bg12}
                        text={e.text12}
                        fontSize={"text-xl"}
                        id={e.text12}
                      />
                    </div>
                  </div>

                  <div
                    id={e.septext}
                    onClick={handleClick}
                    className="h-1/2  flex items-end justify-center  gap-4  p-2 rounded-2xl  bg-[rgb(250_243_234)]   hover:scale-95 transition-all"
                  >
                    <div className="flex-1 ">{e.septext}</div>
                    <div className="flex-1  h-full rounded-2xl overflow-hidden ">
                      <Card
                        handleClick={handleClick}
                        image={e.bg13}
                        fontSize={"text-xl"}
                        id={e.septext}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Card
                  handleClick={handleClick}
                  image={e.bg}
                  text={e.text}
                  id={e.text}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
