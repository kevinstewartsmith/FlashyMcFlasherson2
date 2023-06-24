import { createContext, useState } from 'react';

const FlashCardContext = createContext();

const FlashCardContextProvider = ({ children }) => {
    const [flashCards, setFlashCards] = useState([]);
    const [collection, setCollection] = useState();

    const updateFlashCards = (flashCards) => {
        setFlashCards(flashCards);
        console.log(flashCards);
    };

    const updateCollection = (collection) => {
        setCollection(collection);
        console.log(collection);
    };

  return (
    <FlashCardContext.Provider value={{ flashCards, updateFlashCards, collection, updateCollection }}>
      {children}
    </FlashCardContext.Provider>
  );
};

export { FlashCardContext, FlashCardContextProvider };
