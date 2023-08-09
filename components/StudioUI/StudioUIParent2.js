"use client"

import { Grid } from '@mui/material'
import Gallery from '@components/StudioUI/Gallery'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ResizableFlashCard from '@components/FlashCardUI/ResizableFlashCard'
import Box from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
//import CustomTabPanel from '@components/StudioUI/CustomTabPanel'
import DrawerContainer from '@components/StudioUI/DrawerContainer';
import { useState } from 'react'
import { useSpring, animated } from 'react-spring';


const StudioUIParent = ({params}) => {
    

    const toggleDrawer = () => {
     // setIsDrawerOpen(!isDrawerOpen);
     setExpanded(!expanded)
    };

    const menuItems = ["Themes","Photos", "APIs", "Uploads"]

    const [expanded, setExpanded] = useState(true);

    const containerStyles = {
      position: 'fixed',
      marginTop: 50,
      left: 0,
      width: '100vw',
      height: 'calc(100vh-50px)',
      display: 'flex',
      overflow: 'hidden',
    };
    const purpleDivWidth = expanded ? 525 : 0;
    const editCardContainerWidth = `calc(100vw - 100px - ${purpleDivWidth}px)`;
    const editCardContainerLeftMargin = `calc(100px + ${purpleDivWidth}px)`;
    const containerLeft = expanded ? 525 : 100;
    
    const purpleDivStyles = useSpring({
      width: purpleDivWidth,
      //height: '100%',
      backgroundColor: 'gray',
      position: 'fixed',
      left: 100,
      top: 0,
    });
    const editContainerStyles = useSpring({
        //position:"absolute", 
        marginLeft: expanded ? 400 + 125: 100,
        marginTop:0, 
        width: `calc(100vw - 100px)`, 
        //width: "100%",
        height:`calc(100vh - 100px)`,
        //backgroundColor:"#DBEEF4",
        backgroundColor:"red",
        padding:20,
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        // //overflow:"hidden"

    })
    // position:"fixed", 
    // marginLeft: purpleDivWidth + 100,
    // marginTop:0, 
    // width: "calc(100vw - 100px)", 
    // height:"100vh", 
    // backgroundColor:"#DBEEF4"
    const redDivStyles = {
      flex: 1,
      height: '100vh',
      marginLeft:100,
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const buttonStyles = {
      backgroundColor: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    };

    return (
        <>
            <div style={{
                backgroundColor:"red", 
                width:80, 
                height:"calc(100vh - 50px)", 
                top: 50,
                position:"fixed",
                //left:100,
            }}>
            top
            </div>
            <div style={{
                backgroundColor:"green", 
                width:"calc(100vw - 80px", 
                height:"calc(80vh - 50px)", 
                top: 50,
                position:"fixed",
                left:80,
                overflow: "auto"
            }}>
                <div style={{ width: 400,float:"left", height: "100%", borderWidth:5, position:"inline"}}></div>
                <div style={{ width: "calc(100% - 400px)",float:"left", height: "100%", borderWidth:5, borderColor:"orange"}}>beep</div>
            </div>
            <div style={{
                backgroundColor:"yellow", 
                width:"calc(100vw - 80px", 
                height:"calc(20vh)", 
                position:"fixed",
                bottom: 0,
                left:80,
            }}>
            card menu
            </div>
        </>

             
        
    )
}

export default StudioUIParent
