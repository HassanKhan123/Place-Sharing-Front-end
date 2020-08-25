import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from '../../shared/components/FormElements/Button'
import "./PlaceList.css";

const PlaceList = ({ items,onDeletePlace }) => {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem key={place.id} place={place} onDelete={onDeletePlace}/>
      ))}
    </ul>
  );
};

export default PlaceList;
