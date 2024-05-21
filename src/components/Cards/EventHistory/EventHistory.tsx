import { AppQueryPath, useAppQuery } from "../../../hooks";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../BaseCard";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { Button } from "@mui/material";
import { StatusBadge } from "../../StatusBadge";
import { getTimestampLabel } from "../../../utils";

export interface IEvent {
  id: number;
  event: string;
  status: "successful" | "failed" | "inprogress";
  version: string;
  timestamp: string;
  applicationId: string;
}

export function EventHistory({
  app,
  switchToEventsView,
}: {
  app: IApplication;
  switchToEventsView: () => void;
}) {
  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.EVENT_HISTORY,
  });

  const eventsData = data as undefined | IEvent[];

  const renderEvents: IEvent[] = (eventsData || [])
    .filter((e) => Number(e.applicationId) === app.id)
    .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));

  const topEventsToRender = renderEvents.slice(0, 4);

  console.log({ renderEvents });

  return (
    <BaseCard title="Event History">
      {error ? (
        "Error"
      ) : isPending ? (
        "Loading..."
      ) : renderEvents.length === 0 ? (
        "No events"
      ) : (
        <div>
          <Table
            sx={{
              [`& .${tableRowClasses.root}`]: {
                height: 65,
              },
              [`& .${tableCellClasses.root}`]: {
                borderColor: "#EBEBEB",
                color: "#595959",
                fontSize: 13,
                fontWeight: 500,
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: `700 !important`, pt: "6px !important" }}
                >
                  Event
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: `700 !important`, pt: "6px !important" }}
                >
                  Version
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: `700 !important`, pt: "6px !important" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topEventsToRender.map((r) => (
                <TableRow key={r.id}>
                  <TableCell component="th" scope="row">
                    <div>{r.event}</div>
                    <div className="font-xs text-black/45">
                      {getTimestampLabel(Number(r.timestamp))}
                    </div>
                  </TableCell>
                  <TableCell align="right">{r.version}</TableCell>
                  <TableCell align="right">
                    <StatusBadge status={r.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {topEventsToRender.length < renderEvents.length && (
            <Button
              sx={{ textTransform: "none", mt: 4, textDecoration: "underline" }}
              variant="text"
              onClick={switchToEventsView}
            >
              View More
            </Button>
          )}
        </div>
      )}
    </BaseCard>
  );
}
