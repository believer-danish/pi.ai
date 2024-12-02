import { useContext, useEffect, useRef, useState } from "react";
import InputComponent from "../components/InputComponent";

import { useLocation } from "react-router";
import MyContext from "../utils/MyContext";

const ChatSection = () => {
  const div = useRef(null);
  const [text, setText] = useState("");

  const { setChats, chats, fetchAnswer } = useContext(MyContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const query =
        "You have to answer the query with emotes and your creativiy.Break Answer in paragraphs or bullet points." +
        "Answer should be  at most 150 words " +
        "The query is :" +
        text +
        " Find infomation about this query";
      setText("");
      fetchAnswer(query, text);
    }
  };

  useEffect(() => {
    div.current.scrollTop = div.current.scrollHeight;
  }, [chats]);
  return (
    <section className=" flex justify-between    items-center  flex-col pb-8 gap-16   px-6    h-screen">
      {/* Messages */}
      <section
        ref={div}
        className="  w-full  overflow-y-scroll [scrollbar-width:none]  "
      >
        <div
          className="flex  mx-auto  justify-center  items-center flex-col   
          gap-12 w-full max-w-3xl  [font-family:alpina] text-[rgb(13_60_38)] lg:text-2xl text-xl"
        >
          {chats.map((chat, i) => (
            <div
              key={i}
              className={`  message  flex    flex-col  ${
                i === chats.length - 1 && " h-[80vh] pt-32  "
              }  `}
            >
              <h1
                key={i}
                className={`text-end  bg-[rgb(245_234_220)] w-max max-w-[80%] ml-auto   mb-6 rounded-lg  ${
                  chat.question && "px-2 py-3"
                } `}
              >
                {chat.question}
              </h1>
              <div className="whitespace-pre-line   font-extralight">
                {chat.answers}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Input */}
      <div className={`w-full max-w-3xl`}>
        <InputComponent
          handleSubmit={handleSubmit}
          text={text}
          handleChange={handleChange}
          placeholder={"Talk with Pi"}
          placeholderSize={"placeholder:text-[1.375rem]"}
          fontFamily={"[font-family:alpina]"}
        />
        <p className="text-center py-4 text-xs cursor-pointer">
          By using Pi, you agree to our{" "}
          <span className="text-green-500 cursor-pointer">Terms</span> and
          <span className="text-green-500 cursor-pointer">Privacy Policy.</span>
        </p>
      </div>
    </section>
  );
};

export default ChatSection;
