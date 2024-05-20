import { ReactNode, useState } from "react";
import cx from "classnames";
import React from "react";
import { IconButton } from "@mui/material";
import { CaretDownIcon } from "../../icons";

export function BaseCard({
  children,
  title,
  className,
  canCollapse,
  titleRight,
}: {
  children: ReactNode;
  title?: string;
  className?: string;
  canCollapse?: boolean;
  titleRight?: ReactNode;
}) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={cx(
        "rounded-lg",
        "p-4",
        "border border-primary-gray-border",
        "bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {title && <div className="text-[#595959] font-bold mb-4">{title}</div>}

        {canCollapse && (
          <IconButton
            size="small"
            onClick={() => setCollapse((prev) => !prev)}
            className={cx("transition", {
              "scale-[-1]": !collapse,
            })}
          >
            <CaretDownIcon />
          </IconButton>
        )}

        {titleRight && <div>{titleRight}</div>}
      </div>

      {!collapse && <div>{children}</div>}
    </div>
  );
}
