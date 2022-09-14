/* eslint-disable no-unused-vars */
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
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
