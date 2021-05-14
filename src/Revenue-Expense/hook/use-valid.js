import { useState } from "react";

const useValid = (input) => {
  const isNotEmpty = (value) => {
    if (typeof value === 'string'){
      return value !== "" 
    } else {
      return !isNaN(input);
    }
  };

  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = isNotEmpty(input);
  const errorOccur = !inputIsValid && isTouched;

  const inputBlur = () => {
    setIsTouched(true);
  };

  const inputFocus = () => {
    setIsTouched(false);
  };

  const reset = () => {
    setIsTouched(false);
  };

  return {
    isValid: inputIsValid,
    errorOccur,
    inputBlur,
    inputFocus,
    reset,
  };
};

export default useValid;
