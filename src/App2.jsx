import { useState, useEffect } from "react";

const App2 = () => {
  const allAnswersArray = [
    "Samson, शिमशोन",
    "Fed, खिलाना",
    "Dove, कबूतर",
    "Genesis, उत्पत्ति",
    "Wine, शराब",
    "Commandments, आज्ञाएँ",
    "David, दाऊद",
    "Noah, नूह",
    "Jonah, योना",
    "Daniel, दानियेल",
    "Jordan, यर्दन",
    "Harp, वीणा",
    "Adam, आदम",
    "Eden, अदन",
    "Manna, मन्ना",
    "Solomon, सुलैमान",
  ];

  const [gridCombinations, setGridCombinations] = useState([]);

  // useEffect(() => {
  //   generateGridCombinations();
  // }, []);

  // const generateGridCombinations = () => {
  //   const shuffledAnswers = shuffleArray(allAnswersArray);
  //   console.log("shuffly-answers: ", shuffledAnswers);
  //   // const shuffledAnswers1 = shuffleArray(allAnswersArray);
  //   // const shuffledAnswers2 = shuffleArray(allAnswersArray);
  //   // const shuffledAnswers3 = shuffleArray(allAnswersArray);
  //   // console.log('comb1',shuffledAnswers1)
  //   // console.log('comb2',shuffledAnswers2)
  //   // console.log('comb3',shuffledAnswers3)

  //   const newGridCombinations = [];

  //   for (let i = 0; i < 30; i++) {
  //     const grid = [];

  //     for (let j = 0; j < 16; j++) {
  //       grid.push(shuffledAnswers.pop());
  //     }

  //     newGridCombinations.push(grid);
  //   }
  //   setGridCombinations(newGridCombinations);
  // };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const allCombinations = () => {
    const combinations = [];
    for (let i = 0; i < 40
      ; i++) {
      let values = shuffleArray(allAnswersArray);
      combinations.push(values);
    }
    console.log(combinations);
    return combinations;
  };

  const handleButton = () => {
    const freeze = allCombinations();
    setGridCombinations(freeze);
    const result = areArraysDifferent(gridCombinations);
    console.log(result)
  };

  function areArraysDifferent(arrays) {
    const numberOfArrays = arrays.length;
  
    for (let i = 0; i < numberOfArrays; i++) {
      for (let j = i + 1; j < numberOfArrays; j++) {
        if (arraysEqual(arrays[i], arrays[j])) {
          return false; // If any two arrays are equal, return false
        }
      }
    }
  
    return true; // All arrays are different
  }
  
  function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
 
return (
    <div className="min-h-screen min-w-screen px-10 py-4">
      <button onClick={handleButton}>Click</button>
    
      <div className="grid grid-cols-2 gap-3  border ">
        {gridCombinations.map((grid, rowIndex) => (
          <div>
            <h1 className="text-center font-bold text-2xl">
              Combination No.{rowIndex + 1}
            </h1>
            <div
              key={rowIndex}
              className="container max-w-5xl mx-auto grid grid-cols-4 text-center border-2 border-black"
            >
              {grid.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className="border-2 border-black p-5 space-y-4 flex items-center justify-center flex-col font-bold text-3xl"
                >
                  <span >{cell.split(",")[0]}</span>
                  <span>{cell.split(",")[1]}</span>
                </div>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App2;
