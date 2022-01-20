import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivityData } from "../../../activities/activitiesSlice";
import { selectAnswers } from "../../dialogSlice";
import ActivitiesForm from "../ActivitiesForm";

const ActivitySummary = () => {
  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);
  const [activity, setActivity] = useState({});

  useEffect(() => {
    dispatch(setActivityData(activity));
  }, [activity])

  const loadActivity = () => {
    setActivity(Object.fromEntries(answers.map(answer => ([
      answer.prop, answer.answer
    ]))));
  };

  useEffect(() => {
    loadActivity();
  }, []);

  return (
    <ActivitiesForm
      activity={activity}
      setActivity={setActivity}
    />
  )
};

export default ActivitySummary;