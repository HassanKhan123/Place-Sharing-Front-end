import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Builing",
    description: "One of the most famous sky scrapers in the world",
    image:
      "https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7485492,
      lng: -73.9879522,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Builing",
    description: "One of the most famous sky scrapers in the world",
    image:
      "https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7485492,
      lng: -73.9879522,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );
  const updatePlaceSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs)
}
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={updatePlaceSubmitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        errorText="Please enter a valid description (atleast 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
