import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { selectChildData } from "../../../child/childSlice";
import DialogHeader from "../Header";
import Navigation from "./Navigation";
import { questions } from "../../../../assets/fixtures";
import { selectPage, selectQuestion, setQuestion } from "../../dialogSlice";

const ActivitiesWizard = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);
  const page = useSelector(selectPage);
  const question = useSelector(selectQuestion);
  
  useEffect(() => {
    dispatch(setQuestion(questions[page-1]));
  }, [page]);

  return (
    <>
      <DialogHeader child={child} />
      <Typography id="modal-title" variant="h6" component="h2">
        WIZARD
      </Typography>
      <Navigation maxPage={questions.length} />
    </>
  )
};

export default ActivitiesWizard;