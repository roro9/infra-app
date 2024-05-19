import React from "react";

export function EnvVariablesList({
  variables,
  handleDeleteVariable,
}: {
  variables: { name: string; value: string }[];
  handleDeleteVariable: (idx: number) => void;
}) {
  return (
    <>
      {variables.map((v, idx) => (
        <div className="flex" key={`${v.name}-${idx}`}>
          <div className="flex">
            <div>Name:</div>
            <div>{v.name}</div>
          </div>
          <div className="flex">
            <div>Value: </div>
            <div>{v.value}</div>
          </div>
          <div>
            <button onClick={() => handleDeleteVariable(idx)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
