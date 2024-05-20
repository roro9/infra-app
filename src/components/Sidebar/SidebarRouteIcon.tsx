import { useMemo } from "react";
import { RoutePath } from "../../constants";
import {
  AppsIcon,
  ConnectionsIcon,
  DocsIcon,
  MoneyIcon,
  ShieldIcon,
  UserIcon,
} from "../../icons";
import React from "react";

export function SidebarRouteIcon({ path }: { path: RoutePath }) {
  const renderIcon = useMemo((): JSX.Element | undefined => {
    switch (path) {
      case RoutePath.APPLICATIONS:
        return <AppsIcon />;
      case RoutePath.CONNECTIONS:
        return <ConnectionsIcon />;
      case RoutePath.COST:
        return <MoneyIcon />;
      case RoutePath.SECURITY:
        return <ShieldIcon />;
      case RoutePath.ADMIN:
        return <UserIcon />;
      case RoutePath.DOCS:
        return <DocsIcon />;
      default:
        return undefined;
    }
  }, [path]);

  return <>{renderIcon}</>;
}
