import { NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";
import { navLinks } from "routes/constants";

interface Props {
  opened: boolean;
}

function Nav({ opened }: Props) {
  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      {navLinks.map((nav) => (
        <NavLink key={nav.to} to={nav.to} className="nav-link">
          {nav.label}
        </NavLink>
      ))}
    </Navbar>
  );
}

export default Nav;
