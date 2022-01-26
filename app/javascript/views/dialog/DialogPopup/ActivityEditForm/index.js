import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChildData } from "../../../child/childSlice";
import {
  selectItemIndex, selectActivitiesList,
  updateActivity, deleteActivity, setActivityId
} from "../../../activities/activitiesSlice";
import DialogPopupFooter from "../Footer";
import DialogHeader from "../Header";
import ActivitiesForm from "../ActivitiesForm";

const ActivityEditForm = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivitiesList);
  const itemIndex = useSelector(selectItemIndex);

  const [activity, setActivity] = useState({});

  const loadActivity = () => {
    const currentActivity = activities[itemIndex];

    setActivity(currentActivity);
    setActivityId(currentActivity.id);
  };

  const unloadActivity = () => {
    setActivity({});
  };

  useEffect(() => {
    loadActivity();

    return (() => {
      unloadActivity();
    })
  }, []);

  const onFinish = () => {
    dispatch(updateActivity(activity));
  };

  return (
    <>
      <DialogHeader child={child} />
      <ActivitiesForm
        activity={activity}
        setActivity={setActivity}
      />
      <DialogPopupFooter
        onFinish={onFinish}
        onDelete={() => dispatch(deleteActivity(activity?.id))}
      />
    </>
  );
};

export default ActivityEditForm;