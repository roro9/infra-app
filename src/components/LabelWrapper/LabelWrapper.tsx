import { ReactNode } from "react";
import React from "react";
import cx from "classnames";

export function LabelWrapper({
  label,
  children,
  labelPos = "top",
  className,
  hideLabel,
}: {
  label: string;
  children: ReactNode;
  labelPos?: "top" | "left";
  className?: string;
  hideLabel?: boolean;
}) {
  return (
    <div
      className={cx(
        "inline-flex",
        {
          "flex-col": labelPos === "top",
          "flex-row items-center": labelPos === "left",
        },
        className
      )}
    >
      {!hideLabel && (
        <div
          className={cx("text-black/70 text-sm", {
            "mb-0.5": labelPos === "top",
            "mr-2.5": labelPos === "left",
          })}
        >
          {label}
        </div>
      )}

      <div className={cx({ grow: labelPos === "left" })}>{children}</div>
    </div>
  );
}
