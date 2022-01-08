import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";
import Confirmation from "../../../../../components/Confirmation";
import { useSelector } from "react-redux";
import { selectChildData } from "../../../childSlice";

const TileFooter = ({ reloadChild, onDelete }) => {
  const child = useSelector(selectChildData);

  return (
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
  )
};

export default TileFooter;