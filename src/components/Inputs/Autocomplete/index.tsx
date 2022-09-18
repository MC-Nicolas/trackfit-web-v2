import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AutocompleteProps {
  label: string;
  value: string | undefined;
  options: string[];
  onChange: any;
}

const ComboBox = ({ label, value, options, onChange }: AutocompleteProps) => {
  return (
    <Autocomplete
      value={value ?? ''}
      onChange={onChange}
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default ComboBox;
