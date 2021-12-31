import React from "react";
import Image from "./Image";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = ({
  child
}) => {
  return (
    <StyledTile>
      <Image />
      <Name
        name={child.name+' '+child.surname}
        group={child.group}
      />
    </StyledTile>
  );
};

export default Tile;