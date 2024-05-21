import { AppQueryPath, useAppQuery } from "../../../hooks";
import { IApplication } from "../../../interfaces";
import { IApplicationEvent } from "../../../interfaces/applications.interfaces";
import { BaseCard } from "../BaseCard";
import { EventHistoryState } from "./EventHistoryState";
import { EventHistoryTable } from "./EventHistoryTable";
import React from "react";

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

  const eventsData = data as undefined | IApplicationEvent[];

  const allEvents: IApplicationEvent[] = (eventsData || [])
    .filter((e) => Number(e.applicationId) === app.id)
    .sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

  const tableEvents = allEvents.slice(0, 4);

  return (
    <BaseCard title="Event History">
      {error ? (
        <EventHistoryState type="error" />
      ) : isPending ? (
        <EventHistoryState type="is-loading" />
      ) : allEvents.length === 0 ? (
        <EventHistoryState type="no-data" />
      ) : (
        <EventHistoryTable
          tableEvents={tableEvents}
          handleClickViewMoreButton={
            tableEvents.length < allEvents.length
              ? switchToEventsView
              : undefined
          }
        />
      )}
    </BaseCard>
  );
}
