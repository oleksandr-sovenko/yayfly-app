import { Button, Modal } from "@mui/material";
import React, { useEffect, useState } from 'react';

function PopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          <h2>Popup Modal</h2>
          <p>This modal opened after 5 seconds of website loading!</p>
          <Button onClick={handleClose} color="primary" variant="contained">Close</Button>
        </div>
      </Modal>
    </div>
  );
}

export default PopupModal;