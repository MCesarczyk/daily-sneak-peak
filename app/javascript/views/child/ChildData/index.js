import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Tile from "./Tile";

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
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(child => {
        setChild(child);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const reloadChild = () => {
    setChild({});
    loadChild();
  };

  const loadActivities = () => {
    const url = `../api/v1/children/${id}/activities`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(activities => {
        setActivities(activities);
      })
      .catch((err) => console.log("Error: " + err));
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

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          navigate('/children');

          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => console.error("Error: " + err));
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