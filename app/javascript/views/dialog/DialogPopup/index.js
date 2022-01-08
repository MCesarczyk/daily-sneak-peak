import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { Space } from "../../../components/Space";
import { Dialog } from "./styled";
import ChildForm from "./ChildForm";
import ActivitiesForm from "./ActivitiesForm";

const DialogPopup = ({
  form, itemIndex, buttonLabel, formTitle, reloadChild, reloadChildren, reloadActivities, onDelete
}) => {
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
            <ActivitiesForm
              type={form}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadActivities={reloadActivities}
            />
          }
          {form === 'edit-details' &&
            <ActivitiesForm
              type={form}
              itemIndex={itemIndex}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadActivities={reloadActivities}
              onDelete={onDelete}
            />
          }
        </Dialog>
      </Modal>
    </>
  );
};

export default DialogPopup;