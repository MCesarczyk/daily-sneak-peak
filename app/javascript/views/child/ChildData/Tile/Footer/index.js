import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";
import Confirmation from "../../../../../components/Confirmation";

const Footer = ({ reloadChild, child, onActionCall }) => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <DialogPopup
        reloadChild={reloadChild}
        form='edit'
        buttonLabel="Edit child"
        formTitle="Edit child details"
      />
      <Confirmation
        buttonLabel="Delete child"
        popupContent={`You're about to delete ${child?.name} ${child?.surname}`}
        onActionCall={onActionCall}
      />
      <DialogPopup
        reloadChild={reloadChild}
        child={child}
        form='add-details'
        buttonLabel="Add details+"
        formTitle="Add daily details"
      />
      <DialogPopup
        reloadChild={reloadChild}
        child={child}
        form='edit-details'
        buttonLabel="Edit details"
        formTitle="Edit daily details"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default Footer;