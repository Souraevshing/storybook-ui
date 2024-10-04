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
  onCloseAction: () => void;
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
}

export const MessagePopup: React.FC<IMessagePopup> = ({
  action,
  childrenDescription,
  classes,
  closeText,
  color,
  icon,
  iconMapping,
  onCloseAction,
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
            minHeight: "141px",
            width: "499px",
            border: "1px solid #D9D9D9",
            boxShadow: "0px 13px 17px rgba(216, 216, 216, 0.25)",
            borderRadius: "7px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            onClick={() => {
              handleClose();
              onCloseAction();
            }}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "17px",
              right: "23.99px",
              height: "12.01px",
              width: "12.01px",
            }}
          >
            <CloseIcon />
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "40px",
              marginLeft: "84px",
              marginRight: "40px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: "#F5F5F5",
                width: "56px",
                height: "56px",
                boxSizing: "border-box",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {severity === "success" ? (
                <CheckCircleOutlineIcon color="success" />
              ) : severity === "error" ? (
                <InfoOutlinedIcon color="error" />
              ) : null}
            </div>
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
                  maxWidth: "400px",
                  fontSize: "20px",
                  color: "#54595E",
                  lineHeight: "20px",
                  marginBottom: "4px",
                }}
              >
                {TitleChildren}
              </h3>
              <p
                style={{
                  maxWidth: "290px",
                  color: "rgba(84, 89, 94, 0.6)",
                  lineHeight: "22px",
                  fontWeight: "400px",
                  fontSize: "14px",
                }}
              >
                {childrenDescription}
              </p>
            </div>
          </div>
        </div>
      </Snackbar>
    </Stack>
  );
};
