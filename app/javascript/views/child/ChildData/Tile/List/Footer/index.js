import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../../dialog/DialogPopup";
import Confirmation from "../../../../../../components/Confirmation";

const ActivitiesListFooter = ({ active, reloadActivities, onDelete }) => (
  <StyledFooter>
    {active && <Divider />}
    <ButtonsWrapper>
      {active &&
        <>
          <Confirmation
            buttonLabel="Delete"
            popupContent={`You're about to delete this activity`}
            onActionCall={onDelete}
          />
          <DialogPopup
            reloadActivities={reloadActivities}
            onDelete={onDelete}
            form='edit-details'
            buttonLabel="Edit"
            formTitle="Edit daily activities"
          />
        </>
      }
      <DialogPopup
        reloadActivities={reloadActivities}
        form='add-details'
        buttonLabel="Add+"
        formTitle="Add daily activities"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default ActivitiesListFooter;