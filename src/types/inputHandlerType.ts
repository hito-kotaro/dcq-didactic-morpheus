/* eslint-disable no-unused-vars */
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';

export type inputHandlerType = {
  value: string;
  valNum: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeNumber: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  clear: () => void;
};

export type selectHandlerType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};
