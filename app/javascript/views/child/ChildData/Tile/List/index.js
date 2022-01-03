import React from "react";
import { Label } from "../../../../../components/Label";
import { ListItem, StyledList } from "./styled";

const List = ({ child }) => {
  const otherData = [
    { id: 1, name: 'breakfast', value: child?.breakfast },
    { id: 2, name: 'souptime', value: child?.souptime },
    { id: 3, name: 'secondcourse', value: child?.secondcourse },
    { id: 4, name: 'snack', value: child?.snack },
    { id: 5, name: 'sleep', value: child?.sleep },
    { id: 6, name: 'supplies', value: child?.supplies },
    { id: 7, name: 'teacher\'s comment', value: child?.comment }
  ];

  return (
    <StyledList>
      {otherData && otherData.map(element => (
        <ListItem key={element.id}>
          <Label minWidth={10} alignment="right">
            {element.name}
          </Label>
          {element.value}
        </ListItem>
      ))}
    </StyledList>
  )
};

export default List;