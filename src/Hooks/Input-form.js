import { useState } from "react";

const useInput = (valueValidation) => {
  const [enterValue, setValue] = useState("");
  const [enterValueIsTouched, setEnterValueIsTouched] = useState(false);
  const validataValue = valueValidation(enterValue);
  const validUser = !validataValue && enterValueIsTouched;

  const valueHandler = (event) => {
    setValue(event.target.value);
  };

  const focusHandler = (event) => {
    setEnterValueIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setEnterValueIsTouched(false);
  };

  return {
    value: enterValue,
    isValid: validataValue,
    hasError: validUser,
    valueChangeHandler: valueHandler,
    inputBlurHandler: focusHandler,
    reset: reset,
  };
};

export default useInput;
