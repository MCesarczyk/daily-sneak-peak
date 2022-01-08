import React from "react";
import { useSelector } from "react-redux";
import { selectChildData } from "../../childSlice";
import TileFooter from "./Footer";
import Image from "./Image";
import ActivitiesList from "./List";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = ({ reloadChild, reloadActivities, onDelete }) => {
  const child = useSelector(selectChildData);

  return (
    <StyledTile>
      <Image />
      <Name
        name={child.name + ' ' + child.surname}
        group={child.group}
      />
      <ActivitiesList
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