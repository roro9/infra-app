import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { EVENT_HISTORY_TABLE_HEADERS } from "../../../constants";

export function EventHistoryTableHeader() {
  return (
    <TableHead>
      <TableRow>
        {EVENT_HISTORY_TABLE_HEADERS.map((h) => (
          <TableCell
            key={h.name}
            align={h.align}
            sx={{ fontWeight: `700 !important`, pt: "6px !important" }}
          >
            {h.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
