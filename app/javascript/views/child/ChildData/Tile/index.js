import React from "react";
import TileFooter from "./Footer";
import Image from "./Image";
import ActivitiesList from "./List";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = ({ child, reloadChild, reloadActivities, onDelete }) => {
  return (
    <StyledTile>
      <Image />
      <Name
        name={child.name + ' ' + child.surname}
        group={child.group}
      />
      <ActivitiesList
        child={child}
        reloadActivities={reloadActivities}
      />
      <TileFooter
        child={child}
        reloadChild={reloadChild}
        onDelete={onDelete}
      />
    </StyledTile>
  );
};

export default Tile;