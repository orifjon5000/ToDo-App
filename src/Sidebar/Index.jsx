import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarObj } from "../utils/Sidebar";
import {Container} from './Style'
export default function Index() {
  return (
    <Container>
      {SidebarObj.map(({ id, title, Icon, path }) => (
        <NavLink key={id} to={path}>
          <div>
            <Icon />
            <div>{title}</div>
          </div>
        </NavLink>
      ))}
    </Container>
  );
}
