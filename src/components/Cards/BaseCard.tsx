import { ReactNode, useState } from "react";
import cx from "classnames";
import React from "react";

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
        "rounded-md",
        "p-4",
        "border border-primary-gray-border",
        "bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {title && <div className="text-gray-500 font-medium mb-4">{title}</div>}

        {canCollapse && (
          <div onClick={() => setCollapse((prev) => !prev)}>
            {collapse ? "Expand" : "Collapse"}
          </div>
        )}

        {titleRight && <div>{titleRight}</div>}
      </div>

      {!collapse && <div>{children}</div>}
    </div>
  );
}
