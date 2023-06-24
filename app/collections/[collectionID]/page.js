"use client"
import { useEffect, useState, useContext } from 'react';
import CreateFlashCard from '@components/FlashCardUI/CreateFlashCard';
import FlashCardFeed from '@components/FlashCardUI/FlashCardFeed';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, } from '@mui/material';
import  ViewCarouselIcon  from '@mui/icons-material/ViewCarousel';
import Link from "next/link"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EditIcon from '@mui/icons-material/Edit';
import { FlashCardContextProvider, FlashCardContext } from '@components/Contexts/FlashCardContext';
import FlashCardUIParent from '@components/FlashCardUI/FlashCardUIParent';
export default function Collection({ params }) {


 
    return (
        <FlashCardContextProvider>
            <FlashCardUIParent collectionID={ params.collectionID }/>
        </FlashCardContextProvider>
    )
}