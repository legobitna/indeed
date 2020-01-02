import React, { useState, useEffect } from "react";
import {
  Form,
  inputGroupPrepend,
  InputGroup,
  Button,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function EditCandidatePage() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState({});
  const [validated, setValidated] = useState(false);

  useEffect(async () => {
    const response = await fetch("http://localhost:3001/candidates/" + id);
    const data = await response.json();
    console.log("data", data);
    setCandidate(data);
  }, []);

  const handleSubmit = async event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(candidate)
    };
    const response = await fetch(
      "http://localhost:3001/candidates/" + id,
      config
    );
  };

  console.log({ candidate });

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={e =>
                setCandidate({ ...candidate, first_name: e.target.value })
              } //...candidate 를 해야지 다른 키와 키에있는 값이 복사가된다
              placeholder={candidate && candidate.first_name}
              defaultValue={candidate && candidate.first_name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={e =>
                setCandidate({ ...candidate, last_name: e.target.value })
              }
              placeholder={candidate && candidate.last_name}
              defaultValue={candidate && candidate.last_name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={e =>
                  setCandidate({ ...candidate, email: e.target.value })
                }
                defaultValue={candidate && candidate.email}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              defaultValue={candidate && candidate.city}
              onChange={e =>
                setCandidate({ ...candidate, city: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              defaultValue={candidate && candidate.country}
              required
              onChange={e =>
                setCandidate({ ...candidate, country: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              defaultValue={candidate && candidate.company}
              onChange={e =>
                setCandidate({ ...candidate, company: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job Title"
              defaultValue={candidate && candidate.job_title}
              onChange={e =>
                setCandidate({ ...candidate, job_title: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}
