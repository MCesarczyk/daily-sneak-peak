import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";
import Confirmation from "../../../../../components/Confirmation";

const TileFooter = ({ reloadChild, child, onDelete }) => (
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
        onActionCall={onDelete}
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default TileFooter;