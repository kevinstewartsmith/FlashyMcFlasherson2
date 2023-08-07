"use client"
import React from 'react'
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

const Studio = ({params}) => {
    const menuItems = ["Themes","Photos", "APIs", "Uploads"]


    return (
        <div>
           
            <div style={{ position:"fixed", height:"100vh", width: 100, backgroundColor: "transparent", borderRight:'1px solid #333' }} >
                
                {/* <div style={{ backgroundColor: "white", height: 60, width:"100%", marginTop:0}}></div> */}
                <div style={{
                    position:"fixed", 
                    marginLeft: 100,
                    marginTop:0, 
                    width: "calc(100vw - 100px)", 
                    height:"100vh", 
                    backgroundColor:"#DBEEF4",
                }}>
                    <div style={{ backgroundColor: "white", height: 60, width:"100%", marginTop:0}}></div>
                 
                        <div style={{
                            position:"fixed", 
                             
                            width: "calc(100vw - 100px)", 
                            height:"100vh", 
                            backgroundColor:"#DBEEF4",
                            display:"flex",
                            justifyContent:"center",
                            //alignItems:"center", 
                            
                        }}>
                   
                            <div style={{ backgroundColor: "white", height:"30vw", width: "45vw", marginTop:"5%" }}>
                                <ResizableFlashCard front={"front"} back={"back"}/>
                            </div>
                        </div>
                </div>
                
                
                {/* <div style={{display:"flex", height:"70%", width:100, backgroundColor:"transparent"}}>  */}
                    <Grid container spacing={0} justify="space-evenly" alignItems="center" direction="column" >
                        { menuItems.map((item, idx) => (
                            <Grid 
                                item 
                                padding={1} 
                                xs={3} 
                                sm={3} 
                                md={3} 
                                key={"flash" + idx} 
                                width={"100%"} 
                                justify="space-evenly" 
                                display={"flex"} 
                                alignItems="center" 
                                justifyContent={"center"}
                            >
                                <Grid container spacing={0} justify="space-evenly" alignItems="center" direction="column" >
                                    <Grid 
                                        item 
                                        padding={1} 
                                        xs={6} 
                                        sm={6} 
                                        md={6} 
                                        key={"flash" + idx} 
                                        width={"100%"} 
                                        justify="space-evenly" 
                                        display={"flex"} 
                                        alignItems="center" 
                                        justifyContent={"center"}
                                    >
                                        <CropOriginalIcon fontSize='large' />
                                    </Grid>
                                    <Grid
                                        item
                                        padding={1}
                                        xs={6}
                                        sm={6}
                                        md={6}
                                        key={"flash" + idx}
                                        width={"100%"}
                                        justify="space-evenly"
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"center"}
                                    >
                                        {item}
                                    </Grid>
                                    </Grid>
                                </Grid>
                        )) }
                    </Grid>     
                {/* </div> */}
                    <Gallery collectionID={params.collectionID}/>
            </div>
            
        </div>
    )
}

export default Studio
