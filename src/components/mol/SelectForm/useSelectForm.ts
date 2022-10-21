import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { selectItemType } from './selectItemType';

const useSelectForm = () => {
  const [value, setValue] = useState('');
  const [selectItem, setSelectItem] = useState<selectItemType[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const formatSelectItem = (data: any[]) => {
    const items = data.map((d: any) => {
      return { id: d.id, label: d.name };
    });
    setSelectItem(items);
  };

  return { value, setValue, handleChange, formatSelectItem, selectItem };
};

export default useSelectForm;
