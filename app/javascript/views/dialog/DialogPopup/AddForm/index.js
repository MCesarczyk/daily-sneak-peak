import React, { useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { groups } from "../../../../assets/childParams";
import { List, ListItem } from "./styled";
import Footer from "../Footer";

const NewChildForm = ({ handleClose, reloadChildren }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [group, setGroup] = useState("");

  const onFirstChange = ({ target }) => {
    setFirst(target.value);
  };

  const onLastChange = ({ target }) => {
    setLast(target.value);
  };

  const onGroupChange = ({ target }) => {
    setGroup(target.value);
  };

  const values = {
    name: first,
    surname: last,
    group
  };

  const onFinish = () => {
    const url = "api/v1/children/create";

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          handleClose();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        reloadChildren();
      })
      .catch((err) => console.error("Error: " + err));
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
            value={first}
            onChange={onFirstChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            required
            id="lastName"
            label="Last name"
            value={last}
            onChange={onLastChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            id="group"
            select
            label="Group"
            value={group}
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
      <Footer onFinish={onFinish} />
    </>
  );
};

export default NewChildForm;