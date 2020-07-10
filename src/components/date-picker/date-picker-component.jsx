import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import CustomButton from '../custom-button/custom-button-component';

const DatePicker = ({ price }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDateTwo, setSelectedDateTwo] = useState(new Date());
    const [isValid, setIsValid] = useState( false)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChangeTwo = (date) => {
        setSelectedDateTwo(date);
    };

    const differenceInTime = selectedDateTwo.getTime() - selectedDate.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    

    if(differenceInDays > 0) {
      console.log(isValid)
     return setIsValid(true)
    } 

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Arrival Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Departure Date"
          format="MM/dd/yyyy"
          value={selectedDateTwo}
          onChange={handleDateChangeTwo}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        {
          isValid ?
          ( <div><p className="text">{`Your are about to book for ${differenceInDays} ${differenceInDays === 1 ? 'night' : 'nights'}`}</p>
          <CustomButton>Pay ${ parseInt(price) * parseInt(differenceInDays )}</CustomButton>
          </div>) : ''
        }

        {
          !isValid ?
          <div>Enter a valid arrival and departure date</div>  : ''
        }
        
      </Grid>
    </MuiPickersUtilsProvider>
    )
}

export default DatePicker;