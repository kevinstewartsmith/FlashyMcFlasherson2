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
import StudioUIParent from '@components/StudioUI/StudioUIParent';
import StudioUIParent2 from '@components/StudioUI/StudioUIParent2';


const Studio = ({params}) => {
    
    //return (<StudioUIParent params={params}/>)
    return (<StudioUIParent2 params={params}/>)
}

export default Studio
