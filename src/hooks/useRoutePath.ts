import { useLocation } from "react-router-dom";
import { RoutePath } from "../constants";

export const useRoutePath = (): null | RoutePath => {
  const { pathname } = useLocation();

  if (pathname.includes(RoutePath.APPLICATIONS)) {
    return RoutePath.APPLICATIONS;
  }

  if (pathname.includes(RoutePath.CONNECTIONS)) {
    return RoutePath.CONNECTIONS;
  }

  if (pathname.includes(RoutePath.COST)) {
    return RoutePath.CONNECTIONS;
  }

  if (pathname.includes(RoutePath.SECURITY)) {
    return RoutePath.SECURITY;
  }

  if (pathname.includes(RoutePath.ADMIN)) {
    return RoutePath.ADMIN;
  }

  if (pathname.includes(RoutePath.DOCS)) {
    return RoutePath.DOCS;
  }

  return null;
};
