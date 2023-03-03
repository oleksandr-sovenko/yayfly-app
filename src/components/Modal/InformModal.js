import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const InformModal = ({ open, handleClose, handleOpen }) => {
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <Box>
        <Box>
          <Typography>
            Based On Our Flight Search Robot AI, We Expect This Flight To Be
            Cheaper{" "}
            <Typography component="span">
              Within The Next 3 to 14 minutes.
            </Typography>
          </Typography>
          <Typography>
            Please fill in your phone number and of our support agent will call
            you back with your flight deal.
          </Typography>
        </Box>
        <Box>
          <Box>
            <h2>Form</h2>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </div>
  );
};

export default InformModal;
