import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "privacy-policy",
    file: "routes/privacy-policy.tsx",
  },
  {
    path: "terms",
    file: "routes/terms.tsx",
  },
] satisfies RouteConfig;
