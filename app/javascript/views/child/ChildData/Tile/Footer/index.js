import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";

const Footer = ({ reloadChild }) => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <DialogPopup
        reloadChild={reloadChild}
        form='edit'
        buttonLabel="Edit"
        formTitle="Edit child details"
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