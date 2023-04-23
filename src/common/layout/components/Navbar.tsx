import { NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";

import { LayoutTypes } from "../types";

interface Props {
  opened: boolean;
  menu: LayoutTypes["navMenu"];
}

function Nav({ opened, menu }: Props) {
  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 150, lg: 250 }}>
      {menu?.map((nav) => (
        <NavLink key={nav.path} to={nav.path} className="nav-link">
          {nav.label}
        </NavLink>
      ))}
    </Navbar>
  );
}

export default Nav;
