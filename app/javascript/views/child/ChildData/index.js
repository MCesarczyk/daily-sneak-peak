import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Tile from "./Tile";

const ChildData = () => {
  const [child, setChild] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const loadChild = () => {
    const url = `../api/v1/children/${id}`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        setChild(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadChild();
  }, []);

  const reloadChild = () => {
    setChild({});
    loadChild();
  };

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
      child={child}
      reloadChild={reloadChild}
      onActionCall={() => deleteChild(child?.id)}
    />
  );
};

export default ChildData;