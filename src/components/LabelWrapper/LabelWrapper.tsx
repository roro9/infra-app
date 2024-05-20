import { ReactNode } from "react";
import React from "react";

export function LabelWrapper({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="inline-flex flex-col">
      <div className="text-black/70 text-sm mb-0.5">{label}</div>
      <div>{children}</div>
    </div>
  );
}
