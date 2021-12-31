import React from "react";
import Image from "./Image";
import Name from "./Name";
import {
  StyledTile,
} from "./styled";

const Tile = ({
  child
}) => {
  return (
    <StyledTile>
      <Image />
      <Name
        name={child.name}
        surname={child.surname}
      />
    </StyledTile>
  );
};

export default Tile;