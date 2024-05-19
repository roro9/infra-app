import { ReactNode, useState } from "react";
import cx from "classnames";
import React from "react";

export function BaseCard({
  children,
  title,
  className,
  canCollapse,
}: {
  children: ReactNode;
  title: string;
  className?: string;
  canCollapse?: boolean;
}) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={cx("rounded-md", "p-4", "border", className)}>
      <div className="flex items-center justify-between">
        <div className="text-gray-500 font-medium mb-4">{title}</div>

        {canCollapse && (
          <div onClick={() => setCollapse((prev) => !prev)}>
            {collapse ? "Expand" : "Collapse"}
          </div>
        )}
      </div>

      {!collapse && <div>{children}</div>}
    </div>
  );
}
