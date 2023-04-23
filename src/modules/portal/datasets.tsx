import { AiFillAppstore } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { HiIdentification, HiUsers } from "react-icons/hi";

export const adminAccessApps = [
  {
    path: "/organizations",
    label: "Organizations",
    icon: BsBuildingsFill,
  },
  {
    path: "/modules",
    label: "Modules",
    icon: AiFillAppstore,
  },
  {
    path: "/roles",
    label: "Roles",
    icon: HiIdentification,
  },
  {
    path: "/users",
    label: "Users",
    icon: HiUsers,
  },
];
