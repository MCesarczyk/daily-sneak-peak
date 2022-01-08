import { Skeleton } from "@mui/material";
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
      {Object.entries(child).length === 0 ?
        <>
          <Skeleton height={42} />
          <Skeleton height={36} />
        </>
        :
        <Name
          name={child.name + ' ' + child.surname}
          group={child.group}
        />
      }
      <ActivitiesList
        reloadActivities={reloadActivities}
      />
      <TileFooter
        reloadChild={reloadChild}
        onDelete={onDelete}
      />
    </StyledTile>
  );
};

export default Tile;