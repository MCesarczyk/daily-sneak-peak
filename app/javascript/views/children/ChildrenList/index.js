import React, { useEffect, useState } from 'react';
import { Space } from '../../../components/Space';
import ListView from './List';
import DialogPopup from '../../dialog/DialogPopup';

const ChildrenList = () => {
  const [children, setChildren] = useState({});

  const loadChildren = () => {
    const url = "api/v1/children";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        setChildren(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadChildren();
  }, []);

  const reloadChildren = () => {
    setChildren([]);
    loadChildren();
  };

  return (
    <Space>
      <ListView children={children} />
      <Space vertical justify="start">
        <DialogPopup
          form='add'
          buttonLabel="Add+"
          formTitle="Add new child"
          reloadChildren={reloadChildren}
        />
      </Space>
    </Space>
  );
};

export default ChildrenList;