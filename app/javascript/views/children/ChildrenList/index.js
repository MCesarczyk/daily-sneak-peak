import React, { useEffect, useState } from 'react';
import { Space } from '../../../components/Space';
import ListView from './List';
import DialogPopup from '../../dialog/DialogPopup';
import { getDataFromApi } from '../../../assets/utils/handleApiCalls';

const ChildrenList = () => {
  const [children, setChildren] = useState({});

  const loadChildren = () => {
    const url = "api/v1/children";
    getDataFromApi(url)
      .then((data) => {
        setChildren(data);
      })
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