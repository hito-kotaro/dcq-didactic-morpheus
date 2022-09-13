import React, { VFC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useSelectForm from './useSelectForm';
import { selectMenuType } from './selectItemType';

type Props = {
  label: string;

  menu: selectMenuType[];
};

const SelectForm: VFC<Props> = (props) => {
  const { label, menu } = props;
  const handler = useSelectForm();

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={handler.value}
        label={label}
        onChange={handler.handler}
      >
        {menu.map((m: selectMenuType) => (
          <MenuItem value={m.id}>{m.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
