import React, { useState, useContext } from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceItem.css";

const PlaceItem = ({ place }) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const auth = useContext(AuthContext);

  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

  const openConfirmHandler = () => {
    setShowConfirmModal(true);
  };
  const closeConfirmHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("Deleting...");
    setShowConfirmModal(false);
  };
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={place.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closeConfirmHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeConfirmHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={place.image} alt={place.title} />
          </div>

          <div className="place-item__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${place.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={openConfirmHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
