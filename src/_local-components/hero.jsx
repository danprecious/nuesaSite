"use client";
import { useState, useEffect } from "react";
import CustomButton from "@/_local-components/button";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Innovation", "Creativity", "Ingenuity"];
  const [isDeleting, setIsDeleting] = useState(false);
  let currentWord;

  const type = () => {
    currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true, 500));
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 200 : 300);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

  return (
    <div className="mt-[1em] relative p-3 items-center flex flex-col">
      <h1 className="text-[2.7rem] md:text-[6rem] headers text-center">
        Creating a Culture of <br></br>
        <span className="typewriter typewriter-text">{text}</span>
      </h1>
      <p className="md:max-w-[50%] text-center mt-6">
        In a fast growing technological world, there's the need for a proper
        environment for enginneers in the making; we are that student body that
        help the student all-round.
      </p>
      <div className="p-5">
        <CustomButton text="Our Story" background="white" textColor="black" />
      </div>
    </div>
  );
};

export default Hero;
