import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  selectDialogOpen, selectDialogType, setDialogClosed, setDialogOpen, setDialogType 
} from "../dialogSlice";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ChildForm from "./ChildForm";
import ActivitiesForm from "./ActivitiesForm";
import { Space } from "../../../components/Space";
import { Dialog } from "./styled";

const DialogPopup = ({
  form, buttonLabel, formTitle, reloadChild, reloadActivities, onDelete
}) => {
  const dispatch = useDispatch();
  const open = useSelector(selectDialogOpen);
  const type = useSelector(selectDialogType);

  const handleOpen = () => {
    dispatch(setDialogType(form));
    dispatch(setDialogOpen());
  };

  const handleClose = () => {
    dispatch(setDialogClosed());
  };

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
          {type === 'add' &&
            <ChildForm
              type={type}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
            />
          }
          {type === 'edit' &&
            <ChildForm
              type={type}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadChild={reloadChild}
            />
          }
          {type === 'add-details' &&
            <ActivitiesForm
              type={type}
              buttonLabel={buttonLabel}
              handleClose={handleClose}
              reloadActivities={reloadActivities}
            />
          }
          {type === 'edit-details' &&
            <ActivitiesForm
              type={type}
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