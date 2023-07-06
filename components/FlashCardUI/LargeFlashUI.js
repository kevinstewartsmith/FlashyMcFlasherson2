"use client"
import { useEffect, useState, useContext } from 'react';
import CreateFlashCard from '@components/FlashCardUI/CreateFlashCard';
import FlashCardFeed from '@components/FlashCardUI/FlashCardFeed';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, } from '@mui/material';
import  ViewCarouselIcon  from '@mui/icons-material/ViewCarousel';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EditIcon from '@mui/icons-material/Edit';
import {  FlashCardContext } from '@components/Contexts/FlashCardContext';
import { useRouter } from 'next/navigation';
import {Box, Grid} from '@mui/material';
import Item from '@mui/material/Grid';
import {Container} from '@mui/material';
import { Shrikhand } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Textfit } from 'react-textfit';
//import Box from '@mui/material';

const shrikhand = Shrikhand({
    subsets: ['latin'],
    weight: "400",
})

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: "400",
})

const LargeFlashUI = (props) => {
    const router = useRouter();
    const [flashCardItems, setFlashCardItems] = useState([]);
    const collectionID = props.collectionID
    //const [collection, setCollection] = useState({});
    const [practiceModeOff , setPracticeModeOff] = useState(true);
    const { flashCards, updateFlashCards, collection, updateCollection  } = useContext(FlashCardContext);
    const actions = [
        // { icon: <Link href={`/desk/${collectionID}`}><ViewCarouselIcon /></Link>, name: 'Review Flashcards' },
        { icon: <ViewCarouselIcon onClick={togglePracticeMode} />, name: 'Review Flashcards', click: reviewFCClicked },
        { icon: <DashboardCustomizeIcon />, name: 'Add Flashcard', href: "/" },
        { icon: <EditIcon />, name: 'Edit Flashcards', href: "/", click: editClicked},
        { icon: <PsychologyIcon/>, name: 'Games', href: "/"},
    ];


    function editClicked() {
        console.log("Edit Mode Clicked");

    }

    function reviewFCClicked() {
        router.push(`/desk/${collectionID}`)    
    }

    function togglePracticeMode() {
        console.log("Toggle Practice Mode");
        setPracticeModeOff(!practiceModeOff)
    }

    useEffect(() => {     
        fetchCollections()
        fetchFlashCards()
    },[]);
    

    const fetchCollections = async () => {
        //await fetch(`/api/prompt/${promptId}`)
        const res = await fetch(`/api/collection/gallery/${collectionID}`)
        const data = await res.json()
        console.log(data);
        
        updateCollection(data)
    }

    const fetchFlashCards = async () => {
        console.log("Fetching Flashcards");
        const res = await fetch(`/api/collection/gallery/${props.collectionID}/flashcards`)
        const data = await res.json()
        console.log("Flashcards data in main colection page");
        console.log(data);
        //setFlashCardItems(data)
        updateFlashCards(data)
    }
  
  
  
    return (
    <div>  
    
            <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                <Grid container spacing={0}  direction="row">
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "transparent" }}>
                            <Container maxWidth="100%"  style={{maxHeight: "100%",backgroundColor:"transparent", position:"relative"}} sx={{ margin: '0 auto', display: 'flex' }}>  
                                

                                <div style={{
                                    backgroundColor: "transparent",
                                    width:"100%",
                                    // height:"40%",
                                   
                                }}>
                                <Grid container direction="column" spacing={0} >
                                    <Grid item xs={4} sx={{ alignItems: 'center',justifyContent:'center', backgroundColor: "transparent", width:"100%" }}>
                                
                                        <Textfit className={bebasNeue.className} style={{ width:"auto", backgroundColor:"transparent",}} mode="single" min={60} max={100}>
                                            {collection.name }
                                        </Textfit>
                                        <br/>
                                        <Textfit className={bebasNeue.className} style={{ margin:"0 0", width:"auto" }} mode="single" min={2} max={100}>
                                            {collection.description }
                                        </Textfit>
                                    </Grid>
                                    <Grid item xs={4} sx={{  justifyContent: 'center',alignItems:"center", boxSizing: "border-box", backgroundColor: "transparent", width:"100%" }}>
                                        <CreateFlashCard 
                                            collectionID={props.collectionID} 
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
                                    </Grid>
                                </Grid>
                                    
                                </div>


                            </Container>

                        
                    </Grid>
                    <div styles={{}}></div>
                    <Grid item xs={8}>
                        {/* <Item>
                            <CreateFlashCard 
                                collectionID={props.collectionID} 
                                //onAdd={collectionChanged}
                                inputType={"flashcard"}
                                topPlaceholder={"IAdd Flashcard Front"}
                                bottomPlaceholder={"Add Flashcard Back"}
                                topName={"front"}
                                bottomName={"back"}
                                //selectedCollection={selectedCollection}
                                //selectedCollection={props.selectedCollection} 
                                //collectionChanged={collectionChanged}
                            />
                        </Item> */}
                        <Item><FlashCardFeed collectionID={props.collectionID} flashCardItems={flashCards} /></Item>
                    </Grid>
                </Grid>
            </Box>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ 
                    position: 'fixed', bottom: 32, right: 32,
                    '& .MuiFab-primary': { width: 80, height: 80 }
                }}
                icon={<SpeedDialIcon />}
            >
                { actions.map((action) => (
                    
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            sx={{backgroundColor: "red", width: 72, height: 72}}
                            onClick={action.click}
                        />
                    
                )) }
            </SpeedDial>

    </div>
  )
}

export default LargeFlashUI