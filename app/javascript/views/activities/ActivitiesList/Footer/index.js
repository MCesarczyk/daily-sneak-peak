import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../dialog/DialogPopup";
import Confirmation from "../../../../components/Confirmation";

const ActivitiesListFooter = ({ active, onDelete }) => (
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
            form='edit-details'
            buttonLabel="Edit"
            formTitle="Edit daily activities"
          />
        </>
      }
      <DialogPopup
        form='add-details'
        buttonLabel="Add+"
        formTitle="Add daily activities"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default ActivitiesListFooter;