import { Grid } from '@mui/material'
import FlashCard from './FlashCard'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';

const FlashCardList = ({data}) => {
    function deleteFlashCard() {
        console.log("FC UI Deleted card ID: " );
    }

    return (
        <div className='collection-feed'> 
            <Grid
                container
                spacing={0}
                justify="space-evenly"
                alignItems="center"
            >
                { data.map((flashCard,idx) => (
                    <Grid item padding={2} xs={12} sm={6} md={4} key={idx}>
                            <Grid 
                                container 
                                spacing={0} 
                                justify="space-evenly" 
                                alignItems="center" 
                                width={"100%"} 
                                direction="column" 
                            >
                                <Grid 
                                    item 
                                    padding={1} 
                                    xs={10} 
                                    sm={10} 
                                    md={10} 
                                    key={"flash" + idx} 
                                    width={"100%"} 
                                    justify="space-evenly" 
                                    display={"flex"} 
                                    alignItems="center" 
                                    justifyContent={"center"}
                                >
                                    <FlashCard 
                                        key={flashCard._id}
                                        id={flashCard._id}
                                        front={flashCard.front}
                                        back={flashCard.back}
                                    />
                                </Grid>
                                <Grid 
                                    item 
                                    padding={0} 
                                    xs={2} 
                                    sm={2} 
                                    md={2} 
                                    key={"delete" + idx} 
                                    width={"100%"} 
                                    display={"flex"} 
                                    justifyContent={"center"} 
                                    alignItems={"center"}
                                >
                                    <div 
                                        style={{ 
                                            width:"30%", 
                                            height:"100%", 
                                            display:"flex", 
                                            justifyContent:"center", 
                                            alignItems:"center", 
                                            borderColor:"black",
                                        }}>  
                                        <Grid
                                            container
                                            spacing={0}
                                            justify={"space-evenly"}
                                            alignItems={"center"}
                                            direction={"row"}
                                        > 
                                            <Grid item padding={0} xs={6} sm={6} md={6} key={"flash" + idx} width={"100%"} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
                                                <EditIcon className="delete-button" onClick={deleteFlashCard}/> 
                                            </Grid>  
                                            <Grid item padding={0} xs={6} sm={6} md={6} key={"flash" + idx} width={"100%"} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
                                                <DeleteOutlinedIcon className="delete-button" onClick={deleteFlashCard}/> 
                                            </Grid>  
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                    </Grid>
                ))} 
            </Grid>
        </div>   
    )
}

const FlashCardFeed = (props) => { return (<FlashCardList data={props.flashCardItems} />) }

export default FlashCardFeed