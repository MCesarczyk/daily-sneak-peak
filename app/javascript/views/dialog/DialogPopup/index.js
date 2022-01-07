import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Space } from "../../../components/Space";
import { Dialog } from "./styled";
import ChildForm from "./ChildForm";
import DetailsForm from "./DetailsForm";

const DialogPopup = ({ form, child, buttonLabel, formTitle, reloadChild, reloadChildren }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        {buttonLabel}
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog>
          <Space justify="space-between" >
            <Typography id="modal-title" variant="h6" component="h2">
              {formTitle}
            </Typography>
            <Button onClick={handleClose} >
              <CloseIcon />
            </Button>
          </Space>
          {form === 'add' &&
            <ChildForm
              type={form}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadChildren={reloadChildren}
            />
          }
          {form === 'edit' &&
            <ChildForm
              type={form}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadChild={reloadChild}
            />
          }
          {form === 'add-details' &&
            <DetailsForm
              type={form}
              child={child}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadChild={reloadChild}
            />
          }
          {form === 'edit-details' &&
            <DetailsForm
              type={form}
              child={child}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadChild={reloadChild}
            />
          }
        </Dialog>
      </Modal>
    </>
  );
};

export default DialogPopup;