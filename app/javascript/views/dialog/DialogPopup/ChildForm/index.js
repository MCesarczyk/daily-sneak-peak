import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reloadChildData, selectChildData } from "../../../child/childSlice";
import { reloadChildrenList } from "../../../children/childrenSlice";
import { selectDialogOpen, selectDialogType, setDialogClosed } from "../../dialogSlice";
import { sendDataToApi } from "../../../../assets/utils/handleApiCalls";
import { groups } from "../../../../assets/fixtures";
import { MenuItem, TextField, Typography } from "@mui/material";
import DialogPopupFooter from "../Footer";
import { List, ListItem } from "./styled";

const ChildForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const apiData = useSelector(selectChildData);
  const type = useSelector(selectDialogType);
  const open = useSelector(selectDialogOpen);

  const [child, setChild] = useState({});

  const onFirstChange = ({ target }) => {
    setChild({
      ...child,
      name: target.value,
    });
  };

  const onLastChange = ({ target }) => {
    setChild({
      ...child,
      surname: target.value,
    });
  };

  const onGroupChange = ({ target }) => {
    setChild({
      ...child,
      group: target.value,
    });
  };

  const fetchApiChild = () => {
    if (Object.keys(apiData).length > 0) {
      setChild(apiData);
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      fetchApiChild();
    }
  }, [type, open, apiData]);

  const addChild = () => {
    const url = "api/v1/children";
    sendDataToApi(url, 'post', child)
      .then(() => {
        dispatch(setDialogClosed());
      })
      .then(() => {
        dispatch(reloadChildrenList());
      })
  };

  const updateChild = () => {
    const url = `../api/v1/children/${id}`;
    sendDataToApi(url, 'put', child)
      .then(() => {
        dispatch(setDialogClosed());
      })
      .then(() => {
        dispatch(reloadChildData(id));
      })
  };

  const onFinish = () => {
    type === 'add' && addChild();
    type === 'edit' && updateChild(id);
  };

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
            Personal data
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            required
            id="firstName"
            label="First name"
            value={child.name || ''}
            onChange={onFirstChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            required
            id="lastName"
            label="Last name"
            value={child.surname || ''}
            onChange={onLastChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            id="group"
            select
            label="Group"
            value={child.group || ''}
            onChange={onGroupChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {groups.map(group => (
              <MenuItem key={group.id} value={group.label}>
                {group.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
      </List >
      <DialogPopupFooter onFinish={onFinish} />
    </>
  );
};

export default ChildForm;