import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectActivities, selectChildData, selectItemIndex
} from "../../../child/childSlice";
import { sendDataToApi } from "../../../../assets/utils/handleApiCalls";
import { MenuItem, TextField, Typography, Divider } from "@mui/material";
import { mealOptions, sleepOptions } from "../../../../assets/fixtures";
import { List, ListItem } from "./styled";
import DialogPopupFooter from "../Footer";

const ActivitiesForm = ({ type, handleClose, reloadActivities, onDelete }) => {
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivities);
  const itemIndex = useSelector(selectItemIndex);

  const [activity, setActivity] = useState({});

  const onBreakfastChange = ({ target }) => {
    setActivity({
      ...activity,
      breakfast: target.value,
    })
  };

  const onSoupChange = ({ target }) => {
    setActivity({
      ...activity,
      soup: target.value,
    })
  };

  const onSecondChange = ({ target }) => {
    setActivity({
      ...activity,
      second: target.value,
    })
  };

  const onSnackChange = ({ target }) => {
    setActivity({
      ...activity,
      snack: target.value,
    })
  };

  const onSleepChange = ({ target }) => {
    setActivity({
      ...activity,
      sleep: target.value,
    })
  };

  const onPeeChange = ({ target }) => {
    setActivity({
      ...activity,
      pee: target.value,
    })
  };

  const onPooChange = ({ target }) => {
    setActivity({
      ...activity,
      poo: target.value,
    })
  };

  const onSuppliesChange = ({ target }) => {
    setActivity({
      ...activity,
      supplies: target.value,
    })
  };

  const onCommentChange = ({ target }) => {
    setActivity({
      ...activity,
      comment: target.value,
    })
  };

  useEffect(() => {
    if (type === 'edit-details') {
      setActivity(activities[itemIndex]);
    }

    return (() => {
      setActivity({});
    })
  }, []);

  const createActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities`;
    sendDataToApi(url, 'post', activity)
      .then(() => {
        handleClose();
      })
      .then(() => {
        reloadActivities();
      })
  };

  const updateActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities/${activity?.id}`;
    sendDataToApi(url, 'put', activity)
      .then(() => {
        handleClose();
      })
      .then(() => {
        reloadActivities();
      })
  };

  const onFinish = () => {
    type === "add-details" && createActivity();
    type === "edit-details" && updateActivity();
  };

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="h5">
            {child?.name} {child?.surname}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
            Nutrition
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="breakfast"
            select
            label="Breakfast"
            value={activity?.breakfast || ''}
            onChange={onBreakfastChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {mealOptions.map(option => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="soup"
            select
            label="Soup"
            value={activity?.soup || ''}
            onChange={onSoupChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {mealOptions.map(option => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="second"
            select
            label="2nd course"
            value={activity?.second || ''}
            onChange={onSecondChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {mealOptions.map(option => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="snack"
            select
            label="Snack"
            value={activity?.snack || ''}
            onChange={onSnackChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {mealOptions.map(option => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
        <ListItem>
          <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
            Other info
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="sleep"
            select
            label="Sleep"
            value={activity?.sleep || ''}
            onChange={onSleepChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {sleepOptions.map(option => (
              <MenuItem key={option.id} value={option.label}>
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
            value={activity?.pee || 0}
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
            value={activity?.poo || 0}
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
            value={activity?.supplies || ''}
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
            value={activity?.comment || ''}
            onChange={onCommentChange}
          />
        </ListItem>
      </List >
      <DialogPopupFooter
        deleteButton={type === "edit-details"}
        onFinish={onFinish}
        onDelete={onDelete}
      />
    </>
  );
};

export default ActivitiesForm;