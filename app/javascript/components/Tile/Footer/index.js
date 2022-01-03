import React from "react";
import { Button, Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";

const Footer = () => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <Button>Edit</Button>
    </ButtonsWrapper>
  </StyledFooter>
);

export default Footer;