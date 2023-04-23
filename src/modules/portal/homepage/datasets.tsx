import { AiFillAppstore } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { HiIdentification, HiUsers } from "react-icons/hi";
import { Organization } from "modules/admin";

import { RouteListTypes } from "./types";

export const adminAccessApps: RouteListTypes[] = [
  {
    path: "/organizations",
    label: "Organizations",
    icon: BsBuildingsFill,
    component: Organization,
  },
  {
    path: "/modules",
    label: "Modules",
    icon: AiFillAppstore,
    component: () => <div />,
  },
  {
    path: "/roles",
    label: "Roles",
    icon: HiIdentification,
    component: () => <div />,
  },
  {
    path: "/users",
    label: "Users",
    icon: HiUsers,
    component: () => <div />,
  },
];
