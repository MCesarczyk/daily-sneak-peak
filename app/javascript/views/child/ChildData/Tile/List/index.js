import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActivities, selectActivity, selectChildData, selectItemIndex,
  setActivity,
} from "../../../childSlice";
import { removeDataFromApi } from "../../../../../assets/utils/handleApiCalls";
import ActivitiesListFooter from "./Footer";
import { Label } from "../../../../../components/Label";
import { ListItem, ListItemContent, ListWrapper } from "./styled";
import Pager from "../../../../../components/Pager";

const ActivitiesList = ({ reloadActivities }) => {
  const dispatch = useDispatch();

  const activity = useSelector(selectActivity);
  const itemIndex = useSelector(selectItemIndex);
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivities);

  useEffect(() => {
    activities?.length > 0 && dispatch(setActivity(activities[itemIndex]));

    return (() => {
      dispatch(setActivity({}));
    })
  }, [activities, itemIndex])

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
      <Pager
        minIndex={0}
        maxIndex={activities.length - 1}
        content={activity?.created_at?.substring(0, 10)}
      />
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
        reloadActivities={reloadActivities}
        onDelete={deleteActivity}
      />
    </ListWrapper>
  )
};

export default ActivitiesList;