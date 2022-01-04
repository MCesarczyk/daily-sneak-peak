import React from "react";
import { Button, Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";

const Footer = () => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <DialogPopup
        form='edit'
        buttonLabel="Edit"
        formTitle="Edit child data"
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default Footer;