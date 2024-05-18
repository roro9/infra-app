import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { RoutePath } from "./constants";
import { ApplicationsRoute, ComingSoonRoute, RootRoute, UnknownRoute } from "./routes";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootRoute />,
      errorElement: <UnknownRoute />,
      children: [
        {
          path: RoutePath.APPLICATIONS,
          element: <ApplicationsRoute />
        },
        {
          path: RoutePath.CONNECTIONS,
          element: <ComingSoonRoute />
        },
        {
          path: RoutePath.COST,
          element: <ComingSoonRoute />
        },
        {
          path: RoutePath.SECURITY,
          element: <ComingSoonRoute />
        },
        {
          path: RoutePath.ADMIN,
          element: <ComingSoonRoute />
        },
        {
          path: RoutePath.DOCS,
          element: <ComingSoonRoute />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
