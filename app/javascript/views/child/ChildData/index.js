import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { 
  clearChildData, selectActivities, selectChild, setActivities, setChild 
} from "../childSlice";
import { 
  getDataFromApi, removeDataFromApi 
} from "../../../assets/utils/handleApiCalls";
import Tile from "./Tile";

const ChildData = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const child = useSelector(selectChild);
  const activities = useSelector(selectActivities);

  const childDetails = {
    ...child,
    activities
  };

  const loadChild = () => {
    const url = `../api/v1/children/${id}`;
    getDataFromApi(url)
      .then(child => {
        dispatch(setChild(child));
      })
  };

  const reloadChild = () => {
    dispatch(setChild({}));
    loadChild();
  };

  const loadActivities = () => {
    const url = `../api/v1/children/${id}/activities`;
    getDataFromApi(url)
      .then(activities => {
        dispatch(setActivities(activities));
      })
  };

  const reloadActivities = () => {
    dispatch(setActivities([]));
    loadActivities();
  };

  useEffect(() => {
    loadChild();
    loadActivities();

    return (() => {
      dispatch(clearChildData());
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
      child={childDetails}
      reloadChild={reloadChild}
      reloadActivities={reloadActivities}
      onDelete={() => deleteChild(child?.id)}
    />
  );
};

export default ChildData;