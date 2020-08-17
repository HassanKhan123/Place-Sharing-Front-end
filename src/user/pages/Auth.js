import React, { useState,useContext } from "react";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {AuthContext} from '../../shared/context/auth-context'
import "./Auth.css";

const Auth = () => {
  const auth=useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      passowrd: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
            ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.passowrd.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: "", isValid: false },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login()
  };

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? "Login Required" : "SIGNUP REQUIRED"}</h2>
      <hr />
      <form className="authentication-form" onSubmit={loginHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            label="Name"
            element="input"
            errorText="Please enter a valid name."
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          element="input"
          errorText="Please enter a valid email."
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          type="password"
          id="passowrd"
          label="Password"
          element="input"
          errorText="Please enter a valid passowrd (atleast 5 characters)."
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
