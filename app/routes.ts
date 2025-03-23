import {
  type RouteConfig,
  index,
  layout,
  //   layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("./routes/root.tsx", [
    route("dashboard", "./routes/dashboard.tsx"),
    route("classes/:id", "./routes/class.tsx", [
      route("overview", "./routes/class-overview.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
