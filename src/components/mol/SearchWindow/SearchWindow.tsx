import { TextField } from '@mui/material';
import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  placeholder: string;
  handler: inputHandlerType;
};

const SearchWindow: VFC<Props> = (props) => {
  const { placeholder, handler } = props;
  return (
    <div className="w-full">
      <TextField
        fullWidth
        type="text"
        placeholder={placeholder}
        variant="outlined"
        onChange={handler.onChange}
        value={handler.value}
      />
    </div>
  );
};

export default SearchWindow;
