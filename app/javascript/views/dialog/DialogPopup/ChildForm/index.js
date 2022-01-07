import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, TextField, Typography } from "@mui/material";
import { groups } from "../../../../assets/fixtures";
import DialogPopupFooter from "../Footer";
import { List, ListItem } from "./styled";
import { getDataFromApi, sendDataToApi } from "../../../../assets/utils/handleApiCalls";

const ChildForm = ({ type, handleClose, reloadChild, reloadChildren }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [group, setGroup] = useState("");

  const { id } = useParams();

  const onFirstChange = ({ target }) => {
    setName(target.value);
  };

  const onLastChange = ({ target }) => {
    setSurname(target.value);
  };

  const onGroupChange = ({ target }) => {
    setGroup(target.value);
  };

  const child = {
    name,
    surname,
    group,
  };

  const addChild = () => {
    const url = "api/v1/children";
    sendDataToApi(url, 'post', child)
      .then(() => {
        handleClose();
      })
      .then(() => {
        reloadChildren();
      })
  };

  const loadChild = () => {
    const url = `../api/v1/children/${id}`;
    getDataFromApi(url)
      .then((data) => {
        setName(data.name);
        setSurname(data.surname);
        setGroup(data.group);
      })
  };

  useEffect(() => {
    type === 'edit' && loadChild(id);
  }, [type]);

  const updateChild = () => {
    const url = `../api/v1/children/${id}`;
    sendDataToApi(url, 'put', child)
      .then(() => {
        handleClose();
      })
      .then(() => {
        reloadChild();
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
            value={child?.name}
            onChange={onFirstChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            required
            id="lastName"
            label="Last name"
            value={child?.surname}
            onChange={onLastChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            id="group"
            select
            label="Group"
            value={child?.group || ''}
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