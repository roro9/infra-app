import React from "react";
import { LabelWrapper } from "../../LabelWrapper";
import cx from "classnames";
import { IconButton } from "@mui/material";
import { DeleteIcon } from "../../../icons";

export function EnvVariablesManager({
  variables,
  handleDeleteVariable,
  type,
}: {
  variables: { name: string; value: string }[];
  handleDeleteVariable: (idx: number) => void;
  type: "drawer" | "page";
}) {
  return (
    <div className="min-h-[132px]">
      {variables.map((v, idx) => (
        <div
          className={cx("flex justify-between transition", {
            "mb-6": idx !== variables.length - 1,
            "border px-2 py-1 rounded-md hover:bg-black/5": type === "page",
          })}
          key={`${v.name}-${idx}`}
        >
          <LabelWrapper
            label="Name"
            labelPos="left"
            hideLabel={type === "page"}
          >
            <div
              className={cx(
                "px-2 py-1.5 rounded text-sm min-w-[180px] max-w-[180px] overflow-hidden whitespace-nowrap overflow-ellipsis text-[#333333]",
                {
                  "border border-[#939393]": type === "drawer",
                  "font-semibold": type === "page",
                }
              )}
            >
              {v.name}
            </div>
          </LabelWrapper>

          <LabelWrapper
            label="Value"
            labelPos="left"
            hideLabel={type === "page"}
          >
            <div
              className={cx(
                "px-2 py-1.5 rounded text-sm min-w-[180px] max-w-[180px] overflow-hidden whitespace-nowrap overflow-ellipsis text-[#333333]",
                {
                  "border border-[#939393]": type === "drawer",
                }
              )}
            >
              {v.value}
            </div>
          </LabelWrapper>
          <IconButton size="small" onClick={() => handleDeleteVariable(idx)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
