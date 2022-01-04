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
        buttonLabel="Edit"
        formTitle="Edit child details"
      />
      <Confirmation
        buttonLabel={'Delete'}
        popupContent={`You're about to delete ${child?.name} ${child?.surname}`}
        onActionCall={onActionCall}
      />
      <DialogPopup
        reloadChild={reloadChild}
        form='details'
        buttonLabel="Details+"
        formTitle="Add daily details"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default Footer;