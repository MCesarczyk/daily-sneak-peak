import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

const ChildDataList = () => {
  const [children, setChildren] = useState({});

  const putData = (data) => {
    let array = [];

    data.forEach(child => {
      const childData = {
        key: child.id,
        id: child.id,
        name: child.name,
        surname: child.surname,
        breakfast: child.breakfast,
        souptime: child.souptime,
        sleep: child.sleep,
        secondcourse: child.secondcourse,
        snack: child.snack,
        supplies: child.supplies,
        comment: child.comment,
        dates: child.dates
      };

      array = [
        ...array,
        childData
      ];

      setChildren(array);
    })
  };

  const loadTools = () => {
    const url = "api/v1/children/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        putData(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    loadTools();
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {children.length > 0 && children.map(child => (
        <ListItem key={child.key}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={child.name} secondary={child.surname} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChildDataList;