import useInput from "../Hooks/Input-form";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailmeInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetemailmeInput();
  };
  const validCSS = nameInputHasError ? "form-control invalid" : "form-control";
  const validEmailCSS = emailInputHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className={validCSS}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
      </div>
      {nameInputHasError && <p className={"error-text"}>Please enter Valide Name!</p>}
      <div className={validEmailCSS}>
        <label htmlFor="email">Your Email</label>
        <input type="text" id="name" onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
      </div>
      {emailInputHasError && <p className={"error-text"}>Please enter Valide Email!</p>}
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
