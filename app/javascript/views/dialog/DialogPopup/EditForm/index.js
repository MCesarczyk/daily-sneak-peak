import React, { useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { groups, mealOptions, sleepOptions } from "../../../../assets/childParams";
import { List, ListItem } from "./styled";

const EditChildForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [group, setGroup] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [soup, setSoup] = useState("");
  const [second, setSecond] = useState("");
  const [snack, setSnack] = useState("");
  const [sleep, setSleep] = useState("");
  const [pee, setPee] = useState("");
  const [poo, setPoo] = useState("");
  const [supplies, setSupplies] = useState("");
  const [comment, setComment] = useState("");

  const onFirstChange = ({ target }) => {
    setFirst(target.value);
  };

  const onLastChange = ({ target }) => {
    setLast(target.value);
  };

  const onGroupChange = ({ target }) => {
    setGroup(target.value);
  };

  const onBreakfastChange = ({ target }) => {
    setBreakfast(target.value);
  };

  const onSoupChange = ({ target }) => {
    setSoup(target.value);
  };

  const onSecondChange = ({ target }) => {
    setSecond(target.value);
  };

  const onSnackChange = ({ target }) => {
    setSnack(target.value);
  };

  const onSleepChange = ({ target }) => {
    setSleep(target.value);
  };

  const onPeeChange = ({ target }) => {
    setPee(target.value);
  };

  const onPooChange = ({ target }) => {
    setPoo(target.value);
  };

  const onSuppliesChange = ({ target }) => {
    setSupplies(target.value);
  };

  const onCommentChange = ({ target }) => {
    setComment(target.value);
  };

  return (
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
            <MenuItem key={group.id} value={group.id}>
              {group.label}
            </MenuItem>
          ))}
        </TextField>
      </ListItem>
      <ListItem>
        <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
          Nutrition data
        </Typography>
      </ListItem>
      <ListItem>
        <TextField
          id="breakfast"
          select
          label="Breakfast"
          value={breakfast}
          onChange={onBreakfastChange}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
        >
          {mealOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="soup"
          select
          label="Soup"
          value={soup}
          onChange={onSoupChange}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
        >
          {mealOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="second"
          select
          label="2nd course"
          value={second}
          onChange={onSecondChange}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
        >
          {mealOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="snack"
          select
          label="Snack"
          value={snack}
          onChange={onSnackChange}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
        >
          {mealOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </ListItem>
      <ListItem>
        <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
          Other data
        </Typography>
      </ListItem>
      <ListItem>
        <TextField
          id="sleep"
          select
          label="Sleep"
          value={sleep}
          onChange={onSleepChange}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
        >
          {sleepOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="peeNumber"
          label="Pee"
          type="number"
          InputLabelProps={{ shrink: true }}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
          value={pee}
          onChange={onPeeChange}
        />
        <TextField
          id="pooNumber"
          label="Poo"
          type="number"
          InputLabelProps={{ shrink: true }}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
          value={poo}
          onChange={onPooChange}
        />
      </ListItem>
      <ListItem>
        <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
          Annotations
        </Typography>
      </ListItem>
      <ListItem>
        <TextField
          id="supplies"
          label="Supplies needed"
          multiline
          maxRows={6}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
          value={supplies}
          onChange={onSuppliesChange}
        />
        <TextField
          id="annotations"
          label="Teacher's comment"
          multiline
          maxRows={6}
          size="small"
          margin="dense"
          sx={{ width: "14rem", px: 1 }}
          value={comment}
          onChange={onCommentChange}
        />
      </ListItem>
    </List >
  );
};

export default EditChildForm;