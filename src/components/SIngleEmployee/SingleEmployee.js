import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleEmployee = () => {
  let { id } = useParams();
  const [employeesDetails, setEmployeesDetails] = useState([]);
  const [singleEmployee, setSingleEmployee] = useState({});
  //data load howa
  useEffect(() => {
    fetch("/employeeDetails.json")
      .then((res) => res.json())
      .then((data) => setEmployeesDetails(data.employee));
  }, []);
  //call hobe jkn amar sov data load hoye state er modde set hoye jabe.sjnno dependency set kora hoise
  useEffect(() => {
    const foundEmployee = employeesDetails.find(
      (employee) => employee.login.id === id
    );
    setSingleEmployee(foundEmployee);
  }, [employeesDetails]);
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
          </Card>
        </Col>
        <Col md={5}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{singleEmployee?.name}</Card.Title>
              <Card.Text>
                <b>Email: {singleEmployee?.email}</b>
              </Card.Text>
              <Link to="/employee">
                <Button variant="primary">Go Employee</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleEmployee;
