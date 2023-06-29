import React, { useEffect, useState } from "react";
import { useSpring, a } from "@react-spring/web";
//import styles from "./styles.module.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { PropaneSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import "@styles/globals.css";
import { Textfit } from 'react-textfit';

export default function FlashCard(props) {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const headings = document.querySelectorAll('.card-text');

  function adjustFontSize() {
    headings.forEach((heading) => {
      const container = heading.parentElement;
      const containerHeight = container.clientHeight;
      const fontSize = parseInt(window.getComputedStyle(heading).fontSize);
  
      if (heading.scrollHeight > containerHeight) {
        heading.style.fontSize = `${fontSize - 1}px`;
      }
    });
  }
 
  window.addEventListener('load', adjustFontSize);
  window.addEventListener('resize', adjustFontSize);
  adjustFontSize();

  useEffect(() => {
    adjustFontSize();
  }, []);


  function deleteFlashCard() {
    console.log("FC UI Deleted card ID: " + props.id);
    const flashCard = props.id
    fetch("/deleteFlashCard", {     
        method: 'POST',
        body: JSON.stringify({"collectionID": props.collectionID, "flashCardID": props.id}),
        headers: {"Content-Type": "application/json", 'Accept': 'application/json'}//{
    }).then(function(response){
    return response.json();
    }).then(function(response){
        console.log(response);
         
        props.onDelete()          
    }).catch(err => {
        console.log("Error Reading data " + err);
    });
    
}

  return (
    
      
        <div className="flash-card" onClick={() => set((state) => !state)}>
          {/* <div className="flash" > */}

            <a.div
              className="c front"
              style={{
                opacity,
                transform,
                rotateX: "180deg",
                borderRadius: 7
              }}
            >
              <div className="center-parent">
                {/* <h1 className="card-text">{props.front}</h1> */}
                <Textfit mode="multi" min={30} max={50}>
                  {props.front}
                </Textfit>
              </div>
            </a.div>
            <a.div
              className="c back"
              style={{
                opacity: opacity.to((o) => 1 - o),
                transform,
                borderRadius: 7
              }}
            >
              <div className="center-parent">

                {/* <h1 className="card-text">{props.back}</h1> */}
                <Textfit mode="multi" min={30} max={50}>
                  {props.back}
                </Textfit>
                {/* <h1>{props.collectionID}</h1> */}
              </div>
            </a.div>
          {/* </div> */}
          <DeleteOutlinedIcon className="delete-button" onClick={deleteFlashCard}/>  
        </div>  
      
    
  );
}