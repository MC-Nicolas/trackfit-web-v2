import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';

interface AutocompleteProps {
  label: string;
  value: string | undefined;
  options: string[];
  onChange: any;
}

const CssTextField = styled(TextField)({
  '& > *': {
    color: 'white!important',
  },
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-paper': {
    color: 'white',
    backgroundColor: '#212121',
  },
});

const ComboBox = ({ label, value, options, onChange }: AutocompleteProps) => {
  return (
    <StyledAutocomplete
      value={value ?? ''}
      onChange={onChange}
      freeSolo
      disablePortal
      options={options}
      sx={{ width: 300, color: 'white' }}
      renderInput={(params) => <CssTextField {...params} label={label} />}
    />
  );
};

export default ComboBox;
