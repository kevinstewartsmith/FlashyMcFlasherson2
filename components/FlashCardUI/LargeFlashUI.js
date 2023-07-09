"use client"
import { useEffect, useState, useContext } from 'react';
import CreateFlashCard from '@components/FlashCardUI/CreateFlashCard';
import FlashCardFeed from '@components/FlashCardUI/FlashCardFeed';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Container, Box, Grid, IconButton } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import  ViewCarouselIcon  from '@mui/icons-material/ViewCarousel';
//import { ViewCarouselIcon } from '@mui/icons-material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
//import DashboardCustomize from '@mui/icons-material/DashboardCustomize';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Psychology, Edit, DashboardCustomize, ViewCarousel, ElectricBolt  } from '@mui/icons-material/';
//import EditIcon from '@mui/icons-material/Edit';
import { FlashCardContext } from '@components/Contexts/FlashCardContext';
import { useRouter } from 'next/navigation';
//import {Box, Grid, IconButton} from '@mui/material';
import Item from '@mui/material/Grid';
//import {Container} from '@mui/material';
import { Shrikhand, Roboto } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Textfit } from 'react-textfit';

import { useSpring, animated } from 'react-spring';

const shrikhand = Shrikhand({
    subsets: ['latin'],
    weight: "400",
})

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: "400",
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: "400",
})
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
    const [iconIsClicked, setIconIsClicked] = useState(false);

    const springProps = useSpring({
      rotate: iconIsClicked ? 360 : 0,
    });


    const router = useRouter();
    const [flashCardItems, setFlashCardItems] = useState([]);
    const collectionID = props.collectionID
    //const [collection, setCollection] = useState({});
    const [practiceModeOff , setPracticeModeOff] = useState(true);
    const { flashCards, updateFlashCards, collection, updateCollection  } = useContext(FlashCardContext);
    const actions = [
        // { icon: <Link href={`/desk/${collectionID}`}><ViewCarouselIcon /></Link>, name: 'Review Flashcards' },
        { icon: <ViewCarousel onClick={togglePracticeMode} style={{ color:"white", fontSize:"2rem" }} />, name: 'Review Flashcards', click: reviewFCClicked },
        { icon: <DashboardCustomize style={{ color:"white", fontSize:"2rem" }}  />, name: 'Add Flashcard', href: "/" },
        { icon: <Edit style={{ color:"white", fontSize:"2rem" }} />, name: 'Edit Flashcards', href: "/", click: editClicked},
        { icon: <Psychology style={{ color:"white", fontSize:"2rem" }} />, name: 'Games', href: "/"},
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

    const handleLightningClick = () => {
        setIconIsClicked(!iconIsClicked)
    }
  
  
    return (
    <div>  
    
            <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                <Grid container spacing={0}  direction="row" style={{height: "85vh"}}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "transparent"  }}>
                            <Container maxWidth="100%"  style={{maxHeight: "100%",backgroundColor:"transparent", position:"relative"}} sx={{ margin: '0 auto', display: 'flex' }}>  
                                

                                <div style={{
                                    backgroundColor: "transparent",
                                    width:"100%",
                                    // height:"40%",
                                   
                                }}>
                                <Grid container direction="column" spacing={0} >
                                    <Grid item xs={4} sx={{ alignItems: 'center',justifyContent:'center', backgroundColor: "transparent", width:"100%" }}>
                                
                                        <Textfit className={roboto_bold.className} style={{ width:"auto", backgroundColor:"transparent",}} mode="single" min={10} max={100}>
                                            {collection.name }
                                        </Textfit>
                                        {/* <br/> */}
                                        <Textfit className={roboto_italic.className} style={{ margin:"0 0", width:"auto" }} mode="single" min={2} max={60}>
                                            {collection.description }
                                        </Textfit>
                                    </Grid>
                                    <Grid item xs={8} sx={{  justifyContent: 'center',alignItems:"center", boxSizing: "border-box", backgroundColor: "transparent", width:"100%" }}>
                                        <div style={{ width:"100%", height: 40, backgroundColor:"transparent", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:10, marginTop:20 }}>
                                            <div style={{
                                                width: '40%',
                                                height: '1px',
                                                backgroundColor: 'black',
                                                marginRight: 10,
                                                marginLeft: 50
                                            }} />
                                            <IconButton onClick={handleLightningClick}>
                                                <animated.div style={springProps}>
                                                    <ElectricBoltIcon style={{fontSize: '3rem', color:"yellow"}} />
                                                </animated.div>
                                            </IconButton>
                                            
                                            <div style={{
                                                width: '40%',
                                                height: '1px',
                                                backgroundColor: 'black',
                                                marginLeft: 10,
                                                marginRight: 50,
                                            }} />
                                            
                                        </div>
                                        
                                        { iconIsClicked ?
                                        <div style={{
                                            backgroundColor: "#E0E0E0",
                                            borderRadius: 25,
                                            padding:25,
                                            borderWidth: 2,
                                            borderColor: "black",
                                        }}>
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
                                        <Grid container spacing={0}  direction="column" style={{height: "10vh", width:"100%", paddingLeft: 80, paddingRight: 80}}>
                                            { actions.map((action,idx) => ( 
                                                <Grid item key={idx} xs={2} sx={{ display:"flex", justifyContent: 'center',alignItems: "center", boxSizing: "border-box", backgroundColor: "transparent", height:"100%" }}>
                                                    <IconButton 
                                                        key={idx}  
                                                        onClick={action.click}
                                                        style={{ 

                                                            borderColor: "red", 
                                                            backgroundColor: "#1876D2", 
                                                            borderWidth:"10px", 
                                                            height:"60px", 
                                                            width:"60px"
                                                        }}
                                                            //tooltipTitle={action.name}
                                                            
                                                        >
                                                        {action.icon}
                                                    </IconButton>
                                                </Grid>
                                            ))}
                                        </Grid>

                                        </div>
                                        : null }

                                    </Grid>
                                </Grid>
                                    
                                </div>


                            </Container>

                        
                    </Grid>
                    <div styles={{}}></div>
                    <Grid item xs={8}>

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