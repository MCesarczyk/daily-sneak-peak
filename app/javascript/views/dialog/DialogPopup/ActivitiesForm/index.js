import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChildData } from "../../../child/childSlice";
import {
  selectItemIndex, selectActivitiesList,
  postActivity, updateActivity, deleteActivity, setActivityId
} from "../../../activities/activitiesSlice";
import { selectDialogType } from "../../dialogSlice";
import { MenuItem, TextField, Typography } from "@mui/material";
import { mealOptions, sleepOptions } from "../../../../assets/fixtures";
import { List, ListItem } from "./styled";
import DialogPopupFooter from "../Footer";
import DialogHeader from "../Header";

const ActivitiesForm = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);
  const activities = useSelector(selectActivitiesList);
  const itemIndex = useSelector(selectItemIndex);
  const type = useSelector(selectDialogType);

  const [activity, setActivity] = useState({});

  const changeProp = (propName, target) => {
    setActivity({
      ...activity,
      [propName]: target.value,
    })
  };

  const onBreakfastChange = ({ target }) => changeProp('breakfast', target);
  const onSoupChange = ({ target }) => changeProp('soup', target);
  const onSecondChange = ({ target }) => changeProp('second', target);
  const onSnackChange = ({ target }) => changeProp('snack', target);
  const onSleepChange = ({ target }) => changeProp('sleep', target);
  const onPeeChange = ({ target }) => changeProp('pee', target);
  const onPooChange = ({ target }) => changeProp('poo', target);
  const onSuppliesChange = ({ target }) => changeProp('supplies', target);
  const onCommentChange = ({ target }) => changeProp('comment', target);

  useEffect(() => {
    const currentActivity = activities[itemIndex];

    if (type === 'edit-details') {
      setActivity(currentActivity);
      setActivityId(currentActivity.id);
    }

    return (() => {
      setActivity({});
    })
  }, []);

  const onFinish = () => {
    type === "add-details" && dispatch(postActivity(activity));
    type === "edit-details" && dispatch(updateActivity(activity));
  };

  return (
    <>
      <DialogHeader child={child} />
      <List>
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
        onDelete={() => dispatch(deleteActivity(activity?.id))}
      />
    </>
  );
};

export default ActivitiesForm;