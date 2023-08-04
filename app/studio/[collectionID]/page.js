"use client"
import React from 'react'
import { Grid } from '@mui/material'
import Gallery from '@components/StudioUI/Gallery'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Studio = ({params}) => {
    const menuItems = ["Themes","Photos", "APIs", "Uploads"]
    const responsive = {
        0: { items: 3 },
        568: { items: 6 },
        1024: { items: 9 },
    };
    const cardItems = [
        <div key={1} style={{ backgroundColor:"white", width:"30vw", height:"15vh" }}>test</div>,
        <div key={2}>test</div>,
        <div key={3}>test</div>,
        <div key={4}>test</div>,
        <div key={5}>test</div>,
        <div key={6}>test</div>,
        <div key={7}>test</div>,
        <div key={8}>test</div>,
        <div key={9}>test</div>,
        <div key={10}>test</div>,
        <div key={11}>test</div>,
        <div key={12}>test</div>,
        <div key={13}>test</div>,
        <div key={14}>test</div>,
        <div key={15}>test</div>,
        <div key={16}>test</div>,
        <div key={17}>test</div>,
    ]
    return (
        <div>
            <div style={{ position:"fixed", height:"100vh", width: 100, backgroundColor: "blue" }} >
                <Grid container spacing={0} justify="space-evenly" alignItems="center" direction="column" >
                    {menuItems.map((item, idx) => (
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
                        {item}
                        </Grid>
                    ))}
                </Grid>
                <div style={{ position:"fixed", height: 200, width:'calc(100vw - 100px)',marginLeft:100, bottom: 0, backgroundColor:"red" }}>
                
                {/* <AliceCarousel 
                    mouseTracking 
                    items={cardItems} 
                    responsive={responsive}
                    autoHeight={true}
                    style={{ height:"100%", width:"100%",backgroundColor:"green" }}
                    ssrSilentMode={false}
                    /> */}
                    <Gallery items={cardItems} />
                </div>
                
                

            </div>
        </div>
    )
}

export default Studio
