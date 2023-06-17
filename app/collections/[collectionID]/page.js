"use client"

import { useEffect, useState } from 'react';
import CreateFlashCard from '@components/CreateFlashCard';
import FlashCardFeed from '@components/FlashCardFeed';

export default function Collection({ params}) {
    const collectionID = params.collectionID
    const [collection, setCollection] = useState({});
    
    useEffect(() => {
        
        fetchCollections()
         
    },[]);

    const fetchCollections = async () => {
        //await fetch(`/api/prompt/${promptId}`)
        const res = await fetch(`/api/collection/gallery/${params.collectionID}`)
        const data = await res.json()
        console.log(data);
        
        setCollection(data)
        

    }
 
    return (
        <div>
         
            <h1>{params.collectionID}</h1>
            <h1>{collection.id}</h1> 
            <h1>{collection.name}</h1>
            <h1>{collection.description}</h1>
            <CreateFlashCard 
                collectionID={params.collectionID} 
                //onAdd={collectionChanged}
                inputType={"flashcard"}
                topPlaceholder={"Add Flashcard Front"}
                bottomPlaceholder={"Add Flashcard Back"}
                topName={"front"}
                bottomName={"back"}
                //selectedCollection={selectedCollection}
                //selectedCollection={props.selectedCollection} 
                //collectionChanged={collectionChanged}
            />
            <FlashCardFeed collectionID={params.collectionID} />

          
        </div>
    )
}