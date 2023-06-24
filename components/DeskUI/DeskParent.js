import Deck from "./Deck"
import React, { useState, useEffect, useContext } from "react";
import BackButton from "@components/Buttons/BackButton";
import { FlashCardContext } from "@components/Contexts/FlashCardContext";

const DeskParent = (props) => {
    const { flashCards, test} = useContext(FlashCardContext)
    //const navigate = useNavigate();
   //const { collectionName } = props
    //const location = useLocation()
    //const flashCards = location.state.flashCards
    //const name = location.state.collectionName
    console.log("Flashcards in DeskParent");
    console.log(flashCards);
    console.log(test);


    return (
        <div>
        <BackButton onClick={ () => {} }/>
           
            <div className="desk"> 
                <div className="deck-container">
                    <Deck
                        flashCards={flashCards}
                        //collectionName={collectionName}
                    />
                </div>
            </div>
    </div>
    )
}

export default DeskParent
