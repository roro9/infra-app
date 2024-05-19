import { AppQueryPath, useAppQuery } from "../../../hooks";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../BaseCard";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface IEvent {
  id: number;
  event: string;
  status: string;
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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell>Version</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topEventsToRender.map((r) => (
                <TableRow key={r.id}>
                  <TableCell component="th" scope="row">
                    {r.event}
                  </TableCell>
                  <TableCell>{r.version}</TableCell>
                  <TableCell align="right">{r.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {topEventsToRender.length < renderEvents.length && (
            <button className="mt-8 inline-block" onClick={switchToEventsView}>
              View More
            </button>
          )}
        </div>
      )}
    </BaseCard>
  );
}
