"use client";
import React, { useState, useEffect } from "react";
import { useSpring, a,  } from "@react-spring/web";
//import { Textfit } from 'react-textfit';
import "@styles/globals.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { PropaneSharp } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DeckCard(props) {
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
 
  
  window.addEventListener('resize', adjustFontSize);
  window.addEventListener('load', adjustFontSize);
  window.addEventListener('DOMContentLoaded', adjustFontSize);
  adjustFontSize();

  useEffect(() => {
    adjustFontSize();
  }, [flipped]);



  return (
    
      
        <div className="deck-card note-div">
          <div className="flash" onClick={() => set((state) => !state)}>

            <a.div
              className="d front"
              style={{
                opacity,
                transform,
                rotateX: "180deg",
                borderRadius: 7
              }}
            >
              <div className="center-parent">
              
                {/* <h1 className="card-text unhighlight-text">{props.front}</h1> */}
                <Textfit className="card-text unhighlight-text" mode="multi" min={1} max={100}>
                  {props.front}
                </Textfit>
              
              </div>
            </a.div>
            <a.div
              className="d back"
              style={{
                opacity: opacity.to((o) => 1 - o),
                transform,
                borderRadius: 7
              }}
            >
              {/* <div className="center-parent"> */}
                {/* <h1 className="card-text unhighlight-text">{props.back}</h1>
                <h1 className="card-text unhighlight-text">{props.collectionID}</h1> */}
                {/* <Textfit className="card-text unhighlight-text" mode="multi" min={1} max={100}> */}
                  {props.back}
                {/* </Textfit> */}
              {/* </div> */}
            </a.div>
          </div>
          
        </div>  
      
    
  );
}
