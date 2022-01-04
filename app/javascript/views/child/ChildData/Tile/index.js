import React from "react";
import Footer from "./Footer";
import Image from "./Image";
import List from "./List";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = ({
  child, reloadChild
}) => {
  return (
    <StyledTile>
      <Image />
      <Name
        name={child.name + ' ' + child.surname}
        group={child.group}
      />
      <List child={child} />
      <Footer reloadChild={reloadChild} id={child?.id} />
    </StyledTile>
  );
};

export default Tile;