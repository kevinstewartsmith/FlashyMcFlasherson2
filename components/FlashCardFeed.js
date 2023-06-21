import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Note from './note'

const FlashCardList = ({data}) => {
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
                {data.map((flashCard,idx) => (
                    <Grid key={idx} item padding={1} xs={4} >
                        <Note
                            key={idx}
                            id={flashCard._id}
                            collectionName={flashCard.front}
                            description={flashCard.back}
                            //onClick={() => { navigate("/collections/" + collection._id,  { state: { collectionName: collection.name }}) }}
                            //onDelete={collectionChanged}
                        />
                    </Grid>
                ))}
            </Grid>    
        </div>   
    )
}

const FlashCardFeed = (props) => {
    const [flashCardItems,setFlashCardItems] = useState([]);

    useEffect(() => {
        fetchCollections()
    },[]);

    const fetchCollections = async () => {
        const res = await fetch(`/api/collection/gallery/${props.collectionID}/flashcards`)
        const data = await res.json()
        console.log(data);
        setFlashCardItems(data)
    }

  return (
    <FlashCardList data={flashCardItems} />
  )
}

export default FlashCardFeed