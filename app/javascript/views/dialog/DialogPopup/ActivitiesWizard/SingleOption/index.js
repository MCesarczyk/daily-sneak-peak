import React from 'react';
import { 
  Radio, RadioGroup, 
  FormControl, FormControlLabel, FormLabel 
} from '@mui/material';

const SingleOption = ({ label, name, value, onChange, options }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map(option =>
          <FormControlLabel
            key={option.id}
            value={option.id}
            label={option.label}
            control={<Radio />}
          />
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default SingleOption;
