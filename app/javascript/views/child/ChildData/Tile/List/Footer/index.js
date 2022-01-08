import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../../dialog/DialogPopup";
import Confirmation from "../../../../../../components/Confirmation";

const ActivitiesListFooter = ({ itemIndex, reloadActivities, onDelete }) => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <DialogPopup
        reloadActivities={reloadActivities}
        form='add-details'
        buttonLabel="Add+"
        formTitle="Add daily activities"
      />
      <Confirmation
        buttonLabel="Delete"
        popupContent={`You're about to delete this activity`}
        onActionCall={onDelete}
      />
      <DialogPopup
        itemIndex={itemIndex}
        reloadActivities={reloadActivities}
        onDelete={onDelete}
        form='edit-details'
        buttonLabel="Edit"
        formTitle="Edit daily activities"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default ActivitiesListFooter;