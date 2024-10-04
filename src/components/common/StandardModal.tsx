import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Button } from "./Button";
import CloseIcon from "@mui/icons-material/Close";
import { relative } from "path";

interface StandardModal {
  openModal: boolean;
  setModalState(modalState: boolean): void;
  bodyContent: JSX.Element;
  modalId: string;
  contentClasses?: string;
  bodyTitle: React.ReactNode;
  PrimaryButton: React.ReactNode;
  SecondaryButton: React.ReactNode;
  baseChildren: React.ReactNode;
  onSubmitPrimary: () => void;
  onSubmitSecondary: () => void;
  onClose: () => void;
  onCloseAction: "close" | undefined;
  secondaryButtonAction: "cancel" | undefined;
}

export const StandardModal: React.FC<StandardModal> = ({
  openModal,
  setModalState,
  bodyContent,
  modalId,
  contentClasses = "",
  PrimaryButton,
  SecondaryButton,
  baseChildren,
  bodyTitle,
  onSubmitPrimary,
  onSubmitSecondary,
  onClose,
  onCloseAction,
  secondaryButtonAction,
  ...props
}) => {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = React.useState(false);

  const bodyContentModal = () => {
    return (
      <>
        <div
          style={{
            maxWidth: "471px",
            width: "471px",
            borderRadius: "9px",
            paddingLeft: "24px",
            marginTop: "24px",
            marginBottom: "28px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              maxWidth: "420px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            {bodyTitle}
          </p>
          <div
            style={{
              width: "12px",
              height: "12px",
              cursor: "pointer",
              position: "absolute",
              top: "24px",
              right: "27px",
            }}
            onClick={() => {
              onClose();
              handleClose();
            }}
          >
            <CloseIcon fontSize="medium" />
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={{
                padding: "12px 16px 12px 16px",
                fontSize: "14px",
                fontWeight: "700",
                width: "74px",
                height: "38px",
                borderRadius: "2px",
                backgroundColor: "white",
                border: "1px solid #189B77",
                color: "#189B77",
                lineHeight: "14px",
              }}
              onClick={() => {
                handleClose();
                onSubmitSecondary();
              }}
            >
              {SecondaryButton}
            </button>
            <button
              style={{
                color: "white",
                width: "74px",
                height: "38px",
                borderRadius: "2px",
                backgroundColor: "#189B77",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "12px",
                paddingBottom: "12px",
                lineHeight: "14px",
                fontSize: "14px",
                fontWeight: "700",
              }}
              onClick={onSubmitPrimary}
            >
              {PrimaryButton}
            </button>
          </div>
        </div>
      </>
    );
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button accent="primary" onClick={handleClick}>
        {baseChildren}
      </Button>
      {
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            id={modalId}
            data-testid={modalId}
            className="relative z-50"
            initialFocus={cancelButtonRef}
            onClose={() => {
              setModalState(false);
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-50 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    className={`${contentClasses}  relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-md min-w-max w-96 break-normal `}
                  >
                    <div className={` bg-white`}>{bodyContentModal()}</div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      }
    </>
  );
};
