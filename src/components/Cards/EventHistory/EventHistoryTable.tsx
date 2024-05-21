import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import { tableCellClasses } from "@mui/material/TableCell";
import { tableRowClasses } from "@mui/material/TableRow";
import { IApplicationEvent } from "../../../interfaces/applications.interfaces";
import { EventHistoryTableBody } from "./EventHistoryTableBody";
import { EventHistoryTableHeader } from "./EventHistoryTableHeader";
import React from "react";

export function EventHistoryTable({
  tableEvents,
  handleClickViewMoreButton,
}: {
  tableEvents: IApplicationEvent[];
  handleClickViewMoreButton: undefined | (() => void);
}) {
  return (
    <div>
      <Table
        sx={{
          [`& .${tableRowClasses.root}`]: {
            height: 50,
          },
          [`& .${tableCellClasses.root}`]: {
            borderColor: "#EBEBEB",
            color: "#595959",
            fontSize: 13,
            fontWeight: 500,
          },
        }}
      >
        <EventHistoryTableHeader />
        <EventHistoryTableBody rows={tableEvents} />
      </Table>

      {!!handleClickViewMoreButton && (
        <Button
          sx={{ textTransform: "none", mt: 4, textDecoration: "underline" }}
          variant="text"
          onClick={handleClickViewMoreButton}
        >
          View More
        </Button>
      )}
    </div>
  );
}
