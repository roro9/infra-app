import { useEffect } from "react";
import { RoutePath } from "../constants";
import { AppQueryPath, useAppQuery } from "./useAppQuery";
import { useRoutePath } from "./useRoutePath";
import { updateApplications } from "../redux/slices/applicationsSlice";
import { useDispatch } from "react-redux";

const RouteSetupPath: Record<RoutePath, null | AppQueryPath> = {
  [RoutePath.ROOT]: null,
  [RoutePath.APPLICATIONS]: AppQueryPath.APPLICATIONS,
  [RoutePath.CONNECTIONS]: null,
  [RoutePath.COST]: null,
  [RoutePath.SECURITY]: null,
  [RoutePath.ADMIN]: null,
  [RoutePath.DOCS]: null,
};

export const useRouteSetup = () => {
  const dispatch = useDispatch();
  const path = useRoutePath();
  const queryPath = path ? RouteSetupPath[path] : null;

  const { error, isPending, data } = useAppQuery({
    path: queryPath,
  });

  useEffect(() => {
    if (data) {
      if (path === RoutePath.APPLICATIONS) {
        dispatch(updateApplications(data));
      }
    }
  }, [data, path, dispatch]);

  return {
    error: !!error,
    isPending: isPending && !!queryPath,
  };
};
