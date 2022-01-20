import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormLabel, Input } from '@mui/material';
import { Typography } from "@mui/material";
import { selectChildData } from "../../../child/childSlice";
import {
  selectAnswers, selectPage, selectQuestion,
  setAnswers, setDialogClosed, setQuestion
} from "../../dialogSlice";
import { postActivity, selectActivityData } from "../../../activities/activitiesSlice";
import { questions } from "../../../../assets/fixtures";
import ActivitySummary from "../ActivitySummary";
import DialogHeader from "../Header";
import Navigation from "./Navigation";
import SingleOption from "./SingleOption";

const ActivitiesWizard = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);
  const page = useSelector(selectPage);
  const question = useSelector(selectQuestion);
  const answers = useSelector(selectAnswers);
  const activity = useSelector(selectActivityData);
  const maxPage = questions.length + 1;

  const [value, setValue] = useState("1");

  const onValueChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    dispatch(setQuestion(questions[page - 1]));
  }, [page]);

  useEffect(() => {
    setValue(
      question?.type === "single" ?
        "1" : question?.type === "number" ?
          "0" : ""
    );
  }, [question])

  const saveAnswer = () => {
    dispatch(
      setAnswers([
        ...answers,
        {
          id: question.id,
          prop: question.prop,
          question: question.phrase,
          value: value,
          answer: question.type === "single" ?
            question?.options?.filter(({ id }) => id == value)[0].label :
            value
        }
      ])
    );
  };

  const onFinish = () => {
    if (page == maxPage) {
      dispatch(setDialogClosed());
      dispatch(postActivity(activity));
    } else if (page < maxPage) {
      saveAnswer();
    } else return;
  };

  return (
    <>
      <DialogHeader child={child} />
      <Typography id="modal-title" variant="h6" component="h2">
        {page < maxPage &&
          (question?.type === "single" ?
            <SingleOption
              label={question.phrase}
              name={question.label}
              value={value}
              onChange={onValueChange}
              options={question.options}
            />
            :
            <>
              <FormLabel id="demo-input-label">
                {question.phrase}
              </FormLabel>
              <Input
                autoFocus
                type={question.type}
                value={value}
                onChange={onValueChange}
              />
            </>
          )
        }
        {page == maxPage &&
          <ActivitySummary />
        }
      </Typography>
      <Navigation
        maxPage={maxPage}
        onUpdate={onFinish}
      />
    </>
  )
};

export default ActivitiesWizard;