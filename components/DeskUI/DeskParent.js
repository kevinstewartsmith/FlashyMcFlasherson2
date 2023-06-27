import Deck from "./Deck"
import React, { useState, useEffect, useContext } from "react";
import BackButton from "@components/Buttons/BackButton";
import { FlashCardContext } from "@components/Contexts/FlashCardContext";
import '@styles/globals.css'
const DeskParent = () => {
    const { flashCards, collection } = useContext(FlashCardContext)

    return (
        <div >
            <div>
                <BackButton style={{display: "inline"}} onClick={ () => {} }/>
                <div >
                    <h1 style={{display: "inline"}}>{collection.name}</h1>
                    <h2 style={{display: "inline"}}>{collection.description}</h2>
                </div>
                
            </div>
 
            <div className="desk-parent">   
                <div className="desk"> 
                    <div className="deck-container">
                        <Deck
                            flashCards={flashCards}
                        />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DeskParent
