import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChildData, clearChildData, fetchChildData,
  clearActivities, fetchActivities,
} from "../childSlice";
import {
  removeDataFromApi
} from "../../../assets/utils/handleApiCalls";
import Tile from "./Tile";

const ChildData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const child = useSelector(selectChildData);

  useEffect(() => {
    dispatch(fetchChildData(id));
    dispatch(fetchActivities());

    return (() => {
      dispatch(clearChildData());
      dispatch(clearActivities());
    });
  }, []);

  const deleteChild = (id) => {
    const url = `../api/v1/children/${id}`;
    removeDataFromApi(url)
      .then(() => {
        navigate('/children');
      })
  };

  return (
    <Tile
      onDelete={() => deleteChild(child?.id)}
    />
  );
};

export default ChildData;