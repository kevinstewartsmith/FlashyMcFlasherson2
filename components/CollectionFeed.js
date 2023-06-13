"use client"
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Note from './note'

const CollectionList = ({data}) => {
    return (
        <div className='collection-feed'> 
            <Grid
                container
                //rowSpacing={1}
                spacing={2}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >       
                {data.map((collection,idx) => (
                    <Grid key={idx} item padding={1} xs={4} >
                        <Note
                            key={idx}
                            id={collection._id}
                            collectionName={collection.name}
                            //description={collection.description}
                            //onClick={() => { navigate("/collections/" + collection._id,  { state: { collectionName: collection.name }}) }}
                            //onDelete={collectionChanged}
                        />
                    </Grid>
                ))}
            </Grid>    
        </div>   
    )
}
        


const CollectionFeed = () => {
    const [collectionItems,setCollectionItems] = useState([]);
    useEffect(() => {
        fetchCollections()
    },[]);

    const fetchCollections = async () => {
        const res = await fetch('/api/collection/all')
        const data = await res.json()
        console.log(data);
        
        setCollectionItems(data)

    }
  return (
    <div>       
        <CollectionList data={collectionItems} />
    </div>
  )
}

export default CollectionFeed