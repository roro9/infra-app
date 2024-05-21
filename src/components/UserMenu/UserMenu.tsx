import React from "react";
import { IUser } from "../../interfaces/common";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { CaretDownIcon } from "../../icons";
import { Divider, Menu, MenuItem } from "@mui/material";
import cx from "classnames";

export function UserMenu({ user }: { user: IUser }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { firstName, lastName } = user;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="small"
        className={cx("inline-flex items-center gap-3 hover:text-black/95", {
          "!text-black/95": open,
        })}
        disableRipple
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "#FFD07B" }}>{initials}</Avatar>
        <span className="text-base">
          {firstName} {lastName}
        </span>
        <span
          className={cx("ml-1", "transition", {
            "scale-[-1]": open,
            "text-black/95": open,
            "text-black/5": !open,
          })}
        >
          <CaretDownIcon />
        </span>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
      >
        {/* Dummy options for now */}
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <Divider />
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
}
