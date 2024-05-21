import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IApplicationEvent } from "../../../interfaces/applications.interfaces";
import { getTimestampLabel } from "../../../utils";
import { StatusBadge } from "../../StatusBadge";
import React from "react";

export function EventHistoryTableBody({ rows }: { rows: IApplicationEvent[] }) {
  return (
    <TableBody>
      {rows.map((r) => (
        <TableRow key={r.id}>
          {/* Event / Timestamp */}
          <TableCell component="th" scope="row">
            <div>{r.event}</div>
            <div className="font-xs text-black/45">
              {getTimestampLabel(Number(r.timestamp))}
            </div>
          </TableCell>

          {/* Version */}
          <TableCell align="right">{r.version}</TableCell>

          {/* Status */}
          <TableCell align="right">
            <StatusBadge status={r.status} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
