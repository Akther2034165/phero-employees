import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [displayEmployees, setDisplayEmployees] = useState([]);

  //input box a change recieve korar handler
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const matchedEmployee = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchValue)
    );
    setDisplayEmployees(matchedEmployee);
  };
  useEffect(() => {
    fetch("/employeeData.json")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setDisplayEmployees(data);
      });
  }, []);
  return (
    <Container className="my-5">
      <Form style={{ width: "40%" }} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-5"
          aria-label="Search"
          onChange={handleSearch}
        />
      </Form>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          {displayEmployees.map((employee) => (
            <tr>
              <td>{employee?.id}</td>
              <td>Image</td>
              <td>{employee?.name}</td>
              <td>{employee?.designation}</td>
              <td>
                <NavLink
                  to={`/employee/${employee?.id}`}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: "none",
                  }}
                >
                  Details
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Employee;
