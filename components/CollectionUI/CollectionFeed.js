"use client"
import { useState, useEffect, useContext } from 'react'
import { Grid } from '@mui/material'
import Note from '@components/CollectionUI/note'
import { CollectionContext } from '../Contexts/CollectionContext'

import {
    StaggeredAlignment,
    StaggeredGrid,
    StaggeredGridItem,
    StaggeredGridItemFunctional,
    StaggeredItemSpan
} from "react-staggered-grid";

const CollectionList = ({collectionItems, onCollectionDelete}) => {
    return (
        <div className='collection-feed'> 
            {/* <Grid
                container
                //rowSpacing={1}
                spacing={2}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >       
                { collectionItems.map((collection,idx) => (
                    <Grid key={idx} item padding={1} xs={12} sm={6} md={4} >
                        <Note
                            key={idx}
                            id={collection._id}
                            collectionName={collection.name}
                            description={collection.description}
                            onCollectionDelete={onCollectionDelete}

                        />
                    </Grid>
                )) }
            </Grid>   */}
            <StaggeredGrid
                columns={5} // number of columns , don't pass if you want it to be gridWidth / columnWidth
                columnWidth={200} // width of each column , don't pass if you want it to be gridWidth / columns
                style={{width: "100%"}} // when width of the grid is fixed in pixels , use gridWidth prop
                useElementWidth={true} // this would force css styled width (100%) , when false gridWidth = columnWidth * columnWidth
                horizontalGap={10}
            >
                {collectionItems.map((collection, index) => (
                    <StaggeredGridItem
                        key={index}
                        index={index}
                        spans={1}
                        style={{transition: "left 0.3s ease,top 0.3s ease"}}
                        
                    >
                        <Note
                            key={index}
                            id={collection._id}
                            collectionName={collection.name}
                            description={collection.description}
                            onCollectionDelete={onCollectionDelete}

                        />
                    </StaggeredGridItem>
                ))}
            </StaggeredGrid>



        </div>   
    )
}
        


const CollectionFeed = (props) => {
    const [collectionItems,setCollectionItems] = useState([]);
    const { trigger,restoreScrollPosition } = useContext(CollectionContext);
    const [collectionDeleteCount, setCollectionDeleteCount] = useState(0);
    function onCollectionDelete(deletedCollectionID) {
        //setCollectionDeleteCount(collectionDeleteCount + 1)
        //Something will happen here
        console.log("deleted: " + deletedCollectionID);
        const filteredCollections = collectionItems.filter((collection) => collection._id !== deletedCollectionID);
        setCollectionItems(filteredCollections);
    }

    useEffect(() => {
        fetchCollections()
    },[trigger, collectionDeleteCount]);

    // useEffect(() => {
    //     fetchCollections()
    // },[trigger]);



    const fetchCollections = async () => {
        const res = await fetch('/api/collection/all')
        const data = await res.json()
        console.log(data);
        setCollectionItems(data)

    }

    //Add one to clickcount to trigger useEffect

  return (
    <div>       
        <CollectionList 
            collectionItems={collectionItems}
            onCollectionDelete={onCollectionDelete}
        />
    </div>
  )
}

export default CollectionFeed