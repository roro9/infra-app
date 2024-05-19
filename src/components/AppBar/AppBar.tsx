import { ReactNode } from "react";
import { UserMenu } from "../UserMenu";
import React from "react";

export function AppBar({ primary }: { primary?: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b px-10 py-5">
      <div>{primary}</div>
      <div>
        <UserMenu />
      </div>
    </div>
  );
}
