import { BaseCard } from "../BaseCard";
import React, { useState } from "react";
import { MetricSelector, View } from "./MetricSelector";
import { CpuView } from "./CpuView";
import { MemoryView } from "./MemoryView";

export function SystemMetrics() {
  const [view, setView] = useState<View>("memory");

  return (
    <BaseCard title="System metrics">
      <div>
        <MetricSelector
          value={view}
          setValue={(newValue) => setView(newValue)}
        />
        <div className="mt-2">
          {view === "cpu" && <CpuView />}
          {view === "memory" && <MemoryView />}
        </div>
      </div>
    </BaseCard>
  );
}
