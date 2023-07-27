"use client";
import Deck from "./Deck"
import React, { useState, useEffect, useContext } from "react";
import BackButton from "@components/Buttons/BackButton";
import { FlashCardContext } from "@components/Contexts/FlashCardContext";
import { useRouter } from "next/navigation";
import '@styles/globals.css'
const DeskParent = () => {
    const { flashCards, collection } = useContext(FlashCardContext)
    console.log("DESK FLASHCARDS");
    console.log(flashCards);

    const [practiceFlashCards, setPracticeFlashCards] = useState(flashCards)
    const [practiceCollection, setPracticeCollection] = useState(collection)
    console.log("practice collection");
    console.log(practiceCollection);
    const router = useRouter();
    // const handleClick = async (event) => {
    //     event.preventDefault();
    //     updateCollection(props.id)
    //     router.push(`/collections/${props.id}`);
    //   }
    //console.log("collection DESK:" + collection);
    const navigateToCollection = () => {
        router.push(`/collections/${practiceCollection._id}`)
    }

    return (
        <div >
            <div className="sub-header">
                
                <div >
                    <BackButton style={{display: "inline"}} onClick={navigateToCollection}/>
                    <h1 style={{display: "inline"}}>{practiceCollection._id}</h1>
                    <h1 style={{display: "inline"}}>{practiceCollection.name}</h1>
                    <h2 style={{display: "inline"}}>{practiceCollection.description}</h2>
                </div>
                
            </div>
 
            <div className="desk-parent">   
                <div className="desk"> 
                    <div className="deck-container">
                        <Deck
                            flashCards={practiceFlashCards}
                        />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DeskParent
