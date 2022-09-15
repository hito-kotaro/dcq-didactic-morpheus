import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

const useSelectForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return { value, handleChange };
};

export default useSelectForm;
