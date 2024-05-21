/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICpuData, IMemoryData } from "./applications.interfaces";

export function isICpuData(obj: any): obj is ICpuData {
  return (
    typeof obj === "object" &&
    typeof obj.id === "number" &&
    typeof obj.applicationId === "string" &&
    typeof obj.cpuUtilization === "string" &&
    typeof obj.timestamp === "string"
  );
}

export function isIMemoryData(obj: any): obj is IMemoryData {
  return (
    typeof obj === "object" &&
    typeof obj.id === "number" &&
    typeof obj.applicationId === "string" &&
    typeof obj.memoryUtilization === "string" &&
    typeof obj.timestamp === "string"
  );
}
