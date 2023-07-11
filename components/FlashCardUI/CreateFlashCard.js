"use client"
import React, { useState, useContext, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Grid } from '@mui/material';
import Image from "next/image";
import {Container} from '@mui/material';
import "@styles/globals.css";



const CreateFlashCard = (props) => {

    const router = useRouter()
    const { data: session } = useSession()
    const [expanded, setExpansion] = useState(false);
    const [flashCardData, setFlashCardData] = useState({ front: "", back: "" });

    function handleClick() {  
        setExpansion(!expanded);
    }
    
    function handleInputText(event) {
      const { name, value } = event.target;
    
        setFlashCardData((prevValue) => {
          if (name === "front" ) {
            return {
              front: value,
              back: prevValue.back
            };
          } else if (name === "back" ) {
            return {
              front: prevValue.front,
              back: value
            };
          }
        });
        console.log(flashCardData);
      }

      const handleButtonClick = async () => {
        try {
          const response = await fetch(`/api/wiki/`);
          const data = await response.json();
          //setIntroParagraph(data.introParagraph);
          console.log(data);
          console.log(typeof data);
              // Remove HTML tags and extract text content
          const parser = new DOMParser();
          const sanitizedHTML = parser.parseFromString(data, 'text/html');
          const textContent = sanitizedHTML.body.textContent;



          setFlashCardData((prevValue) => {
              return {
                front: prevValue.front,
                back: textContent
              };
          });

        } catch (error) {
          console.error('Error:', error);
        }
      };

      const submitNote = async (event) => {
        const front = flashCardData.front
        const back = flashCardData.back
          
       
          //props.onAdd();
          console.log("Add some shit");      
          setFlashCardData({ front: "", back: "" });
          event.preventDefault();  
          try{
            const response = await fetch('/api/flashcard/new', {
              method: 'POST',
              // We convert the React state to JSON and send it as the POST body
              body: JSON.stringify({
                userId: session?.user.id,
                front,
                back, 
                collectionID: props.collectionID }),
              // headers: {"Content-Type": "application/json", 'Accept': 'application/json'}
            });
    
            if (response.ok) {
              router.push("/");
            }
          } catch (error) {
            console.log(error);
          } 
    }
    return (
        <div style={{width: "100%", }}>  
        <form className="create-note">
          <input
            name={"front"}
            placeholder={"Add Flashcard Front"}
            onClick={handleClick}
            onChange={handleInputText}
            type="text"
            value={flashCardData.front}
          />
          {expanded ? (
            <>
            <textarea
              name={"back"}
              onChange={handleInputText}
              value={flashCardData.back}
              placeholder={"Add Flashcard Back"}
              //rows={rows}
              type="text"
              style={{ height: 100 }}
            />
            <Container style={{marginTop: "16px"}}>
            <Grid container  spacing={2} style={{ padding: 0 }}>
              <Grid item xs={2} style={{ padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"100%" }}>
                  <p ><strong>APIs</strong></p>
                </div>
              </Grid>
              <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:0 }}>
                <div onClick={handleButtonClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"100%" }}>
                  <Image src="/wiki-icon.png" alt="Wiki" width={70} height={70} />
                </div>
              </Grid>
              <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:0 }} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"100%" }}>
                  <Image src="/worknik-icon.png" alt="Wiki" width={50} height={50} />
                </div>
              </Grid>
              <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"100%" }}>
                  <Image src="/lingua-robot-icon.png" alt="Wiki" width={50} height={50} />
                </div>
              </Grid>
              <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:"100%" }}>
                  <Image src="/oxford-dictionary-logo.png" alt="Wiki" width={150} height={50} />
                </div>
              </Grid>
            </Grid>
            </Container>
            </>
          ) : null}
          
          <Zoom in={expanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    )
}

export default CreateFlashCard