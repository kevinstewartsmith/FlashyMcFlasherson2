import React, { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Zoom from "@mui/material/Zoom";
import '@styles/globals.css'
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
})

function Note(props) {
  console.log("Collection ID in the note component"); 
  console.log(props.id);

  // const collectionData = {
  //   id: props.id,
  //   name: props.collectionName,
  //   description: props.description
  // }

  const router = useRouter()

  const [mouseEntered, setMouseEntered] = useState(false);
  function handleMouse() {
    setMouseEntered(!mouseEntered);
  }

  const clickDelete = async (event) => {

    event.preventDefault();
   
    console.log("delete clicked");
    
    try{

      const response = await fetch(`/api/collection/delete/${props.id}`,{ method: "DELETE" })

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }


  return (
    <div>
      <div
        className="note"
        //onClick={() => {`/collections/${props.id}`}}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
       <Link href={`/collections/${props.id}`}>
        <div className="note-div">
          <div className="center">
            <h1 className={montserrat.className}>{props.collectionName}</h1>
            <p>{mouseEntered ? props.description  : null}</p>
            
          </div> 
        </div>
        </Link> 
      </div>
      {/* </Link> */}
      
      <div className="delete-button-container" onClick={clickDelete}>
        {/* <button className="delete-button" onClick={clickDelete}> <DeleteOutlinedIcon /></button> */}
        
        <DeleteOutlinedIcon className="delete-button" />
      
      </div>
    
    </div>
  );
}

export default Note;
