import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChildData, selectItemIndex, setItemIndex,
  setActivity, selectActivities, selectActivity, reloadActivities,
} from "../../../childSlice";
import { removeDataFromApi } from "../../../../../assets/utils/handleApiCalls";
import { sortActivityData } from "../../../../../assets/utils/sortActivityData";
import { Typography } from "@mui/material";
import Pager from "../../../../../components/Pager";
import ActivitiesListFooter from "./Footer";
import { Label } from "../../../../../components/Label";
import { Space } from "../../../../../components/Space";
import { ListItem, ListItemContent, ListWrapper } from "./styled";

const ActivitiesList = () => {
  const dispatch = useDispatch();
  const activity = useSelector(selectActivity);
  const itemIndex = useSelector(selectItemIndex);
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivities);
  const sortedData = sortActivityData(activity);
  const activitiesLength = activities.length;

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
        dispatch(reloadActivities());
        dispatch(setItemIndex(itemIndex - 1));
      })
  };

  return (
    <>
      <ListWrapper>
        {activitiesLength > 0 ?
          <>
            <Pager
              minIndex={0}
              maxIndex={activitiesLength - 1}
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
          </>
          : <Space justify="center" >
            <Typography>
              There is no entry yet
            </Typography>
          </Space>
        }
        <ActivitiesListFooter
          active={activitiesLength > 0}
          reloadActivities={reloadActivities}
          onDelete={deleteActivity}
        />
      </ListWrapper>
    </>
  )
};

export default ActivitiesList;