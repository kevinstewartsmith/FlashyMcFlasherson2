"use client"
import { useRef, useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Grid } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FlashCard from '@components/FlashCardUI/FlashCard';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Gallery = ({items, collectionID}) => {
  const carouselRef = useRef(null);
  const padding = {
    paddingLeft: 40,     // in pixels
    paddingRight: 40
  }

  const responsive = {
    0: { items: 3 },
    568: { items: 6 },
    1024: { items: 9 },
  };
  const [componentCollection, setComponentCollection] = useState([])
  const [componentFlashCards, setComponentFlashCards] = useState([])
  const [newFlashCards, setNewFlashCards] = useState(0)
  //const [collectionID, setCollectionID] = useState("")

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  const getInnerWidth = () => {
    try {
      // if client
      return window.innerWidth;
    } catch {
    // if server, set any desired value
      return 1024;
    }   
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  }

  function flashCardCreated() {
    setNewFlashCards(newFlashCards + 1)
    //fetchCollections()
    //fetchFlashCards()
}

  useEffect(() => {     
    newFlashCards
    const fetchCollections = async () => {
        const res = await fetch(`/api/collection/gallery/${collectionID}`)
        const data = await res.json()
        //updateCollection(data)
        setComponentCollection(data)
        //upDateCollectionContext()
    }

    const fetchFlashCards = async () => {
        const res = await fetch(`/api/collection/gallery/${collectionID}/flashcards`)
        const data = await res.json()
        //updateFlashCards(data)
        setComponentFlashCards(data)
        //updateFlashCardContext()
        console.log(data);
    }
    console.log("fetching collections");
    fetchCollections()
    console.log("fetching flashcards");
    fetchFlashCards()
    
},[newFlashCards, collectionID]);

  return (
    <>
      {/* <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            height: '30vh', // Adjust the height of the expanded drawer as needed
          },
        }}
      > */}




    <Grid container spacing={0} justify="space-evenly" alignItems="center" direction="row" style={{height: "100%", widows:"100%"}} >
      <Grid item padding={1} xs={0.5} sm={0.5} md={0.5} key={"flash" + 1} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"} >
        {/* <button onClick={handlePrevClick}>Prev button</button> */}
        <NavigateBeforeIcon fontSize='large' onClick={handlePrevClick} />
      </Grid>
      <Grid item padding={1} xs={11} sm={11} md={11} key={"flash" + 2} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"} style={{height: "100%"}}>
        <AliceCarousel 
          mouseTracking 
          disableDotsControls={true}          
          responsive={responsive}
          autoHeight={false}
          style={{ height:"100%", width:"100%",backgroundColor:"green" }}
          ssrSilentMode={false}
          //items={items} 
          innerWidth={getInnerWidth()} 
          stagePadding={padding}
          ref={carouselRef}
          disableButtonsControls={true}
          items={componentFlashCards.map((item,idx) => (
            // <div key={ "gallery_" + item.idx } style={{ backgroundColor: item.backgroundColor, width: item.width, height: item.height }}>{item.content}</div>
            <div key={"galleryContainer_" + idx} style={{ backgroundColor:"pink", width:"8vw", height:"15vh", display: "flex", justifyContent: "center", alignContent: "center" }} >
            {/* <FlashCard 
              key={"gallery_"+ item._id}
              id={item._id}
              front={item.front}
              back={item.back}
            /> */}
              <div style={{ width:"50px",height:"50px", backgroundColor:"green"}}>
                <h1>{item.front}</h1>
              </div>
              
            </div>
          ))}

        />
      </Grid>
      <Grid item padding={1} xs={0.5} sm={0.5} md={0.5} key={"flash" + 1} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
        {/* <button onClick={handleNextClick}>Next button</button> */}
        <NavigateNextIcon fontSize='large' onClick={handleNextClick} />
      </Grid>
    </Grid>


    {/* </Drawer> */}
    </>
  );
}

export default Gallery;