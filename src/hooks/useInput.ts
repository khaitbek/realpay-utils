import { type ChangeEvent, useState } from "react";

type TEmptyState = { [key: string]: string };

export const useInput = (props: TEmptyState) => {
  const [inputValue, setInputValue] = useState<TEmptyState>(props);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev: TEmptyState) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { inputValue, handleChange, setInputValue };
};
