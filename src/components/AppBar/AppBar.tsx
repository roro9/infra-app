import { ReactNode } from "react";
import { UserMenu } from "../UserMenu";
import React from "react";
import cx from "classnames";

export function AppBar({ primary }: { primary?: ReactNode }) {
  return (
    <div
      className={cx(
        "flex items-center justify-between border-b px-10 py-5",
        "sticky top-0"
      )}
    >
      <div>{primary}</div>
      <div>
        <UserMenu />
      </div>
    </div>
  );
}
