import { useQuery } from "@tanstack/react-query";

export enum AppQueryPath {
  APPLICATIONS = "71NNjB/applications",
  MEMORY_UTILIZATION = "ybFVVH/memoryutilization",
  CPU_UTILIZATION = "Ymxfa2/cpuutilization",
  EVENT_HISTORY = "TYjDIe/eventhistory",
}

export const useAppQuery = ({ path }: { path: null | AppQueryPath }) => {
  const BASE_URL = new URL("/", "https://retoolapi.dev");
  const queryUrl = new URL(path || "", BASE_URL);

  return useQuery({
    queryKey: [queryUrl],
    queryFn: () => fetch(queryUrl).then((res) => res.json()),
    enabled: !!path,
  });
};
