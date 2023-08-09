"use client"
import "@styles/globals.css";
//import react-spring and animated
import { useSpring, animated } from "react-spring";
import { useState } from "react";


const Studio = ({params}) => {
    const [open, setOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const initialLeft = open ? 0 : 425;
    const finalLeft = open ? 425 : 0;


    const studioDrawerAnimation = useSpring({
         width: open ? 425 : 425,
        //left: open ? finalLeft : initialLeft
        transform: open ?  "translateX(0px)" :  "translateX(-425px)"
    })
    const studioPreviewAnimation = useSpring({
        width: open ?  "calc(100vw - 505px)" : "calc(100vw - 80px)" ,
        left: open ? 425 : 0
    })
    const galleryOpenAnimation = useSpring({
        height: galleryOpen ?  "400px" : "200px" ,
    })


    function openClicked() {
        setOpen(!open);
    }
    function galleryOpenClicked() {
        console.log("gallery clicked");
        setGalleryOpen(!galleryOpen);
    }

    
    //return (<StudioUIParent params={params}/>)
    //return (<StudioUIParent2 params={params}/>)
    return (
        <div>
            <div className='studio-sidenav'>
                NavBar
                <button onClick={openClicked}>Click me</button>
            </div>
            <div className="studio-container">
                <animated.div className="canvas-and-drawer" style={galleryOpenAnimation}>
                    <animated.div className="studio-drawer" style={studioDrawerAnimation}>
                        <h1>Look at me!</h1>
                        <h1>fddsl;fk;dlkf;lskl</h1>
                    </animated.div>
                    <animated.div className="studio-preview" style={studioPreviewAnimation}>
                        <button onClick={openClicked}>Click me</button>
                        <button onClick={galleryOpenClicked}>Open Gallery</button>
                        <div style={{width: "100%", height: "100%", backgroundColor: "orange", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <div className="studio-canvas-container" >
                            <h1>Look at me!</h1>
                            </div>
                        </div>
                    </animated.div>
                </animated.div>
            </div>
        </div>
    )
}

export default Studio
