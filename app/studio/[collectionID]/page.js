"use client"
import "@styles/globals.css";
//import react-spring and animated
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import Gallery from "@components/StudioUI/Gallery";


const Studio = ({params}) => {
    const [open, setOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [shrinkDrawerContainer, setShrinkDrawerContainer] = useState(false);
    const initialLeft = open ? 0 : 425;
    const finalLeft = open ? 425 : 0;


    const studioDrawerAnimation = useSpring({
        width: open ? 425 : 425,
        transform: open ?  "translateX(0px)" :  "translateX(-425px)",
       
    })
    //height: "calc(100vh-50px)",
 
    const studioPreviewAnimation = useSpring({
        from: {
            width: "calc(100vw - 80px)",
            left: 0,
            height: "calc(100vh - 50px)",
        },
        to: {
            width: open ? "calc(100vw - 505px)" : "calc(100vw - 80px)",
            left: open ? 425 : 0,
            height: galleryOpen ? "calc(100vh - 250px)" : "calc(100vh - 50px)",
        },
    });
    
    const studioGalleryAnimation = useSpring({
        from: {
            transform:  "translateY(200px)"
        },
        to: { 
            transform: galleryOpen ?  "translateY(0px)" :  "translateY(200px)"
        },
    });

    const drawerContainerAnimation = useSpring({
        from: {
            height: "calc(100vh - 60px)",
        },
        to: {
            height: shrinkDrawerContainer ? "calc(100vh - 255px)" : "calc(100vh - 60px)",
        },
    });

    function openClicked() {
        setOpen(!open);
    }
    function galleryOpenClicked() {
        console.log("gallery clicked");
        setShrinkDrawerContainer(!shrinkDrawerContainer);
        setGalleryOpen(!galleryOpen);
    }

    
 
    return (
        <div>
            <div className='studio-sidenav'>
                NavBar
                <button onClick={openClicked}>Click me</button>
                <button onClick={galleryOpenClicked}>Open Gallery</button>
            </div>
            <div className="studio-container">
                {/* <animated.div className="canvas-and-drawer" style={galleryOpenAnimation}> */}
                    <animated.div className="studio-drawer" style={studioDrawerAnimation}>
                        <animated.div className="drawer-container" style={drawerContainerAnimation}>
                            <h1>Look at me!</h1>
                            <h1>fddsl;fk;dlkf;lskl</h1>
                        </animated.div>
                    </animated.div>
                    
                        <animated.div className="studio-preview" style={studioPreviewAnimation}>
                            {/* <button onClick={openClicked}>Click me</button> */}
                            
                            <div style={{width: "100%", height: "100%", backgroundColor: "transparent",opacity:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <div className="studio-canvas-container" >
                                    
                                        <h1>Look at me!</h1>
                                    </div>       
                                </div>
                            
                        </animated.div>
                    
                {/* </animated.div> */}
                <animated.div className="gallery-container" style={studioGalleryAnimation}>
                    <Gallery collectionID={params.collectionID}/>
                </animated.div>
            </div>
        </div>
    )
}

export default Studio
