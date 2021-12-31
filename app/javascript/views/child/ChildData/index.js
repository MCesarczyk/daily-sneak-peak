import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tile from "../../../components/Tile";
import { Wrapper } from "../../../components/Wrapper";

const ChildData = () => {
  const [child, setChild] = useState({});

  const { id } = useParams();

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

  return (
    // <Wrapper>
      <Tile child={child} />
    // </Wrapper>
  );
};

export default ChildData;