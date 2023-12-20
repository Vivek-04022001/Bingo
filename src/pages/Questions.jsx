import React, { useContext, useState } from "react";
import { QuestionsContext } from "../context/shuffled";
const Questions = () => {
  const { shuffled } = useContext(QuestionsContext);
  return (
    <section>
      <div className="Container border border-white my-6 rounded-lg bg-white">
        <div className=" flex flex-col gap-y-8 p-4 text-2xl font-bowby">
          {shuffled.map((ques, index) => (
            <div
              key={ques.id}
              className="grid grid-cols-2 "
            >
              <div className="px-4 py-2">
                <h2>
                  <span className="px-4 text-white bg-primary  ">
                    {index + 1}
                  </span>{" "}
                  {ques.question_english}
                </h2>
                <h2>{ques.question_hindi}</h2>
              </div>
              <div className="px-4 py-2 rounded-xl font-extrabold bg-primary text-white">
                <h2>{ques.answer_english}</h2>
                <h2>{ques.answer_hindi}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
