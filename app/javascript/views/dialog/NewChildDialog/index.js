import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Space } from "../../../components/Space";
import { Dialog } from "./styled";
import NewChildForm from "./AddForm";

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
          <Space justify="space-between" >
            <Typography id="modal-title" variant="h6" component="h2">
              Add new child
            </Typography>
            <Button onClick={handleClose} >
              <CloseIcon />
            </Button>
          </Space>
          <NewChildForm />
          <Space justify="space-between" >
            <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
              *)Enter all necessary data and click 'save'.
            </Typography>
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