import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChildData, fetchChildData,
  clearActivities, fetchActivities,
  selectChildGotoList,
} from "../childSlice";
import Tile from "./Tile";

const ChildData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotoList = useSelector(selectChildGotoList);

  useEffect(() => {
    if (gotoList === true) {
      navigate('/children');
    }
  }, [gotoList])

  useEffect(() => {
    dispatch(fetchChildData(id));
    dispatch(fetchActivities());

    return (() => {
      dispatch(clearChildData());
      dispatch(clearActivities());
    });
  }, []);

  return (
    <Tile />
  );
};

export default ChildData;