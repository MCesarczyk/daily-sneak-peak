import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Space } from "../../../../components/Space";
import { Dialog } from "./styled";

const NewChildDialog = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Space vertical justify="start">
        <Button onClick={handleOpen} >Add+</Button>
      </Space>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog>
          <Space justify="end" >
            <Button onClick={handleClose} >
              <CloseIcon />
            </Button>
          </Space>
          <Typography id="modal-title" variant="h6" component="h2">
            Add new child data
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Enter all necessary data and click 'save'.
          </Typography>
          <Space justify="end" >
            <Button onClick={handleClose} >
              Save
            </Button>
          </Space>
        </Dialog>
      </Modal>
    </>
  );
};

export default NewChildDialog;