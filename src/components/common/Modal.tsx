import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "./Button";

type ModalProps = {
  title?: string;
  status?: boolean;
  children: React.ReactNode;
  actions?: React.ReactNode;
  date?: Date;
  handleClose?: () => void;
};

export const Modal = ({
  title,
  status = false,
  children,
  actions,
  date,
  handleClose,
  ...props
}: ModalProps) => {
  const [open, setOpen] = React.useState(status);

  React.useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <>
      {open && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className={`bg-slate-gray fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full flex justify-center items-center`}
        >
          <div className=" modal-container ">
            <div className="modal-head justify-between p-4 ">
              <div>
                <span className="sub-heading font-semibold ">{title}</span>

                {typeof date === "object" &&
                  date !== null &&
                  "getDate" in date && (
                    <>
                      <span className="mx-4">|</span>
                      <span className="text-dark-grey">{`Last Updated on ${date?.getDate()}-${
                        date?.getMonth() + 1
                      }-${date?.getFullYear()}`}</span>
                    </>
                  )}
              </div>
              <div className="flex">
                {actions}
                <Button accent="custom" onClick={handleClose}>
                  <span className="body-regular">
                    <CloseIcon />
                  </span>
                </Button>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
