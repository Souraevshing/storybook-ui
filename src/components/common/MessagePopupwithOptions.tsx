import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { Button } from "./Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IMessagePopup {
  action: React.ReactNode;
  anchorOrigin: {
    vertical: "bottom" | "top";
    horizontal: "center" | "left" | "right";
  };
  baseChildren: React.ReactNode;
  childrenDescription: string;
  classes: Object;
  closeText: string;
  color:
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;
  icon: Node;
  iconMapping: {
    error?: React.ReactNode;
    info?: React.ReactNode;
    success?: React.ReactNode;
    warning?: React.ReactNode;
  };
  onClose: () => void;
  primaryButtonAction: () => void;
  secondaryButtonAction: () => void;
  role: string;
  severity: "error" | "info" | "success" | "warning";
  spacing: number;
  variant: "filled" | "outlined" | "standard" | string;
  TitleChildren: string;
  TitleClasses: Object;
  TitleSx: Array<() => void | object | boolean> | object;
  autoHideDuration: number;
  positionX: "bottom" | "top";
  positionY: "center" | "left" | "right";
  PrimaryButton: string;
  SecondaryButton: string;
}

export const MessagePopupWithOptions: React.FC<IMessagePopup> = ({
  action,
  childrenDescription,
  classes,
  closeText,
  color,
  icon,
  iconMapping,
  onClose,
  primaryButtonAction,
  secondaryButtonAction,
  role,
  severity,
  spacing,
  variant,
  TitleChildren,
  TitleClasses,
  TitleSx,
  autoHideDuration,
  anchorOrigin,
  baseChildren,
  positionX,
  positionY,
  PrimaryButton,
  SecondaryButton,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={spacing}>
      <div style={{ width: "100px" }}>
        <Button accent="primary" onClick={handleClick}>
          {baseChildren}
        </Button>
      </div>
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={autoHideDuration}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "465px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "465px",
            border: "1px solid #DEE2E6",
            borderRadius: "8px",
            boxShadow:
              "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            onClick={() => {
              handleClose();
              onClose();
            }}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          >
            <CloseIcon />
          </div>
          <div
            style={{
              marginTop: "36px",
              marginLeft: "40px",
              paddingBottom: "36px",
              marginRight: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <h3
                style={{
                  color: "#54595E",
                  fontSize: "20px",
                  lineHeight: "20px",
                }}
              >
                {TitleChildren}
              </h3>
              <p
                style={{
                  color: "rgba(84, 89, 94, 0.6)",
                  lineHeight: "22px",
                  fontSize: "12px",
                }}
              >
                {childrenDescription}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "24px",
              }}
            >
              <button
                onClick={() => {
                  handleClose();
                  primaryButtonAction();
                }}
                style={{
                  width: "180.5px",
                  height: "44px",
                  borderRadius: "8px",
                  padding: "14px 20px 14px 20px",
                  border: "2px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ lineHeight: "14px", fontSize: "14px" }}>
                  {PrimaryButton}
                </p>
              </button>

              <button
                onClick={() => {
                  secondaryButtonAction();
                }}
                style={{
                  border: "2px solid black",
                  width: "180.5px",
                  height: "44px",
                  borderRadius: "8px",
                  padding: "14px 20px 14px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#4F4F4F",
                  color: "white",
                }}
              >
                <p style={{ lineHeight: "14px", fontSize: "14px" }}>
                  {SecondaryButton}
                </p>
              </button>
            </div>
          </div>
        </div>
      </Snackbar>
    </Stack>
  );
};
