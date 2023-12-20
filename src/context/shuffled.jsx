import { createContext, useState, useEffect } from "react";
import { Questions } from "../data/questions";
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const QuestionsContext = createContext({
  shuffled: [],
});

export const QuestionsProvider = ({ children }) => {
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    const handleQuestions = () => {
      const shuffledQuestions = shuffleArray([...Questions]);
      setShuffled(shuffledQuestions);
    };

    // Call handleQuestions only once when the component is mounted
    handleQuestions();
  }, []); // The empty dependency array ensures it runs only onc

  const value = {
    shuffled,
  };

  console.log(shuffled)

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};
