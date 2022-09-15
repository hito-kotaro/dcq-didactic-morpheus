import React, { VFC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { selectMenuType } from './selectItemType';
import { selectHandlerType } from '../../../types/inputHandlerType';

type Props = {
  label: string;
  menu: selectMenuType[];
  handler: selectHandlerType;
};

const SelectForm: VFC<Props> = (props) => {
  const { label, menu, handler } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={handler.value}
        label={label}
        onChange={handler.handleChange}
      >
        {menu.map((m: selectMenuType) => (
          <MenuItem value={m.id}>{m.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
