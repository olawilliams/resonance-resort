import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const SliderSelect = () => {

    const useStyles = makeStyles((theme) => ({
        slider: {
          width: 250,
        },
       
      }));

      const classes = useStyles();

      function valuetext(value) {
        return `$${value}`;
      }

    return (
        <div className={classes.slider}>

        <Typography id="discrete-slider" gutterBottom>
          Room Price
        </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={100}
          max={600}
        />
      </div>
    )
};

export default SliderSelect;