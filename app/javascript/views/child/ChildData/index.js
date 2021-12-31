import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tile from "../../../components/Tile";
import { Wrapper } from "../../../components/Tile/styled";

const ChildData = () => {
  const [child, setChild] = useState({});

  const { id } = useParams();

  const loadChild = () => {
    const url = `../api/v1/children/${id}`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        setChild(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadChild();
  }, []);

  return (
    <>
      {/* <div style={{ width: '100%', height: '100vh', backgroundColor: 'teal' }}>
        {child.name}
      </div> */}
      <Wrapper>
        <Tile child={child} />
      </Wrapper>
      {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='name: ' secondary={child.name} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='surname: ' secondary={child.surname} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='breakfast: ' secondary={child.breakfast} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='souptime: ' secondary={child.souptime} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='secondcourse: ' secondary={child.secondcourse} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='snack: ' secondary={child.snack} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='sleep: ' secondary={child.sleep} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='supplies: ' secondary={child.supplies} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='comments: ' secondary={child.comment} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='dates: ' secondary={child.dates} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box> */}
    </>
  );
};

export default ChildData;