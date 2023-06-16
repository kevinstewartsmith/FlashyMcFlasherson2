"use client"
import React, {useState, useEffect, useContext} from "react";
import CollectionParent from "@components/CollectionParent";
import CreateCollection from "@components/CreateCollection";
import Grid from "@mui/material/Grid";
import Note from "../components/note";
import Form from "@components/Form";
import CollectionFeed from "@components/CollectionFeed";
import { ContextProvider, CollectionContext } from "@components/CollectionContext";

function CollectionUI (props) {
    //const navigate = useNavigate();
    const [collectionArray,setCollectionItems] = useState([]);
    const [selectedCollection,setSelectedCollection] = useState(false);
    const [collectionCount,setCollectionCount] = useState(0);
    const [clickCount,setClickCount] = useState(0);
    

    
    function collectionChanged(){
        setCollectionCount(collectionCount + 1)
    }



   

    //Use context code - END

    return (
        <ContextProvider >
            {/* <div>
                <CreateCollection
                    onAdd={collectionChanged}
                    inputType={"collection"}
                    topPlaceholder={"Add Collection"}
                    bottomPlaceholder={"Description (optional)"}
                    topName={"title"}
                    bottomName={"content"}
                    selectedCollection={selectedCollection}
                    //selectedCollection={props.selectedCollection} 
                    collectionChanged={collectionChanged}
                />
                <CollectionFeed clickCount={clickCount} />
            </div> */}
            <CollectionParent />
        </ContextProvider>
    )
}

export default CollectionUI;