import React, { useEffect, useState } from 'react';
import { Space } from '../../../components/Space';
import ListView from './List';
import NewChildDialog from './NewChildDialog';

const ChildrenList = () => {
  const [children, setChildren] = useState({});

  const putData = (data) => {
    let array = [];

    data.forEach(child => {
      const childData = {
        key: child.id,
        id: child.id,
        name: child.name,
        surname: child.surname,
        group: child.group
      };

      array = [
        ...array,
        childData
      ];

      setChildren(array);
    })
  };

  const loadChildren = () => {
    const url = "api/v1/children/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        putData(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadChildren();
  }, []);

  return (
    <Space>
      <ListView children={children} />
      <NewChildDialog />
    </Space>
  );
};

export default ChildrenList;