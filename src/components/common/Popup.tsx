import React, { Fragment, useEffect, useRef, useState } from "react";
import "../../styles/components/popup.scss";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export interface IPopupField {
  modalLabel: JSX.Element;
  headerLabel: string;
  modalId: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  allowOutsideClicks: boolean;
  modalContent: JSX.Element;
  contentClasses: object;
  allowCloseIcon: boolean;
  isOpen: boolean;
  setModalState(value: boolean): void;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Popup = ({
  modalLabel,
  headerLabel = "",
  modalId = "storybook-modal",
  size = 'md',
  allowOutsideClicks = false,
  modalContent,
  contentClasses,
  setModalState,
  allowCloseIcon = false,
  isOpen = true,
}: IPopupField) => {
  const [modalState, setModal] = useState(isOpen);

  useEffect(() => {
    setModal(isOpen);
  }, [isOpen]);

  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
      ...contentClasses
    }
  }));

  const modalContainer = () => {
    return (
      <BootstrapDialog
        id={modalId}
        onClose={() => {
          if (allowOutsideClicks) {
            setModalState(false);
          }
        }}
        aria-labelledby="customized-dialog-title"
        maxWidth={size}
        fullWidth
        open={modalState}
      >
        {allowCloseIcon ? <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => {
            setModalState(false);
          }}
        >{headerLabel}</BootstrapDialogTitle>
          : <></>}
        <DialogContent>{modalContent}</DialogContent>
      </BootstrapDialog>
    );
  };

  return (
    <>
      <div>{modalLabel}</div>
      {modalContainer()}
    </>
  );
};
