import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Grid } from '@mui/material';

const Gallery = ({items}) => {
  const padding = {
    paddingLeft: 40,     // in pixels
    paddingRight: 40
}

  const responsive = {
    0: { items: 3 },
    568: { items: 6 },
    1024: { items: 9 },
};

  const getInnerWidth = () => {
    try {
      // if client
      return window.innerWidth;
    } catch {
    // if server, set any desired value
      return 1024;
    }   
  };

  return (
    <Grid container spacing={0} justify="space-evenly" alignItems="center" direction="row" >
      <Grid item padding={1} xs={1} sm={1} md={1} key={"flash" + 1} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
        <h1>Left</h1>
      </Grid>
      <Grid item padding={1} xs={10} sm={10} md={10} key={"flash" + 2} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
        <AliceCarousel 
          mouseTracking           
          responsive={responsive}
          autoHeight={true}
          style={{ height:"100%", width:"100%",backgroundColor:"green" }}
          //ssrSilentMode={false}
          items={items} 
          innerWidth={getInnerWidth()} 
          stagePadding={padding}

        />
      </Grid>
      <Grid item padding={1} xs={1} sm={1} md={1} key={"flash" + 1} width={30} justify="space-evenly" display={"flex"} alignItems="center" justifyContent={"center"}>
        <h1>Right</h1>
      </Grid>
    </Grid>
  );
}

export default Gallery;