import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActivities, selectActivity, selectChildData, selectItemIndex,
  setActivity,
} from "../../../childSlice";
import { removeDataFromApi } from "../../../../../assets/utils/handleApiCalls";
import { sortActivityData } from "../../../../../assets/utils/sortActivityData";
import Pager from "../../../../../components/Pager";
import ActivitiesListFooter from "./Footer";
import { Label } from "../../../../../components/Label";
import { ListItem, ListItemContent, ListWrapper } from "./styled";

const ActivitiesList = ({ reloadActivities }) => {
  const dispatch = useDispatch();
  const activity = useSelector(selectActivity);
  const itemIndex = useSelector(selectItemIndex);
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivities);
  const sortedData = sortActivityData(activity);

  useEffect(() => {
    activities?.length > 0 && dispatch(setActivity(activities[itemIndex]));

    return (() => {
      dispatch(setActivity({}));
    })
  }, [activities, itemIndex])

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