import React from "react";
import { Nav, Navbar as Appbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Appbar bg="light" expand="lg">
      <Appbar.Brand href="#">Employee Manager</Appbar.Brand>
      <Appbar.Toggle aria-controls="navbarScroll" />
      <Appbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Stack direction="horizontal" gap={5}>
            <NavLink
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/employee"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "none",
              }}
            >
              Employee
            </NavLink>
          </Stack>
        </Nav>
      </Appbar.Collapse>
    </Appbar>
  );
};

export default NavBar;
