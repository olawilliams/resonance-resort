import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';


const SelectOptions = () => {
    const [roomType, setRoomType] = useState('');

    const handleChange = (event) => {
      setRoomType(event.target.value);
    };
  
        const useStyles = makeStyles((theme) => ({
          formControl: {
            margin: theme.spacing(1),
            maxWidth: 120,
            display: 'grid',

          },
          selectEmpty: {
            marginTop: theme.spacing(2),
            
          },
         
        }));

        const classes = useStyles();

    return (
        <div className={classes.formControl}>
            <FormControl>
                <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={roomType}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                >
                <MenuItem value="">
                   <em>All</em>
                </MenuItem>
                <MenuItem value={`family`}>Family</MenuItem>
                <MenuItem value={'single'}>Single</MenuItem>
                <MenuItem value={`double`}>Double</MenuItem>
                </Select>
                <FormHelperText>Room Type</FormHelperText>
        </FormControl>
        

        
        <FormControl>
                <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={roomType}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>

                </Select>
                <FormHelperText>Guests</FormHelperText>
        </FormControl>
      </div>
    )
};

export default SelectOptions;