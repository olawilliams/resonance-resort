import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';


const RadioSelect = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const useStyles = makeStyles((theme) => ({
        radio: {
          margin: theme.spacing(1)
        },
       
      }));

      const classes = useStyles();

    return ( 
        <div>
            <FormControl component="fieldset" className={classes.radio}>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="breakfast" control={<Radio />} label="Breakfat" />
                    <FormControlLabel value="pets" control={<Radio />} label="Pets" />
                </RadioGroup>
        </FormControl>

        </div>   
        
    )
};

export default RadioSelect;
