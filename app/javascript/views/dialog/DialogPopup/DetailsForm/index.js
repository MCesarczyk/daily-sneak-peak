import React, { useEffect, useState } from "react";
import { MenuItem, TextField, Typography, Divider, Button } from "@mui/material";
import { mealOptions, sleepOptions } from "../../../../assets/fixtures";
import { List, ListItem } from "./styled";
import Footer from "../Footer";
import { Space } from "../../../../components/Space";

const DetailsForm = ({ type, child, handleClose, reloadChild }) => {
  const [activities, setActivities] = useState({});
  const [activity, setActivity] = useState({});
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    setActivity(activities[itemIndex]);
  }, [activities, itemIndex])

  const increaseIndex = () => {
    if (itemIndex < activities.length - 1) {
      setItemIndex(itemIndex + 1);
    }
  };

  const decreaseIndex = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  };

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

  const today = new Date(Date.now()).toISOString().substring(0, 10);

  const createActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities`;

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })
      .then((data) => {
        if (data.ok) {
          handleClose();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        reloadChild();
      })
      .catch((err) => console.error("Error: " + err));
  };

  const loadActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(activities => {
        setActivities(activities);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const realoadActivity = () => {
    setActivity({});
    loadActivity();
  };

  useEffect(() => {
    if (type === 'edit-details') {
      loadActivity(child?.id);
    }
  }, []);

  const updateActivity = () => {
    const url = `../api/v1/children/${child?.id}/activities/${activity?.id}`;

    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        reloadChild();
        realoadActivity();
      })
      .catch((err) => console.error("Error: " + err));
  };

  const onFinish = () => {
    type === "add-details" && createActivity();
    type === "edit-details" && updateActivity();
  };

  return (
    <>
      <List>
        <ListItem>
          <Space justify="space-between" style={{ width: "100%" }} >
            <Typography variant="h5">
              {child?.name} {child?.surname}
            </Typography>
            {type === "edit-details" && <div>
              <Button onClick={increaseIndex} >{"<"}</Button>
              {activity?.created_at?.substring(0, 10)}
              <Button onClick={decreaseIndex} >{">"}</Button>
            </div>}
          </Space>
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
      <Footer onFinish={onFinish} />
    </>
  );
};

export default DetailsForm;