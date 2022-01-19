import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormLabel, Input } from '@mui/material';
import { Typography } from "@mui/material";
import { selectChildData } from "../../../child/childSlice";
import {
  selectAnswers, selectPage, selectQuestion,
  setAnswers, setDialogClosed, setQuestion
} from "../../dialogSlice";
import { questions } from "../../../../assets/fixtures";
import DialogHeader from "../Header";
import Navigation from "./Navigation";
import SingleOption from "./SingleOption";

const ActivitiesWizard = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);
  const page = useSelector(selectPage);
  const question = useSelector(selectQuestion);
  const answers = useSelector(selectAnswers);
  const maxPage = questions.length;

  const [value, setValue] = useState("1");

  const onValueChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    dispatch(setQuestion(questions[page - 1]));
  }, [page]);

  useEffect(() => {
    setValue(
      question.type === "single" ?
        "1" : question.type === "number" ?
          "0" : ""
    );
  }, [question])

  const saveAnswer = () => {
    dispatch(
      setAnswers([
        ...answers,
        {
          id: question.id,
          label: question.label,
          question: question.question,
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
      saveAnswer();
      dispatch(setDialogClosed());

      const finalAnswers = answers;
      console.log(finalAnswers);
    } else if (page < maxPage) {
      saveAnswer();
    } else return;
  };

  return (
    <>
      <DialogHeader child={child} />
      <Typography id="modal-title" variant="h6" component="h2">
        {question.type === "single" ?
          <SingleOption
            label={question.question}
            name={question.label}
            value={value}
            onChange={onValueChange}
            options={question.options}
          />
          :
          <>
            <FormLabel id="demo-input-label">
              {question.question}
            </FormLabel>
            <Input
              autoFocus
              type={question.type}
              value={value}
              onChange={onValueChange}
            />
          </>
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