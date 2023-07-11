"use client"
import { useEffect, useContext, useState } from 'react';
import FlashCardFeed from '@components/FlashCardUI/FlashCardFeed';
import {  Container, Box, Grid } from '@mui/material';
import { FlashCardContext } from '@components/Contexts/FlashCardContext';
import Item from '@mui/material/Grid';
import { Roboto } from "next/font/google";
import { Textfit } from 'react-textfit';
import FlashCardControls from './FlashCardControls';

const roboto_bold = Roboto({
    subsets: ['latin'],
    weight: "700",
})
const roboto_italic = Roboto({
    subsets: ['latin'],
    weight: "400",
    style: "italic"
})

const LargeFlashUI = (props) => {
    const collectionID = props.collectionID
    const { flashCards, updateFlashCards, collection, updateCollection  } = useContext(FlashCardContext);
    const [newFlashCards, setNewFlashCards] = useState(0);
    function flashCardCreated() {
        setNewFlashCards(newFlashCards + 1)
    }

    useEffect(() => {     
        fetchCollections()
        fetchFlashCards()
    },[newFlashCards]);
    
    const fetchCollections = async () => {
        const res = await fetch(`/api/collection/gallery/${collectionID}`)
        const data = await res.json()
        updateCollection(data)
    }

    const fetchFlashCards = async () => {
        const res = await fetch(`/api/collection/gallery/${props.collectionID}/flashcards`)
        const data = await res.json()
        updateFlashCards(data)
    }
  
    return (
        <>  
            <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                <Grid container spacing={0}  direction="row" style={{height: "85vh"}}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "transparent"  }}>
                        <Container maxWidth="100%"  style={{maxHeight: "100%",backgroundColor:"transparent", position:"relative"}} sx={{ margin: '0 auto', display: 'flex' }}>   
                            <div style={{
                                backgroundColor: "transparent",
                                width:"100%",     
                            }}>
                                <Grid container direction="column" spacing={0} >
                                    <Grid item xs={4} sx={{ alignItems: 'center',justifyContent:'center', backgroundColor: "transparent", width:"100%" }}>
                                        <Textfit className={roboto_bold.className} style={{ width:"auto", backgroundColor:"transparent",}} mode="single" min={10} max={100}>
                                            {collection.name }
                                        </Textfit>
                                        <Textfit className={roboto_italic.className} style={{ margin:"0 0", width:"auto" }} mode="single" min={2} max={60}>
                                            {collection.description }
                                        </Textfit>
                                    </Grid>
                                    <Grid item xs={8} sx={{  justifyContent: 'center',alignItems:"center", boxSizing: "border-box", backgroundColor: "transparent", width:"100%" }}>
                                        <FlashCardControls collectionID={props.collectionID} flashCardCreated={flashCardCreated} />  
                                    </Grid>
                                </Grid>        
                            </div>
                        </Container>   
                    </Grid>
                    <Grid item xs={8}>
                        <Item><FlashCardFeed collectionID={props.collectionID} flashCardItems={flashCards} /></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LargeFlashUI