"use client";
import { createContext, useState } from 'react';

const FlashCardContext = createContext();

const FlashCardContextProvider = ({ children }) => {
    const [flashCards, setFlashCards] = useState([]);
    const [collection, setCollection] = useState();
    
    const updateFlashCards = (flashCards) => {
        setFlashCards(flashCards);
    };

    const updateCollection = (collection) => {
        setCollection(collection);
    };

  return (
    <FlashCardContext.Provider value={{ flashCards, updateFlashCards, collection, updateCollection }}>
      {children}
    </FlashCardContext.Provider>
  );
};

export { FlashCardContext, FlashCardContextProvider };
