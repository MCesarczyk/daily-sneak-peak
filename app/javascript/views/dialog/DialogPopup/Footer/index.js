import React from "react";
import { Button, Typography } from "@mui/material";
import { Space } from "../../../../components/Space";

const Footer = ({ onFinish }) => (
  <Space justify="space-between" >
    <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
      *Enter all necessary data and click 'save'.
    </Typography>
    <Button onClick={onFinish} >
      Save
    </Button>
  </Space>
);

export default Footer;