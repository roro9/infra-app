export enum Route {
  ROOT = "ROOT",
  APPLICATIONS = "APPLICATIONS",
  CONNECTIONS = "CONNECTIONS",
  COST = "COST",
  SECURITY = "SECURITY",
  ADMIN = "ADMIN",
  DOCS = "DOCS",
}

export enum RoutePath {
  ROOT = "/",
  APPLICATIONS = "/applications",
  CONNECTIONS = "/connections",
  COST = "/cost",
  SECURITY = "/security",
  ADMIN = "/admin",
  DOCS = "/docs",
}

export enum RouteType {
  ROOT = "ROOT",
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface IRouteMeta {
  displayName: string;
  path: RoutePath;
  type: RouteType;
}

export const RouteMetaMap: {
  [routeId in Route]: IRouteMeta;
} = {
  ROOT: {
    displayName: "Root",
    path: RoutePath.ROOT,
    type: RouteType.ROOT,
  },
  APPLICATIONS: {
    displayName: "Applications",
    path: RoutePath.APPLICATIONS,
    type: RouteType.PRIMARY,
  },
  CONNECTIONS: {
    displayName: "Connections",
    path: RoutePath.CONNECTIONS,
    type: RouteType.PRIMARY,
  },
  COST: {
    displayName: "Cost",
    path: RoutePath.COST,
    type: RouteType.PRIMARY,
  },
  SECURITY: {
    displayName: "Security",
    path: RoutePath.SECURITY,
    type: RouteType.PRIMARY,
  },
  ADMIN: {
    displayName: "Admin",
    path: RoutePath.ADMIN,
    type: RouteType.SECONDARY,
  },
  DOCS: {
    displayName: "Docs",
    path: RoutePath.DOCS,
    type: RouteType.SECONDARY,
  },
};

export const ALL_ROUTES_META: IRouteMeta[] = [
  RouteMetaMap.APPLICATIONS,
  RouteMetaMap.CONNECTIONS,
  RouteMetaMap.COST,
  RouteMetaMap.SECURITY,
  RouteMetaMap.ADMIN,
  RouteMetaMap.DOCS,
];
