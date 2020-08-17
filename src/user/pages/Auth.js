import React from "react";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
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

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form className="authentication-form" onSubmit={loginHandler}>
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
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
