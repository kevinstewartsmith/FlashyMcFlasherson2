import React, { useState, useContext } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Montserrat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { FlashCardContext } from "@components/Contexts/FlashCardContext";
import '@styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
})

function Note(props) {
  const router = useRouter()
  const { updateCollection } = useContext(FlashCardContext)
  console.log("Collection ID in the note component"); 
  console.log(props.id);
  const [mouseEntered, setMouseEntered] = useState(false);
  const [collectionID, setCollectionID] = useState(props.id);
  
  function handleMouse() {
    setMouseEntered(!mouseEntered);
  }

  const clickDelete = async (event) => {
    event.preventDefault();
    console.log("delete clicked");
    const deleteConfirmed = confirm("Are you sure you want to delete this collection?");


    if (deleteConfirmed) {
      //props.onCollectionDelete(collectionID);
      try{
        const response = await fetch(`/api/collection/delete/${props.id}`,{ method: "DELETE" })
        if (response.ok) {
          //router.push("/");
          props.onCollectionDelete(collectionID);
        }
      } catch (error) {
        console.log(error);
      } 
    }
  }
  const handleClick = async (event) => {
    event.preventDefault();
    updateCollection(props.id)
    router.push(`/collections/${props.id}`);
  }

  return (
    <div>
      <div
        className="note"
        //onClick={() => {`/collections/${props.id}`}}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        onClick={handleClick}
      >
      <div >
          <div className="note-div">
            <div className="center">
              <h1 className={montserrat.className}>{props.collectionName}</h1>
              <p>{mouseEntered ? props.description  : null}</p>
            </div> 
          </div>
      </div>
      </div>
 
      <div className="delete-button-container" onClick={clickDelete} styles={{ backgroundColor: "red", width:"100%", height:"%100" }}>
        <DeleteOutlinedIcon className="delete-button" />
      </div>
    </div>
  );
}

export default Note;
