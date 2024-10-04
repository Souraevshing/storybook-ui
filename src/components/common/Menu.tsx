import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type MenuProps = {
  open: boolean;
  anchorEl: React.ReactHTMLElement<any>;
  autoFocus: boolean;
  children: React.ReactNode;
  classesMenu: object;
  classesMenuItem: object;
  disableAutoFocusItem: boolean;
  MenuListProps: object;
  onClose: () => void;
  PopoverClasses: object;
  transitionDuration: number | "auto";
  TransitionProps: object;
  variant: "menu" | "selectedMenu";
};

export default function BasicMenu({
  autoFocus,
  children,
  classesMenu,
  classesMenuItem,
  disableAutoFocusItem,
  MenuListProps,
  onClose,
  PopoverClasses,
  transitionDuration,
  TransitionProps,
  variant,
  ...props
}: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Item number 1", "Item number 2", "Item number 3"];

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        // autoFocus={autoFocus}
        // classes={classesMenu}
        // disableAutoFocusItem={disableAutoFocusItem}
        // PopoverClasses={PopoverClasses}
        // transitionDuration={transitionDuration}
        // TransitionProps={TransitionProps}
        // variant={variant}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   "aria-labelledby": "basic-button",
        // }}
      >
        {menuItems.map((item) => (
          <MenuItem classes={classesMenuItem} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
