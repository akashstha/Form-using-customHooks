import { useReducer } from "react";

const stateIniitalValues = {
  value: "",
  isTouched: false,
};

const reducerFN = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return { stateIniitalValues };
};

const useBasic = (valditaionFn) => {
  const [initialState, dispatchFN] = useReducer(reducerFN, stateIniitalValues);

  let valueValidation = valditaionFn(initialState.value);
  let valueError = !valueValidation && initialState.isTouched;

  const valueHandler = (event) => {
    dispatchFN({ type: "INPUT", value: event.target.value });
  };
  const valueBlurHandler = () => {
    dispatchFN({ type: "BLUR" });
  };
  const resetValue = () => {
    dispatchFN({ type: "RESET" });
  };
  return {
    value: initialState.value,
    valueError,
    valueHandler,
    valueBlurHandler,
    valueValidation,
    resetValue,
  };
};

export default useBasic;
