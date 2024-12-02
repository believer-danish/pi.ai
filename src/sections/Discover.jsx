import { Sidebar } from "../components/Sidebar";
import Header from "../sections/Header";
import MainContainer from "./MainContainer";
import { useEffect, useState } from "react";
import MyContext from "../utils/MyContext";
import { useLocation } from "react-router";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Discover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whichActive, setWhichActive] = useState("discover");
  const userName = useLocation().state.userName;
  const [chats, setChats] = useState([
    {
      question: undefined,
      answers: `Hey there, great to meet you. I’m Pi, your personal AI.
            My goal is to be useful, friendly and fun.
        Ask me for advice, for answers, or let’s talk about whatever’s on your mind.
        How's your day going?Ok ${userName}. What did you want to talk about?`,
    },
  ]);
  const fetchAnswer = async (query, text) => {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyC280OQ5Slm7GVIBpmQwxJoojhOtkY8K9c"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log(query);
    const result = await model.generateContent(query);
    console.log(result.response.text());
    setChats((prev) => [
      ...prev,
      { question: text, answers: result.response.text() },
    ]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chats"));
    if (data) setChats(data);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(chats);
    localStorage.setItem("chats", data);
  }, [chats]);

  const value = {
    fetchAnswer: fetchAnswer,
    setChats: setChats,
    chats: chats,
    setIsOpen: setIsOpen,
  };

  return (
    <section className="bg-[hsl(34_62%_95%)] ">
      <MyContext.Provider value={value}>
        <Header />
        <Sidebar
          setIsOpen={setIsOpen}
          setWhichActive={setWhichActive}
          whichActive={whichActive}
        />
        <MainContainer isOpen={isOpen} whichActive={whichActive} />
      </MyContext.Provider>
    </section>
  );
};

export default Discover;
