import useBasic from "../Hooks/Basic-form";

const isEmptyCheck = (value) => value.trim() !== "";
const isEmptyCheckEmail = (value) => value.trim().includes("@");

const BasicForm = (props) => {
  const {
    value: name,
    valueError: nameError,
    valueHandler: nameHandler,
    valueBlurHandler: nameBlurHandler,
    valueValidation: nameValidation,
    resetValue: resetName,
  } = useBasic(isEmptyCheck);
  const {
    value: lastName,
    valueError: lastNameError,
    valueHandler: lastNameHandler,
    valueBlurHandler: lastNameBlurHandler,
    valueValidation: lastNameValidation,
    resetValue: lastNameresetName,
  } = useBasic(isEmptyCheck);
  const {
    value: email,
    valueError: emailError,
    valueHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    valueValidation: emailValidation,
    resetValue: emailresetName,
  } = useBasic(isEmptyCheckEmail);

  const submitHandler = (event) => {
    event.preventDefault();
    resetName();
    lastNameresetName();
    emailresetName();
  };
  let formValidation = nameValidation && lastNameValidation && emailValidation;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name"></label>
          First Name
          <input type="text" id="name" value={name} onChange={nameHandler} onBlur={nameBlurHandler} />
          {nameError && <p>Please enter the Name!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastName} onChange={lastNameHandler} onBlur={lastNameBlurHandler} />
          {lastNameError && <p>Please enter the Last Name!</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={email} onChange={emailHandler} onBlur={emailBlurHandler} />
        {emailError && <p>Please enter the Correct Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValidation}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
