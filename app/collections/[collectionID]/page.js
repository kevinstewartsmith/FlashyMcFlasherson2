"use client"
import { FlashCardContextProvider, FlashCardContext } from '@components/Contexts/FlashCardContext';
import FlashCardUIParent from '@components/FlashCardUI/FlashCardUIParent';
import LargeFlashUI from '@components/FlashCardUI/LargeFlashUI';
export default function Collection({ params }) {

    return (
            //<FlashCardUIParent collectionID={ params.collectionID }/>
            <LargeFlashUI collectionID={ params.collectionID }/>
    )
}