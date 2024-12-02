import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import highFiveImg from "./../assets/high-five.svg";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";

import ButtonComp from "../components/ButtonComp";
import InputComponent from "../components/InputComponent";

const HomePage = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/discover", {
      state: {
        userName: text,
      },
    });
  };
  return (
    <section
      className="h-screen w-full p-6 text-[rgb(13_60_38)]
      bg-[hsl(34_62%_95%)] 
       flex items-center justify-start  flex-col pt-28 [font-family:alpina,serif] 
    "
    >
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <div className="flex gap-1 flex-col  text-[2.125rem] [letter-spacing:-.68px] leading-9">
          <div>
            <h1 className="flex ">
              Hello! I’m Pi.{" "}
              <span className=" w-10 h-10">
                <img
                  src={highFiveImg}
                  alt="high five"
                  className="w-full h-full"
                />
              </span>
            </h1>
            <h1>What’s your name?</h1>
          </div>
          <p className="text-[1rem] max-w-md [letter-spacing:-.16px] pt-3 [font-family:Roboto] [line-height:1.4] font-[400] text-[rgb(107_98_85)]">
            I take data privacy seriously. Our chats stay between us. We never
            share your data for ads or marketing.
          </p>
        </div>

        <InputComponent
          handleSubmit={handleSubmit}
          text={text}
          handleChange={handleChange}
          placeholder={"Your first name "}
        />
      </div>

      <div className="fixed top-8 left-8  -rotate-90  ">
        <ButtonComp
          img={<FontAwesomeIcon icon={faArrowUp} />}
          height="h-4"
          width="w-4"
          background="bg-[rgb(237_225_209)]"
          padding="p-5"
        />
      </div>
    </section>
  );
};

export default HomePage;
