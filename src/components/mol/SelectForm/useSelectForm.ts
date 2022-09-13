import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

const useSelectForm = () => {
  const [value, setValue] = useState('');

  const handler = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return { value, handler };
};

export default useSelectForm;
