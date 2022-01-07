import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Tile from "./Tile";
import { getDataFromApi, removeDataFromApi } from "../../../assets/utils/handleApiCalls";

const ChildData = () => {
  const [child, setChild] = useState({});
  const [activities, setActivities] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const childDetails = {
    ...child,
    activities
  };

  const loadChild = () => {
    const url = `../api/v1/children/${id}`;
    getDataFromApi(url)
      .then(child => {
        setChild(child);
      })
  };

  const reloadChild = () => {
    setChild({});
    loadChild();
  };

  const loadActivities = () => {
    const url = `../api/v1/children/${id}/activities`;
    getDataFromApi(url)
      .then(activities => {
        setActivities(activities);
      })
  };

  const reloadActivities = () => {
    setActivities([]);
    loadActivities();
  };

  useEffect(() => {
    loadChild();
    loadActivities();
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