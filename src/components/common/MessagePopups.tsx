import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

export interface MessagePopupProps {
  title: string;
  message: string;
  open: boolean;
  onConfirm: Function;
}

export const MessagePopups = ({
  title = "Delete Item",
  message = "'xyz'?",
  open = false,
  onConfirm,
}: MessagePopupProps) => {
  const [show, setShow] = useState(open);
  return (
    <Dialog open={show} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={() => setShow(false)}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>Are you sure you want to delete {message}</Typography>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShow(false)}
          >
            No,cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              if (onConfirm) {
                onConfirm();
              }
              setShow(false);
            }}
          >
            Yes,confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
