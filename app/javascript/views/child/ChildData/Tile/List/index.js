import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectActivities, selectChildData } from "../../../childSlice";
import { removeDataFromApi } from "../../../../../assets/utils/handleApiCalls";
import { Button } from "@mui/material";
import ActivitiesListFooter from "./Footer";
import { Label } from "../../../../../components/Label";
import { Space } from "../../../../../components/Space";
import { ListItem, ListItemContent, ListWrapper } from "./styled";

const ActivitiesList = ({ reloadActivities }) => {
  const [activity, setActivity] = useState({});
  const [itemIndex, setItemIndex] = useState(0);

  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivities);

  useEffect(() => {
    activities?.length > 0 && setActivity(activities[itemIndex]);

    return (() => {
      setActivity({});
    })
  }, [activities, itemIndex])

  const increaseIndex = () => {
    if (itemIndex < activities.length - 1) {
      setItemIndex(itemIndex + 1);
    }
  };

  const decreaseIndex = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  const sortedData = [
    { id: 1, name: 'breakfast', value: activity?.breakfast },
    { id: 2, name: 'soup', value: activity?.soup },
    { id: 3, name: 'secondcourse', value: activity?.second },
    { id: 4, name: 'snack', value: activity?.snack },
    { id: 5, name: 'sleep', value: activity?.sleep },
    { id: 6, name: 'pee', value: activity?.pee },
    { id: 7, name: 'poo', value: activity?.poo },
    { id: 8, name: 'supplies', value: activity?.supplies },
    { id: 9, name: 'teacher\'s comment', value: activity?.comment }
  ];

  const deleteActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities/${activity?.id}`;
    removeDataFromApi(url)
      .then(() => {
        reloadActivities();
      })
  };

  return (
    <ListWrapper>
      <Space align="center" justify="center" style={{ width: "100%" }} >
        <Button onClick={increaseIndex} >{"<"}</Button>
        {activity?.created_at?.substring(0, 10)}
        <Button onClick={decreaseIndex} >{">"}</Button>
      </Space>
      <ul>
        {sortedData && sortedData.map(element => (
          <ListItem key={element.id}>
            <Label width="50%" alignment="right">
              {element.name}
            </Label>
            <ListItemContent>
              {element.value}
            </ListItemContent>
          </ListItem>
        ))}
      </ul>
      <ActivitiesListFooter
        itemIndex={itemIndex}
        reloadActivities={reloadActivities}
        onDelete={deleteActivity}
      />
    </ListWrapper>
  )
};

export default ActivitiesList;