import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Note from '../CollectionUI/note'
import FlashCard from './FlashCard'
import { Height } from '@mui/icons-material'

const FlashCardList = ({data}) => {
    
    return (
        <div className='collection-feed'> 

            <Grid
                container
                //rowSpacing={1}
                spacing={0}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >
                { data.map((flashCard,idx) => (
                    <Grid item padding={2} xs={12} sm={6} md={4} key={idx}>
                        {/* <FlashCard 
                            key={flashCard._id}
                            id={flashCard._id}
                            front={flashCard.front}
                            back={flashCard.back}
                        />  */}
                        {/* <div style={{backgroundColor: "blue", height: "40vh", width:"100%" }}> */}
                            <FlashCard 
                                key={flashCard._id}
                                id={flashCard._id}
                                front={flashCard.front}
                                back={flashCard.back}
                            />
                        {/* </div>  */}
                    </Grid>
                ))} 
            </Grid>
        </div>   
    )
}

const FlashCardFeed = (props) => {

  return (
    <>
        <FlashCardList data={props.flashCardItems} />
    </>
    
  )
}

export default FlashCardFeed