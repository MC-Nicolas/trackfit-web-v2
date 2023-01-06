import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material';

interface AutocompleteProps {
  label: string;
  value: string | undefined;
  options: string[];
  onChange: any;
}
const useStyles = makeStyles({
  paper: {
    color: 'white',
    backgroundColor: '#212121',
  },
});

const CssTextField = styled(TextField)({
  '& .MuiInput-input': {
    color: 'white',
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

const ComboBox = ({ label, value, options, onChange }: AutocompleteProps) => {
  const classes = useStyles();

  return (
    <Autocomplete
      value={value ?? ''}
      onChange={onChange}
      classes={{ paper: classes.paper }}
      freeSolo
      disablePortal
      options={options}
      sx={{ width: 300, color: 'white' }}
      renderInput={(params) => <CssTextField {...params} label={label} />}
    />
  );
};

export default ComboBox;
