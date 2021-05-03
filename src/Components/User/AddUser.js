import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setUserAge] = useState("");

  const [isValid, setIsValid] = useState("");

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
    setUsername("");
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
    setUserAge("");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setIsValid({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsValid({
        title: 'Invalid input',
        message: 'Please enter a valid age (non-empty values).'
      });
      return;
    };

    console.log(enteredUsername);
    console.log(enteredAge);

    props.onAddUser(enteredUsername, enteredAge);
  };

  const errorHandler = () => {
    setIsValid(null);
  }

  return (
    <div>
      {isValid && <ErrorModal title={isValid.title} messages={isValid.message} onConfirm={errorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={userNameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="text"
              value={enteredAge}
              onChange={userAgeChangeHandler}
            />
          </div>
          <div>
            <Button type={"submit"}>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
