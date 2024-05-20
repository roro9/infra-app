import { ReactNode } from "react";
import { UserMenu } from "../UserMenu";
import React from "react";
import cx from "classnames";
import { TEST_USER } from "../../constants";

export function AppBar({ primary }: { primary?: ReactNode }) {
  return (
    <div
      className={cx(
        "sticky top-0",
        "px-10 py-4",
        "min-h-[77px] max-h-[77px]",
        "overflow-hidden",
        "border-primary-gray-border border-b",
        "flex items-center justify-between",
        "bg-primary-gray-page-bg",
        "z-10"
      )}
    >
      {primary}
      <UserMenu user={TEST_USER} />
    </div>
  );
}
