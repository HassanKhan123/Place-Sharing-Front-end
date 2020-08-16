import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewPlace;
