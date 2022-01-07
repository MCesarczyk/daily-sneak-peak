import React, { useEffect, useState } from "react";
import { MenuItem, TextField, Typography, Divider } from "@mui/material";
import { mealOptions, sleepOptions } from "../../../../assets/fixtures";
import { List, ListItem } from "./styled";
import Footer from "../Footer";

const DetailsForm = ({ child, handleClose, reloadChild }) => {
  const [breakfast, setBreakfast] = useState("");
  const [soup, setSoup] = useState("");
  const [second, setSecond] = useState("");
  const [snack, setSnack] = useState("");
  const [sleep, setSleep] = useState("");
  const [pee, setPee] = useState("");
  const [poo, setPoo] = useState("");
  const [supplies, setSupplies] = useState("");
  const [comment, setComment] = useState("");

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

  const values = {
    breakfast,
    soup,
    second,
    snack,
    sleep,
    pee,
    poo,
    supplies,
    comment
  };

  const today = new Date(Date.now()).toISOString().substring(0, 10);

  const loadChildDetails = () => {
    const url = `../api/v1/children/${child?.id}/activities/`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(data => {
        return data.shift();
      })
      .then(data => {
        setBreakfast(data?.breakfast);
        setSoup(data?.soup);
        setSecond(data?.second);
        setSnack(data?.snack);
        setSleep(data?.sleep);
        setPee(data?.pee);
        setPoo(data?.poo);
        setSupplies(data?.supplies);
        setComment(data?.comment);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadChildDetails(child?.id);
  }, []);

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
            Nutrition data
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="breakfast"
            select
            label="Breakfast"
            value={breakfast || ''}
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
            value={soup || ''}
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
            value={second || ''}
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
            value={snack || ''}
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
            Other data
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id="sleep"
            select
            label="Sleep"
            value={sleep || ''}
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
            value={pee || 0}
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
            value={poo || 0}
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
            value={supplies || ''}
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
            value={comment || ''}
            onChange={onCommentChange}
          />
        </ListItem>
      </List >
      <Footer onFinish={() => console.log(values)} />
    </>
  );
};

export default DetailsForm;