import React from "react";
import { Button, Typography } from "@mui/material";
import { Space } from "../../../../components/Space";
import Confirmation from "../../../../components/Confirmation";

const DialogPopupFooter = ({ onFinish, deleteButton, onDelete }) => (
  <Space justify="space-between" >
    <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
      *Enter all necessary data and click 'save'.
    </Typography>
    <div>
      {deleteButton &&
        <Confirmation
          buttonLabel="Delete activity"
          popupContent={`You're about to delete this activity`}
          onActionCall={onDelete}
        />
      }
      <Button onClick={onFinish} >
        Save
      </Button>
    </div>
  </Space>
);

export default DialogPopupFooter;