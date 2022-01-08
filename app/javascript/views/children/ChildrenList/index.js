import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  clearChildrenList, selectChildren, setChildren 
} from '../childrenSlice';
import { getDataFromApi } from '../../../assets/utils/handleApiCalls';
import { Space } from '../../../components/Space';
import ListView from './List';
import DialogPopup from '../../dialog/DialogPopup';

const ChildrenList = () => {
  const dispatch = useDispatch();

  const children = useSelector(selectChildren);

  const loadChildren = () => {
    const url = "api/v1/children";
    getDataFromApi(url)
      .then((data) => {
        dispatch(setChildren(data));
      })
  };

  useEffect(() => {
    loadChildren();

    return (() => {
      dispatch(clearChildrenList());
    });
  }, []);

  const reloadChildren = () => {
    dispatch(setChildren([]));
    loadChildren();
  };

  return (
    <Space>
      <ListView />
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