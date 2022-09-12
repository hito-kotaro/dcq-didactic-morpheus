/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

export type inputHandlerType = {
  input: string;
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
